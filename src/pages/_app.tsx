import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { theme } from "./theme";
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}

export default MyApp
