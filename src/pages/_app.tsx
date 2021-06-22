import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { Provider as AuthProvider } from 'next-auth/client';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';
import { CartProvider } from 'hooks/use-cart';
import { WishlistProvider } from 'hooks/use-wishlist';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={client}>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The best Game Stores in the world!"
            />
          </Head>
          <GlobalStyles />
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <CartProvider>
            <WishlistProvider>
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
