import { Box, Button, Heading, HStack, Spinner, Tooltip, VStack } from '@chakra-ui/react'
import { Icon } from '@components'
import Head from 'next/head'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

const techs = [
  {
    name: 'TypeScript',
    experience: '3 years'
  },
  {
    name: 'JavaScript',
    experience: '3 years'
  },
  {
    name: 'PHP + Yii2',
    experience: '3 years'
  },
  {
    name: 'Node',
    experience: '1 year'
  },
  {
    name: 'NextJS + React',
    experience: '2 years'
  },
  {
    name: 'React Native',
    experience: '2 years'
  },
  {
    name: 'Nuxt + VueJS',
    experience: '1 year'
  },
  {
    name: 'Flutter',
    experience: '6 months'
  },
  {
    name: 'AWS',
    experience: '2 years'
  },
  {
    name: 'SASS',
    experience: '3 years'
  }
]

const tests = [
  {
    name: 'Cypress',
    experience: '1 year'
  },
  {
    name: 'Cucumber',
    experience: '1 year'
  },
  {
    name: 'Jest',
    experience: '1 year'
  },
  {
    name: 'Codeception',
    experience: '2 years'
  }
]

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>AntonyDev</title>
        <meta name={'description'} content={'Portfólio Antony Dev'} />
      </Head>

      <VStack
        align={'center'}
        justify={'center'}
        left={0}
        top={0}
        position={'fixed'}
        h={'full'}
        w={'full'}
        spacing={8}
        p={5}
      >
        <Heading size={'3xl'} textShadow={'1px 1px 0px white, 3px 3px 0px black'}>
          AntonyDev
        </Heading>

        <Heading fontWeight={'light'} size={'sm'}>
          Full Stack Developer | Pleno
        </Heading>

        <VStack align={'normal'}>
          <Heading fontWeight={'light'} size={'sm'}>
            <HStack align={'normal'} justify={'center'} wrap={'wrap'}>
              {techs.map(({ name, experience }, index) => (
                <>
                  <Tooltip hasArrow label={experience}>
                    <Box as={'b'} cursor={'pointer'} transition={'all 0.5s'} _hover={{ color: 'blue.600' }}>
                      {name}
                    </Box>
                  </Tooltip>
                  {index < techs.length - 1 && <span>|</span>}
                </>
              ))}
            </HStack>
          </Heading>

          {/* <Divider borderColor={'blue.700'}/> */}

          <Heading fontWeight={'light'} size={'sm'}>
            <HStack align={'normal'} justify={'center'} wrap={'wrap'}>
              {tests.map(({ name, experience }, index) => (
                <>
                  <Tooltip hasArrow label={experience}>
                    <Box as={'b'} cursor={'pointer'} transition={'all 0.5s'} _hover={{ color: 'green.600' }}>
                      {name}
                    </Box>
                  </Tooltip>
                  {index < techs.length - 1 && <span>|</span>}
                </>
              ))}
            </HStack>
          </Heading>
        </VStack>

        <HStack align={'normal'}>
          <Button
            as={'a'}
            size={'sm'}
            variant={'solid'}
            target={'blank'}
            href={'https://github.com/AntonyZ89'}
            boxShadow={'1px 1px 0px white, 2px 2px 0px black'}
            borderRight={'1px solid black'}
            borderBottom={'1px solid black'}
            bg={'black'}
            color={'white'}
            _hover={{ bg: 'blue.900' }}
          >
            <Icon fontSize={'x-large'} as={GoMarkGithub} />
          </Button>
          <Button
            as={'a'}
            size={'sm'}
            variant={'solid'}
            target={'blank'}
            href={'https://www.linkedin.com/in/antonydev'}
            boxShadow={'1px 1px 0px white, 2px 2px 0px black'}
            borderRight={'1px solid black'}
            borderBottom={'1px solid black'}
            bg={'black'}
            color={'white'}
            _hover={{ bg: 'blue.900' }}
          >
            <Icon fontSize={'x-large'} as={FaLinkedinIn} />
          </Button>
        </HStack>

        <VStack align={'center'}>
          <Heading fontWeight={'light'} size={'xs'} ml={3}>
            Resume in progress...
          </Heading>

          <Spinner size={'sm'} />
        </VStack>
      </VStack>
    </>
  )
}

export default Home
