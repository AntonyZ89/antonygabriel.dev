import { Flex, HStack, StackDirection, useBreakpointValue } from '@chakra-ui/react'
import { Card, Tag } from '@components'
import { TagEnum } from '@enum'
import { SplideSlide } from '@splidejs/react-splide'
import React from 'react'

interface MyProjectsBaseProps {
  children: React.ReactNode
  header: React.ReactNode
  tags: Array<TagEnum>
  direction?: StackDirection
}

const MyProjectsBase: React.FC<MyProjectsBaseProps> = ({ children, header, tags, direction: _direction = 'row' }) => {
  const direction = useBreakpointValue<StackDirection>({ base: 'column', lg: _direction })

  // TODO se o tipo for column em tela >= lg a distribuição deve ser 60% e 40% ou 70% e 30% para ficar mais visivel as imagens

  return (
    <SplideSlide>
      <Card bg={'white'} p={0} h={'full'} spacing={0} shadow={'md'}>
        {header}
        <Flex direction={direction} flex={1}>
          {children}
        </Flex>
        <HStack bg={'gray.900'} align={'normal'} wrap={'wrap'} p={2} spacing={1} h={'32px'}>
          {tags.sort().map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </HStack>
      </Card>
    </SplideSlide>
  )
}

export { MyProjectsBase }
