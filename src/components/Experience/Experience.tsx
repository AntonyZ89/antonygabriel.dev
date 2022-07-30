import { Heading, SimpleGrid, useBreakpointValue, VStack } from '@chakra-ui/react'
import { Card, Rating } from '@components'
import { TechnologyGroupType } from '@types'
import React from 'react'

interface ExperienceProps {
  group: TechnologyGroupType
}

const Experience: React.FC<ExperienceProps> = ({ group: { name, list } }) => {
  const columns = useBreakpointValue<number>({ base: 1, lg: 2 })

  return (
    <Card h={'full'} px={0} py={2} spacing={3}>
      <Heading
        size={'md'}
        position={'relative'}
        textAlign={'center'}
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

      <SimpleGrid columns={1} gap={3}>
        {list.map((technology, index) => (
          <SimpleGrid
            key={technology.name}
            alignItems={'center'}
            textAlign={'left'}
            templateColumns={'40% 60%'}
            position={'relative'}
            px={{ base: 2, md: 3 }}
            _after={
              columns && index < list.length - columns
                ? {
                    content: "''",
                    position: 'absolute',
                    bg: 'gray.300',
                    left: 0,
                    bottom: -1,
                    width: '100%',
                    h: '1px'
                  }
                : undefined
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
}

export default Experience
