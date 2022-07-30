import { As, Flex, Heading, HStack, IconButton, IconButtonProps, Tooltip } from '@chakra-ui/react'
import { Icon } from '@components'
import React, { AnchorHTMLAttributes } from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

interface MyProjectBaseHeaderProps {
  repository?: string
  website?: string
  children: React.ReactNode
}

interface BaseButtonProps
  extends Omit<IconButtonProps, 'icon' | 'children'>,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href'> {
  icon: As
}

const BaseButton: React.FC<BaseButtonProps> = ({ icon, ...props }) => (
  <Tooltip hasArrow label={props['aria-label']}>
    <span>
      <IconButton
        px={0}
        size={'sm'}
        variant={'solid'}
        boxShadow={'none'}
        as={'a'}
        rounded={'full'}
        color={'white'}
        bg={'whiteAlpha.200'}
        _hover={{ transform: 'scale(1.2)' }}
        icon={<Icon fontSize={'x-large'} as={icon} />}
        {...props}
      />
    </span>
  </Tooltip>
)

const Repository: React.FC<{ repository: string }> = ({ repository }) => (
  <BaseButton
    aria-label={'Abrir Repositório'}
    as={'a'}
    target={'_blank'}
    href={`https://github.com/AntonyZ89/${repository}`}
    icon={GoMarkGithub}
  />
)

const Website: React.FC<{ website: string }> = ({ website }) => (
  <BaseButton aria-label={'Abrir Website'} as={'a'} target={'_blank'} href={website} icon={FaGlobeAmericas} />
)

const MyProjectBaseHeader: React.FC<MyProjectBaseHeaderProps> = ({ repository, website, children }) => (
  <Flex
    justify={'center'}
    direction={'column'}
    bg={'tomato'}
    py={0}
    color={'white'}
    h={{ base: '45px', sm: '60px', md: '45px' }}
    position={'relative'}
  >
    <Heading size={'sm'} fontWeight={'normal'} textAlign={'center'} position={'relative'}>
      {children}
    </Heading>

    <HStack className={'vertical-align'} right={2} spacing={1}>
      {repository && <Repository repository={repository} />}
      {website && <Website website={website} />}
    </HStack>
  </Flex>
)

export { MyProjectBaseHeader }
