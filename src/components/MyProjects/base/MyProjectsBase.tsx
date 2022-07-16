import { HStack, Tag } from '@chakra-ui/react'
import { Card } from '@components'
import { getTagColor, TagEnum } from '@enum'
import { color } from '@utils'
import React from 'react'

interface MyProjectsBaseProps {
  children: React.ReactNode
  tags: Array<TagEnum>
}

const MyProjectsBase: React.FC<MyProjectsBaseProps> = ({ children, tags }) => (
  <Card p={0} h={'full'}>
    {children}
    <HStack bg={'blue.100'} align={'normal'} wrap={'wrap'} p={2} spacing={1} h={'32px'}>
      {tags.map(tag => (
        <Tag
          key={tag}
          px={2}
          py={0.5}
          size={'xs'}
          fontSize={'x-small'}
          fontWeight={'bold'}
          bg={getTagColor(tag)}
          color={color.getContrastYIQ(getTagColor(tag) as string)}
        >
          {tag}
        </Tag>
      ))}
    </HStack>
  </Card>
)

export { MyProjectsBase }
