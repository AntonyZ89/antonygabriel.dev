import { HStack } from '@chakra-ui/react'
import { Card, Tag } from '@components'
import { useProject } from '@contexts'
import { TagEnum } from '@enum'
import { SplideSlide } from '@splidejs/react-splide'
import React, { useEffect, useMemo } from 'react'

interface MyProjectsBaseProps {
  children: React.ReactNode
  header: React.ReactNode
  tags: Array<TagEnum>
}

const MyProjectsBase: React.FC<MyProjectsBaseProps> = ({ children, header, tags }) => {
  const { setFilters, selected, setSelected } = useProject()

  const isSelected = useMemo(() => selected.some(tag => tags.includes(tag)), [selected, tags])

  useEffect(
    function insertTags() {
      setFilters(filters => Array.from(new Set(filters.concat(...tags))).sort())
      setSelected(selected => Array.from(new Set(selected.concat(...tags))).sort())
    },
    [setFilters, setSelected, tags]
  )

  if (!isSelected) {
    return null
  }

  // TODO se o tipo for column em tela >= lg a distribuição deve ser 60% e 40% ou 70% e 30% para ficar mais visivel as imagens

  return (
    <SplideSlide>
      <Card bg={'white'} p={0} h={'full'} spacing={0} shadow={'md'}>
        {header}
        {children}
        <HStack shouldWrapChildren bg={'gray.900'} align={'normal'} wrap={'wrap'} p={2} pt={1} spacing={1}>
          {tags.sort().map(tag => (
            <Tag key={tag} tag={tag} mt={1} />
          ))}
        </HStack>
      </Card>
    </SplideSlide>
  )
}

export { MyProjectsBase }
