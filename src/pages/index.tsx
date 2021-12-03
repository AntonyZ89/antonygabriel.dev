import { Button, Center, Heading } from '@chakra-ui/react'
import { Icon } from '@components'
import Head from 'next/head'
import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Orkut Clone</title>
        <meta name={'description'} content={'Orkut Clone'} />
      </Head>

      <Center flexDirection={'column'} left={0} top={0} position={'fixed'} h={'full'} w={'full'}>
        <Heading>AntonyDev</Heading>
        <br />
        <Heading fontWeight={'light'} size={'sm'}>
          soon...
        </Heading>
        <br />
        <Button as={'a'} size={'sm'} variant={'solid'} target={'blank'} href={'https://github.com/AntonyZ89'}>
          <Icon fontSize={'x-large'} as={GoMarkGithub} />
        </Button>
      </Center>
    </>
  )
}

export default Home
