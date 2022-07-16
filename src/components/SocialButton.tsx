import { As, Button, ButtonProps } from '@chakra-ui/react'
import { Icon } from '@components'
import React from 'react'

interface SocialButtonProps extends ButtonProps {
  icon: As
  href: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, ...props }) => (
  <Button
    as={'a'}
    size={'lg'}
    variant={'solid'}
    target={'blank'}
    href={href}
    boxShadow={'1px 1px 0px white, 2px 2px 0px black'}
    borderRight={'1px solid black'}
    borderBottom={'1px solid black'}
    bg={'black'}
    color={'white'}
    _hover={{ bg: 'blue.900' }}
    {...props}
  >
    <Icon fontSize={'xx-large'} as={icon} />
  </Button>
)

export { SocialButton }
