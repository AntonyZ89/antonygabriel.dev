import { Box, Flex, Heading, StatDownArrow, useBreakpointValue, useConst, VStack } from '@chakra-ui/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon'

interface LetterProps {
  letter: string
  selectedIndex: number | null
  index: number
}

const rainbow = ['red.500', 'orange.500', 'yellow.500', 'green.500', 'blue.500', 'indigo', 'violet']

/**
 * Se o mouse estiver em cima, exibe o texto
 * se passar 700ms com o mouse em cima da letra, o texto cai novamente
 * Se o mouse sair, o texto volta ao normal após 700ms ou 400ms
 * ( 700 - 300ms que é o tempo que leva para remover a letra selecionada na linha 104)
 */
const Letter: React.FC<LetterProps> = ({ letter, selectedIndex, index }) => {
  const firstLoadRef = useRef(false)
  const debounce = useRef(null)
  const [isSelected, setIsSelected] = useState(false)
  const [delayed, setDelayed] = useState(false)

  useEffect(() => {
    const val = selectedIndex !== null && [selectedIndex - 1, selectedIndex, selectedIndex + 1].includes(index)

    setIsSelected(val)
  }, [index, letter, selectedIndex])

  useEffect(() => {
    if (!firstLoadRef.current && isSelected) {
      firstLoadRef.current = true
      return
    }

    clearTimeout(debounce.current)

    if (!isSelected) {
      firstLoadRef.current && setDelayed(true)
      setTimeout(() => setDelayed(false), selectedIndex === null ? 400 : 700)
    } else {
      debounce.current = setTimeout(setIsSelected, 700, false)
    }
  }, [isSelected])

  return (
    <Box
      display={'inline-block'}
      transition={'all 0.2s'}
      color={'blue.900'}
      opacity={0}
      transform={'translateY(20px)'}
      sx={
        (delayed || isSelected) && {
          textShadow: '-1px -1px 0px var(--chakra-colors-gray-700), 1px 1px 0px white, 3px 3px 0px black',
          transform: 'translateY(-10px)',
          opacity: 0.3
        }
      }
    >
      {letter === ' ' ? '\u00A0' : letter}
    </Box>
  )
}

const NameLogo: React.FC = () => {
  const name = useConst('AntonyDev')
  const subtitle = useConst('Full Stack Developer')

  const [selected, setSelected] = useState<number>(null)
  const equivalentSubtitleSelected: number | null = useMemo(() => {
    if (selected !== null) {
      const equivalentPercent = selected / name.length

      return Math.ceil(equivalentPercent * subtitle.length)
    }

    return null
  }, [name.length, selected, subtitle.length])

  useEffect(function showAnimation() {
    const delay = 200

    setTimeout(() => {
      name.split('').forEach((_, index) => {
        setTimeout(() => setSelected(index), index * delay)
      })

      setTimeout(() => setSelected(null), name.length * delay)
    }, 500)
  }, [])

  return (
    <VStack position={'relative'} align={'center'} justify={'center'} flex={1}>
      {/* <Heading color={'white'} position={'fixed'} top={'20%'} left={'50%'} transform={'translateX(-50%)'}>
        {selected} - {seiLa}
      </Heading> */}

      <Heading
        fontSize={useBreakpointValue({
          base: '3rem',
          sm: '5rem',
          md: '7rem',
          lg: '10rem'
        })}
        textShadow={'-1px -1px 0px var(--chakra-colors-gray-700), 1px 1px 0px white, 3px 3px 0px black'}
      >
        {name.split('').map((letter, index) => (
          <Box
            key={index}
            display={'inline-block'}
            transition={'all 0.3s'}
            className={selected === index ? 'rainbow' : ''}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setTimeout(() => setSelected(selected => (selected === index ? null : selected)), 300)}
            sx={{
              '&.rainbow': { transform: 'translateY(-20px)', color: rainbow[index % rainbow.length] }
            }}
            color={'gray.800'}
          >
            {letter}
          </Box>
        ))}
      </Heading>

      <Heading
        fontSize={{
          base: '1.5rem',
          sm: '3rem',
          md: '4rem',
          lg: '6rem'
        }}
      >
        {subtitle.split('').map((letter, index) => (
          <Letter key={index} letter={letter} selectedIndex={equivalentSubtitleSelected} index={index} />
        ))}
      </Heading>

      <Flex
        flexDir={'column'}
        align={'center'}
        bottom={5}
        position={'absolute'}
        transition={'all 0.4s'}
        opacity={selected ? 0.3 : 0}
        className={'animation-vertical-loop'}
      >
        <Box color={'white'} fontSize={'xx-large'}>
          Ver mais
        </Box>
        <Icon as={StatDownArrow} fontSize={'xx-large'} />
      </Flex>
    </VStack>
  )
}

export default NameLogo
