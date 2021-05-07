import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

	html {
		font-size: 62.5%
	}

	html, body, #__next{
		height: 100%;
	}

	body{
		font-family: ${props => props.theme.font.family}
	}
`;

export default GlobalStyles;
