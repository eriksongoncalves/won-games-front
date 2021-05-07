import * as S from './styles';

export default function Main({ title = 'Hello World' }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
