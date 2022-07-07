import { Heading, SimpleGrid, Table, Td, Tr, useBreakpointValue, VStack } from '@chakra-ui/react'
import { TechnologyGroupType } from '@types'
import React, { useMemo } from 'react'
import Card from '../Common/Card'
import Rating from '../Rating'

interface ExperienceProps {
  group: TechnologyGroupType
}

const Experience: React.FC<ExperienceProps> = ({ group: { columns, name, list } }) => {
  const calculatedColumn = useBreakpointValue(columns || [1])

  const splitList = useMemo(() => {
    const result = []
    const increment = list.length / calculatedColumn

    for (let i = 0; i < list.length; i += increment) {
      result.push(list.slice(i, i + increment))
    }

    return result
  }, [calculatedColumn, list])

  return (
    <Card h={'full'}>
      <Heading
        size={'md'}
        position={'relative'}
        _after={{
          content: "''",
          position: 'absolute',
          right: '50%',
          bottom: 0,
          width: '50px',
          transform: 'translateX(50%)',
          height: '2px',
          bg: 'blue.300'
        }}
      >
        {name}
      </Heading>

      <SimpleGrid columns={calculatedColumn}>
        {splitList.map((list, index) => (
          <Table key={index} size={'sm'} variant={'simple'} borderLeft={index > 0 ? '1px solid white' : null}>
            <colgroup>
              <col width={'25%'} />
              <col width={'80%'} />
            </colgroup>
            <tbody>
              {list.map(technology => (
                <Tr key={technology.name}>
                  <Td>
                    <Heading wordBreak={'initial'} fontSize={'sm'} transition={'all 0.5s'} _hover={{ color: 'green.600' }}>
                      {technology.name}
                    </Heading>
                  </Td>
                  <Td whiteSpace={'nowrap'}>
                    <VStack align={'normal'}>
                      <div>
                        Experiência: <b>{technology.experience}</b>
                      </div>
                      <Rating technology={technology} />
                    </VStack>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        ))}
      </SimpleGrid>
    </Card>
  )
}

export default Experience
