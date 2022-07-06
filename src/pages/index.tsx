import { Box, Heading, HStack, SimpleGrid, Spinner, useConst, VStack } from '@chakra-ui/react'
import { Experience, NameLogo, Section, SocialButton } from '@components'
import { technologies } from '@mocks'
import Head from 'next/head'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

const Home: React.FC = () => {
  const age = useConst(() => {
    const age = new Date().getFullYear() - new Date('1999-08-19').getFullYear()

    return new Date().getMonth() < 8 ? age - 1 : age
  })

  const profissionalExperience = useConst(() => {
    const time = new Date().getFullYear() - new Date('2019-06-17').getFullYear()

    return new Date().getMonth() < 6 ? time - 1 : time
  })

  return (
    <>
      <Head>
        <title>AntonyDev</title>
        <meta name={'description'} content={'Portfólio Antony Dev'} />
      </Head>

      <Box>
        <Section bg={'gray.900'}>
          <NameLogo />

          <HStack align={'normal'} top={'70%'} left={'50%'} position={'absolute'} transform={'translate(-50%, -40%)'}>
            <SocialButton href={'https://github.com/AntonyZ89'} icon={GoMarkGithub} />
            <SocialButton href={'https://www.linkedin.com/in/antonydev'} icon={FaLinkedinIn} />
          </HStack>
        </Section>

        <Section pt={24} bg={'gray.600'} color={'whiteAlpha.700'}>
          <VStack
            align={'center'}
            position={'absolute'}
            top={'10px'}
            left={'50%'}
            transform={'translateX(-50%)'}
            p={2}
            rounded={'md'}
            w={{ base: '60%', md: '30%' }}
          >
            <Heading fontWeight={'light'} size={'xs'} ml={3}>
              Resume in progress...
            </Heading>

            <Spinner size={'sm'} />
          </VStack>

          <VStack align={'normal'} spacing={4}>
            <Heading fontWeight={'light'} size={'md'}>
              Full Stack Developer | <b>Pleno</b>
            </Heading>

            <VStack align={'normal'} textAlign={'justify'} alignSelf={'center'} fontSize={'md'}>
              <Box as={'p'}>
                Olá! Me chamo Antony, {age} anos, formado em Análise e Desenvolvimento de Sistemas, atuo na área há
                {' ' + profissionalExperience} anos como desenvolvedor Web e Mobile.
              </Box>
              <Box as={'p'}>
                Iniciei meus estudos em 2017 e na metade do ano de 2019 comecei a trabalhar como desenvolvedor web com PHP e JavaScript. Em
                2020 tive minha primeira experiência como desenvolvedor mobile com React Native e desde então estou sempre buscando otimizar
                o desenvolvimento de aplicações estudando tecnologias como React, React Native, TypeScript, Flutter, Node, etc.
              </Box>
              <Box as={'p'}>
                Possuo conhecimento em outras ferramentas como AWS, Google Cloud, Docker, Heroku, Vercel, Netlify, Git, GitHub, GitLab,
                Bitbucket, Jira, Trello, Slack, ClickUp, etc.
              </Box>
              <Box as={'p'}>
                Em meu tempo livre sempre reservo um pouco de tempo para estudar e aprender novas tecnologias buscando o melhor para minhas
                aplicações.
              </Box>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={2}>
              {technologies.map((technology, index) => (
                <Experience key={index} group={technology} />
              ))}
            </SimpleGrid>
            {/* <Divider borderColor={'blue.700'}/> */}
          </VStack>
        </Section>
      </Box>
    </>
  )
}

export default Home
