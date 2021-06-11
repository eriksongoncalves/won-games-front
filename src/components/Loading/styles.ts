import styled, { css, keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    height: 13px;
    width: 13px;
  }
  50% {
    height: 16px;
    width: 16px;
  }
  100% {
    height: 13px;
    width: 13px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55px;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.div`
  ${() => css`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: currentColor;
    display: inline-block;

    &:nth-child(1) {
      animation: ${animate} 1s 0s infinite ease-in-out;
    }
    &:nth-child(2) {
      animation: ${animate} 1s 200ms infinite ease-in-out;
    }
    &:nth-child(3) {
      animation: ${animate} 1s 400ms infinite ease-in-out;
    }
  `}
`;
