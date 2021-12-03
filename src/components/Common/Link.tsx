import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import LinkBase from 'next/link'

type LinkProps = {
  children: string | number | React.ReactElement
  href: string
  'aria-label'?: string
}

const Link: React.FC<LinkProps & ButtonProps> = ({ children, href, 'aria-label': ariaLabel, ...props }) => (
  <LinkBase href={href} passHref>
    <Button variant={'link'} as={'a'} textDecor={'none'} aria-label={ariaLabel || children.toString()} {...props}>
      {children}
    </Button>
  </LinkBase>
)

export default Link
