import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { theme } from "./theme";
import { ChakraProvider } from '@chakra-ui/react';
import { BeastProvider } from '../hooks/useBeast';
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <BeastProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </BeastProvider>
      </ChakraProvider>
    </NextAuthProvider>
  );
}

export default MyApp
