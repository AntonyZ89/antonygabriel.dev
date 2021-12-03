import '@assets/main.scss'
import { ChakraProvider, Container } from '@chakra-ui/react'
import '@fontsource/poppins'
import theme from '@theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // const location = useRouter()
  // const [showNavbar, setShowNavbar] = useState(false)

  // useEffect(() => {
  //   setShowNavbar(!['/signup', '/'].includes(location.pathname))
  // }, [location.pathname])

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Head>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicon.ico'} />
      </Head>
      <Container maxW={'container.xl'} mt={2}>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
