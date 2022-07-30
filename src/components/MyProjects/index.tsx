import { Box, Heading, HStack } from '@chakra-ui/react'
import { Card, Tag } from '@components'
import { useProject } from '@contexts'
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

  const { filters, selected, setSelected } = useProject()

  useEffect(function enableSplide() {
    setLoaded(true)
  }, [])

  useEffect(
    function updateTotal() {
      let splide = splideRef.current?.splide

      if (splide) {
        splide = splide.refresh()
        setTotal(splide.length)
        setCurrent(splide.index + 1)
        // splide.go(0) // IMPORTANT remove if not needed
      }
    },
    [selected]
  )

  function handleSelect(tag: TagEnum) {
    let list: Array<TagEnum>

    if (selected.includes(tag)) {
      list = selected.filter(t => t !== tag)
    } else {
      list = [...selected, tag]
    }

    list.sort()

    setSelected(list)
  }

  return (
    <Card bg={'transparent'} w={'full'} align={'center'} shadow={'none'}>
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
            backend{' '}
          </Box>
          e{' '}
          <Box as={'span'} color={'white'}>
            mobile
          </Box>
          .
        </p>
      </Box>

      <Heading size={{ base: 'xs', sm: 'sm' }} color={'white'} mb={2}>
        &lt; {current} / {total} &gt;
      </Heading>

      <Card w={'full'}>
        <Box as={'p'} fontSize={'x-small'} fontWeight={'bold'}>
          Clique para adicionar/remover alguma tecnologia:
        </Box>

        <HStack shouldWrapChildren align={'normal'} spacing={1} wrap={'wrap'}>
          {selected.map(tag => (
            <Tag key={tag} tag={tag} unselected={false} disabled={selected.length === 1} onRemove={handleSelect} mt={1} />
          ))}
          {filters
            .filter(tag => !selected.includes(tag))
            .map(tag => (
              <Tag key={tag} tag={tag} unselected={true} onClick={handleSelect} mt={1} />
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
              easing: 'cubic-bezier(.42,.65,.27,.99)',
              breakpoints: {
                768: {
                  height: 600
                }
              }
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
