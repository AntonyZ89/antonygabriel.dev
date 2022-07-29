import '@assets/main.scss'
import '@fontsource/poppins'
import '@splidejs/react-splide/css/sea-green'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicon.ico'} />
      </Head>

      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  )
}

export default MyApp
