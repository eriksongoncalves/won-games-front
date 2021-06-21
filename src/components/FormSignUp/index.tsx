import React, { useState } from 'react';
import { signIn } from 'next-auth/client';
import Link from 'next/link';
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';
import { useMutation } from '@apollo/client';

import { FormWrapper, FormLink, FormLoading } from 'components/Form';
import { Button, TextField } from 'components';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { MUTATION_REGISTER } from 'graphql/mutations/register';

const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  });

  const [createUser, { error }] = useMutation(MUTATION_REGISTER, {
    onError: err => {
      console.log(err);
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
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={v => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={v => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={v => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={v => handleInput('confirm-password', v)}
          icon={<Lock />}
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
