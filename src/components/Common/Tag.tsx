import { Tag as TagBase } from '@chakra-ui/react'
import { getTagColor, TagEnum } from '@enum'
import { color } from '@utils'
import React from 'react'

interface TagProps {
  tag: TagEnum
  unselected?: boolean
  onRemove?: (tag: TagEnum) => void
  onClick?: (tag: TagEnum) => void
}

const Tag: React.FC<TagProps> = ({ tag, unselected, onRemove, onClick }) => (
  <TagBase
    key={tag}
    cursor={'pointer'}
    px={2}
    py={0.5}
    size={'xs'}
    fontSize={'x-small'}
    fontWeight={'bold'}
    bg={unselected ? 'gray.300' : getTagColor(tag)}
    color={unselected ? 'gray.500' : color.getContrastYIQ(getTagColor(tag) as string)}
    borderBottom={'1px dotted white'}
    _hover={{ '.toggle-button': { display: 'inline' } }}
    onClick={() => (unselected ? onClick : onRemove)?.(tag)}
  >
    {tag}
  </TagBase>
)

export { Tag }
