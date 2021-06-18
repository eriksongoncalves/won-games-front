import '../.jest/next-image.mock';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart';

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
];
