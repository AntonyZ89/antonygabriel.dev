import { Heading, SimpleGrid } from '@chakra-ui/react'
import { Card } from '@components'
import React from 'react'
import MyProjectsBookStore from './MyProjectsBookStore'
import MyProjectsDating from './MyProjectsDating'
import MyProjectsDelivery from './MyProjectsDelivery'
import MyProjectsMusicPlayer from './MyProjectsMusicPlayer'
import MyProjectsNotePad from './MyProjectsNotePad'
import MyProjectsOrkut from './MyProjectsOrkut'
import MyProjectsPHPVanilla from './MyProjectsPHPVanilla'
import MyProjectsTwitch from './MyProjectsTwitch'

const MyProjects: React.FC = () => (
  <Card bg={'gray.300'} w={'full'}>
    <Heading size={'lg'} textAlign={'center'}>
      Meus projetos
    </Heading>

    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4} gridAutoRows={'500px'}>
      <MyProjectsMusicPlayer />
      <MyProjectsNotePad />
      <MyProjectsPHPVanilla />
      <MyProjectsOrkut />
      <MyProjectsTwitch />
      <MyProjectsBookStore />
      {/* <MyProjectsDelivery /> */}
      {/* <MyProjectsDating /> */}
    </SimpleGrid>
  </Card>
)

export { MyProjects }
