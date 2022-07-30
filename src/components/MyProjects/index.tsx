import { Box, Heading, HStack, useConst } from '@chakra-ui/react'
import { Card, Tag } from '@components'
import { TagEnum } from '@enum'
import { Splide } from '@splidejs/react-splide'
import React, { useEffect, useRef, useState } from 'react'
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
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(0)
  const filters = useConst(Object.values(TagEnum).sort())
  const [selected, setSelected] = useState<Array<TagEnum>>(filters)

  useEffect(function enableSplide() {
    setLoaded(true)
  }, [])

  function handleSelect(tag: TagEnum) {
    if (selected.includes(tag)) {
      setSelected(selected.filter(t => t !== tag))
    } else {
      setSelected([...selected, tag])
    }
  }

  return (
    <Card bg={'transparent'} w={'full'} align={'center'} shadow={'none'} className={'project-list'}>
      <Heading size={'lg'} color={'white'} textAlign={'center'}>
        Meus projetos
      </Heading>

      <Box textAlign={'justify'} color={'whiteAlpha.700'} fontSize={{ base: 'xs', sm: 'sm' }}>
        <p>
          Aqui você pode ver os projetos que eu desenvolvi. Aplicações{' '}
          <Box as={'span'} color={'white'}>
            frontend
          </Box>
          ,{' '}
          <Box as={'span'} color={'white'}>
            mobile{' '}
          </Box>
          e{' '}
          <Box as={'span'} color={'white'}>
            backend
          </Box>
          .
        </p>
      </Box>

      <Heading size={{ base: 'xs', sm: 'sm' }} color={'white'} mb={2}>
        &lt; {current} / {total} &gt;
      </Heading>

      <Card h={'full'}>
        <Box as={'p'} fontSize={'x-small'} fontWeight={'bold'}>
          Clique para adicionar/remover alguma tecnologia:
        </Box>

        <HStack align={'normal'} spacing={1}>
          {filters.sort().map(tag => (
            <Tag key={tag} tag={tag} unselected={!selected.includes(tag)} onRemove={handleSelect} onClick={handleSelect} />
          ))}
        </HStack>

        {loaded && (
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
            onMounted={splide => setTotal(splide.length)}
            onMove={splide => setCurrent(splide.index + 1)}
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
        )}
      </Card>
    </Card>
  )
}

export { MyProjects }
