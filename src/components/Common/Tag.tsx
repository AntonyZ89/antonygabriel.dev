import { Tag as TagBase, TagProps as TagBaseProps } from '@chakra-ui/react'
import { getTagColor, TagEnum } from '@enum'
import { color } from '@utils'
import React from 'react'

interface TagProps extends Omit<TagBaseProps, 'tag' | 'onClick'> {
  tag: TagEnum
  unselected?: boolean
  disabled?: boolean
  onRemove?: (tag: TagEnum) => void
  onClick?: (tag: TagEnum) => void
}

const Tag: React.FC<TagProps> = ({ tag, unselected, disabled, onRemove, onClick, ...props }) => (
  <TagBase
    key={tag}
    cursor={disabled ? 'not-allowed' : 'pointer'}
    px={2}
    py={0.5}
    size={'xs'}
    fontSize={'x-small'}
    bg={unselected ? 'gray.300' : getTagColor(tag)}
    color={unselected ? 'gray.500' : color.getContrastYIQ(getTagColor(tag) as string)}
    borderBottom={'1px dotted white'}
    _hover={{ '.toggle-button': { display: 'inline' } }}
    onClick={() => !disabled && (unselected ? onClick : onRemove)?.(tag)}
    {...props}
  >
    {tag}
  </TagBase>
)

export { Tag }
