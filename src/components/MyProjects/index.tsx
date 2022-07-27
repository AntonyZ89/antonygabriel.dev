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
  <Card bg={'transparent'} w={'full'} shadow={'none'}>
    <Heading size={'lg'} color={'white'} textAlign={'center'}>
      Meus projetos
    </Heading>
    <SimpleGrid columns={1} gap={4} gridAutoRows={'500px'}>
      <MyProjectsMusicPlayer />
      <MyProjectsNotePad />
      <MyProjectsPHPVanilla />
      <MyProjectsOrkut />
      <MyProjectsTwitch />
      <MyProjectsBookStore />
      <MyProjectsDelivery />
      <MyProjectsDating />
    </SimpleGrid>
  </Card>
)

export { MyProjects }
