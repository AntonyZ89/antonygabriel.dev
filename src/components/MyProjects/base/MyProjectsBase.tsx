import { Flex, HStack, StackDirection, Tag, useBreakpointValue } from '@chakra-ui/react'
import { Card } from '@components'
import { getTagColor, TagEnum } from '@enum'
import { SplideSlide } from '@splidejs/react-splide'
import { color } from '@utils'
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
            <Tag
              key={tag}
              px={2}
              py={0.5}
              size={'xs'}
              fontSize={'x-small'}
              fontWeight={'bold'}
              bg={getTagColor(tag)}
              color={color.getContrastYIQ(getTagColor(tag) as string)}
              borderBottom={'1px dotted white'}
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </Card>
    </SplideSlide>
  )
}

export { MyProjectsBase }
