import { Button, Heading } from '@chakra-ui/react'
import { Icon } from '@components'
import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

interface MyProjectBaseHeaderProps {
  repository: string
  children: React.ReactNode
}

const MyProjectBaseHeader: React.FC<MyProjectBaseHeaderProps> = ({ repository, children }) => (
  <Heading h={'43px'} size={'sm'} py={3} fontWeight={'normal'} bg={'tomato'} color={'white'} textAlign={'center'} position={'relative'}>
    {children}

    <Button
      className={'vertical-align'}
      right={2}
      px={0}
      as={'a'}
      size={'sm'}
      variant={'solid'}
      target={'blank'}
      boxShadow={0}
      rounded={'full'}
      href={`https://github.com/AntonyZ89/${repository}`}
      bg={'transparent'}
      color={'white'}
      _hover={{ transform: 'scale(1.3) translateY(-40%)' }}
    >
      <Icon fontSize={'x-large'} as={GoMarkGithub} />
    </Button>
  </Heading>
)

export { MyProjectBaseHeader }
