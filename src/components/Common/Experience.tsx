import { Heading, Table, Td, Tr, VStack } from '@chakra-ui/react'
import { TechnologyGroupType } from '@types'
import React from 'react'
import Card from './Card'
import Rating from './Rating'

interface ExperienceProps {
  group: TechnologyGroupType
}

const Experience: React.FC<ExperienceProps> = ({ group: { name, list } }) => (
  <Card>
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

    <Table size={'sm'} variant={'simple'}>
      <colgroup>
        <col width={'30%'} />
        <col width={'70%'} />
      </colgroup>
      <tbody>
        {list.map(technology => (
          <Tr key={technology.name}>
            <Td whiteSpace={'nowrap'}>
              <Heading fontSize={'sm'} transition={'all 0.5s'} _hover={{ color: 'green.600' }}>
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
  </Card>
)

export default Experience
