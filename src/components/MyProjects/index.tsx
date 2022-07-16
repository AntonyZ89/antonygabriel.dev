import { SimpleGrid } from '@chakra-ui/react'
import { Card } from '@components'
import React from 'react'
import MyProjectsMusicPlayer from './MyProjectsMusicPlayer'
import MyProjectsNotePad from './MyProjectsNotePad'
import MyProjectsPHPVanilla from './MyProjectsPHPVanilla'

const MyProjects: React.FC = () => (
  <Card bg={'gray.300'} w={'full'}>
    <h1>Meus projetos</h1>

    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4} gridTemplateRows={'500px'}>
      <MyProjectsMusicPlayer />
      <MyProjectsNotePad />
      <MyProjectsPHPVanilla />
    </SimpleGrid>
  </Card>
)

export { MyProjects }
