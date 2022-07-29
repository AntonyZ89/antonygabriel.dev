import { Heading } from '@chakra-ui/react'
import { Card } from '@components'
import { Splide } from '@splidejs/react-splide'
import React, { useRef } from 'react'
import MyProjectsBookStore from './MyProjectsBookStore'
import MyProjectsDating from './MyProjectsDating'
import MyProjectsDelivery from './MyProjectsDelivery'
import MyProjectsMusicPlayer from './MyProjectsMusicPlayer'
import MyProjectsNotePad from './MyProjectsNotePad'
import MyProjectsOrkut from './MyProjectsOrkut'
import MyProjectsPHPVanilla from './MyProjectsPHPVanilla'
import MyProjectsTwitch from './MyProjectsTwitch'

const MyProjects: React.FC = () => {
  const splideRef = useRef<Splide | null>()

  return (
    <Card bg={'transparent'} w={'full'} align={'center'} shadow={'none'} className={'project-list'}>
      <Heading size={'lg'} color={'white'} textAlign={'center'} mb={4}>
        Meus projetos
      </Heading>

      <Splide
        ref={ref => (splideRef.current = ref)}
        className={'my-project-carousel'}
        options={{
          rewind: true,
          rewindSpeed: 1500,
          speed: 1000,
          gap: 10,
          arrows: false,
          interval: 3000,
          wheel: true,
          rewindByDrag: true,
          easing: 'cubic-bezier(.42,.65,.27,.99)'
        }}
      >
        <MyProjectsMusicPlayer />
        <MyProjectsNotePad />
        <MyProjectsPHPVanilla />
        <MyProjectsOrkut />
        <MyProjectsTwitch />
        <MyProjectsBookStore />
        <MyProjectsDelivery />
        <MyProjectsDating />
      </Splide>
    </Card>
  )
}

export { MyProjects }
