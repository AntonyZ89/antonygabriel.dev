import { Box, Heading } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseHeader, MyProjectsBase } from './base'

const MyProjectsPHPVanilla: React.FC = () => (
  <Box>
    <MyProjectsBase tags={[TagEnum.PHP, TagEnum.PHPUnit, TagEnum.HTML, TagEnum.CSS]}>
      <MyProjectBaseHeader repository={'vanilla-php-mvc'}>MVC - PHP Puro</MyProjectBaseHeader>

      <MyProjectBaseBody flex={1}>
        <Box as={'p'} textAlign={'center'}>
          MVC com PHP puro inspirado no <a href={'https://www.yiiframework.com/'}>Framework Yii2</a>.
        </Box>
        <Box as={'p'}>
          O projeto possui autenticação por Login e Senha, conexão com banco de dados <b>MySQL</b>, um exemplo de um <b>CRUD</b>
        </Box>
        <p>
          A renderização de telas acontece dinâmicamente através das views que estão localizadas em{' '}
          <Box as={'span'} color={'blue.600'}>
            src/views
          </Box>{' '}
          e que estão dentro da pasta que possui o nome do controller (
          <Box as={'span'} color={'blue.600'}>
            src/views/controller-name
          </Box>
          )
        </p>

        <p>
          É possível renderizar outros arquivos dentro das views, como por exemplo, um arquivo de cabeçalho ou rodapé utilizando o método
          <Box textAlign={'center'} color={'blue.600'}>
            View::render(string <b>$folder</b>, string <b>$file</b>, array <b>?$options</b>)
          </Box>
        </p>

        <Heading textShadow={'0 0 2px black'} color={'yellow'} size={'md'} pt={10} textAlign={'center'}>
          Continuar aqui
        </Heading>
      </MyProjectBaseBody>
    </MyProjectsBase>
  </Box>
)

export default MyProjectsPHPVanilla
