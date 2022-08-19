import { Box, Heading, HStack, useConst, VStack } from '@chakra-ui/react'
import { ExperienceCarousel, MyProjects, NameLogo, Section, SocialButton } from '@components'
import { ProjectProvider } from '@contexts'
import Head from 'next/head'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box as={'span'} color={'white'} fontWeight={'medium'}>
    {children}
  </Box>
)

const Home: React.FC = () => {
  const age = useConst(() => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()
    const age = currentDate.getFullYear() - new Date('1999-08-19').getFullYear()

    return currentMonth < 8 || currentDay < 19 ? age - 1 : age
  })

  const profissionalExperience = useConst(() => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const time = currentDate.getFullYear() - new Date('2019-06-17').getFullYear()

    return currentMonth < 6 ? time - 1 : time
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

        <Section bg={'gray.600'} color={'whiteAlpha.700'}>
          <VStack align={'normal'} spacing={4}>
            <Heading fontWeight={'light'} color={'white'} size={{ base: 'sm', sm: 'md' }} textAlign={'center'}>
              Full Stack Developer | <b>Pleno</b>
            </Heading>

            <VStack align={'normal'} textAlign={'justify'} alignSelf={'center'} fontSize={{ base: 'xs', sm: 'sm' }}>
              <Box as={'p'}>
                Olá! Me chamo <Highlight>Antony</Highlight>, {age} anos, formado em Análise e Desenvolvimento de Sistemas, atuo na área há
                {' ' + profissionalExperience} anos como desenvolvedor <Highlight>Web</Highlight> e <Highlight>Mobile</Highlight>.
              </Box>
              <Box as={'p'}>
                Iniciei meus estudos em 2017 e na metade do ano de 2019 comecei a trabalhar como desenvolvedor web com PHP e JavaScript. Em
                2020 tive minha primeira experiência como desenvolvedor mobile com React Native e desde então estou sempre buscando otimizar
                o desenvolvimento de aplicações estudando tecnologias como React, React Native, TypeScript, Flutter, Node, etc.
              </Box>
              <Box as={'p'}>
                Possuo conhecimento em outras ferramentas como <Highlight>AWS</Highlight>, <Highlight>Google Cloud</Highlight>,
                <Highlight> Docker</Highlight>, <Highlight>Heroku</Highlight>, <Highlight>Vercel</Highlight>, <Highlight>Netlify</Highlight>
                ,<Highlight> Git</Highlight>, <Highlight>GitHub</Highlight>, <Highlight>GitLab</Highlight>, <Highlight>Bitbucket</Highlight>
                ,<Highlight> Jira</Highlight>, <Highlight>Trello</Highlight>, <Highlight>Slack</Highlight>, <Highlight>ClickUp</Highlight>,
                etc.
              </Box>
              <Box as={'p'}>
                Em meu tempo livre sempre reservo um pouco de tempo para estudar e aprender novas tecnologias buscando o melhor para minhas
                aplicações.
              </Box>
            </VStack>

            <ExperienceCarousel />
          </VStack>
        </Section>

        <Section bg={'purple.900'} color={'whiteAlpha.700'}>
          <ProjectProvider>
            <MyProjects />
          </ProjectProvider>
        </Section>
      </Box>
    </>
  )
}

export default Home
