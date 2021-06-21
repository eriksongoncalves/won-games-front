import React, { useState } from 'react';
import { signIn } from 'next-auth/client';
import Link from 'next/link';
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined';
import { useMutation } from '@apollo/client';

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form';
import { Button, TextField } from 'components';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { MUTATION_REGISTER } from 'graphql/mutations/register';
import { FieldErrors, signUpValidate } from 'utils/validations';

const FormSignUp = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  });

  const [createUser, { error }] = useMutation(MUTATION_REGISTER, {
    onError: err => {
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      );
      setLoading(false);
    },
    onCompleted: async () => {
      if (!error) {
        await signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        });
      }
    }
  });

  const handleInput = (field: string, value: string) => {
    setValues(s => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setFormError('');

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      return;
    }

    setFieldError({});
    setLoading(true);

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    });
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={v => handleInput('username', v)}
          icon={<AccountCircle />}
          error={fieldError?.username}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          onInputChange={v => handleInput('email', v)}
          icon={<Email />}
          error={fieldError?.email}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={v => handleInput('password', v)}
          icon={<Lock />}
          error={fieldError?.password}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          onInputChange={v => handleInput('confirm_password', v)}
          icon={<Lock />}
          error={fieldError?.confirm_password}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
