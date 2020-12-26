import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'lib/auth';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
