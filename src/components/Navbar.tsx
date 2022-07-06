import {
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  theme,
  useBreakpoint,
  useBreakpointValue,
  useDisclosure,
  useMergeRefs,
  useOutsideClick
} from '@chakra-ui/react'
import { Card, Icon, Link } from '@components'
import React, { useRef } from 'react'
import { MdMenu, MdSearch } from 'react-icons/md'

const Menu: React.FC = () => (
  <HStack>
    <Link href={'/home'}>Início</Link>
    <Link href={'/profile'}>Perfil</Link>
    <Link href={'/community'}>Comunidades</Link>
    <Link href={'/friend'}>Amigos</Link>
    <Link href={'/scrap'}>Recados</Link>
  </HStack>
)

const Dropdown: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const cardRef = useRef()
  const buttonRef = useRef()

  useOutsideClick({
    ref: buttonRef,
    handler: (e: Event) => {
      const isDropdown = !(e.target as HTMLElement).offsetParent?.className.includes('dropdown')

      return isOpen && isDropdown && onClose()
    }
  })

  return (
    <>
      <IconButton
        ref={useMergeRefs(cardRef, buttonRef)}
        onClick={onToggle}
        icon={<Icon as={MdMenu} />}
        p={2}
        h={'auto'}
        aria-label={'Abrir ou fechar menu'}
        alignSelf={'normal'}
      />
      <Card
        ref={cardRef}
        display={isOpen ? 'block' : 'none'}
        position={'absolute'}
        top={12}
        left={0}
        right={0}
        zIndex={1000}
        p={2}
        rounded={'md'}
        className={'dropdown'}
      >
        <Link href={'/home'}>Início</Link>
        <Divider h={0.5} />
        <Link href={'/profile'}>Perfil</Link>
        <Divider h={0.5} />
        <Link href={'/community'}>Comunidades</Link>
        <Divider h={0.5} />
        <Link href={'/friend'}>Amigos</Link>
        <Divider h={0.5} />
        <Link href={'/scrap'}>Recados</Link>
        <Divider h={0.5} />
        <Link href={'/photo'}>Fotos</Link>
        <Divider h={0.5} />
        <Link href={'/video'}>Vídeos</Link>
        <Divider h={0.5} />
        <Link href={'/testimony'}>Depoimentos</Link>
        <Divider h={0.5} />
        <Link href={'/fan'}>Fãs</Link>
        <Divider h={0.5} />
        <Link href={'/setting'}>Configurações</Link>
        <Divider h={0.5} />
        <Button variant={'link'}>Sair</Button>
      </Card>
    </>
  )
}
const Navbar: React.FC = () => {
  const breakpoint = useBreakpoint()

  const compact = ['base', 'sm'].includes(breakpoint)

  return (
    <Card as={'nav'} display={'block'} mb={2} p={1} h={10} position={'relative'}>
      <Flex
        h={8}
        pl={{ base: 0, md: 3 }}
        mx={'auto'}
        fontSize={useBreakpointValue({
          base: 10,
          sm: theme.fontSizes.xs,
          md: theme.fontSizes.sm
        })}
      >
        {compact ? (
          <Dropdown />
        ) : (
          <>
            <Menu />
            <Spacer />
          </>
        )}

        <HStack spacing={1} flex={{ base: 1, md: null }}>
          <Button px={3} variant={'ghost'} size={'sm'} display={compact ? 'none' : 'inline-flex'}>
            Sair
          </Button>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MdSearch} />
            </InputLeftElement>
            <Input />
          </InputGroup>
          <Button px={3} size={'sm'} h={'auto'} alignSelf={'normal'} aria-label={'Buscar por novos amigos e novas comunidades'}>
            Buscar
          </Button>
        </HStack>
      </Flex>
    </Card>
  )
}

export default Navbar
