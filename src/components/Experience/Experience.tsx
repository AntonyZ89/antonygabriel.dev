import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { TechnologyGroupType } from '@types'
import React from 'react'
import Card from '../Common/Card'
import Rating from '../Rating'

interface ExperienceProps {
  group: TechnologyGroupType
}

const Experience: React.FC<ExperienceProps> = ({ group: { name, list } }) => (
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

    <SimpleGrid columns={2} gap={2}>
      {list.map((technology, index) => (
        <SimpleGrid
          key={technology.name}
          alignItems={'center'}
          textAlign={'left'}
          templateColumns={'35% 65%'}
          position={'relative'}
          _after={
            index < list.length - 2 && {
              content: "''",
              position: 'absolute',
              bg: 'gray.300',
              left: 0,
              bottom: -1,
              width: '100%',
              h: '1px'
            }
          }
        >
          <Heading wordBreak={'initial'} fontSize={'sm'} transition={'all 0.5s'}>
            {technology.name}
          </Heading>
          <VStack align={'normal'}>
            <div>
              Experiência: <b>{technology.experience}</b>
            </div>
            <Rating technology={technology} />
          </VStack>
        </SimpleGrid>
      ))}
    </SimpleGrid>
  </Card>
)

export default Experience
