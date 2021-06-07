import { useRouter } from 'next/router';

import { Container, Heading, ProfileMenu } from 'components';
import Base from 'templates/Base';

import * as S from './styles';

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;
