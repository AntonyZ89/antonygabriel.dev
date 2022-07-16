import { Box, BoxProps } from '@chakra-ui/react'
import { TagEnum } from '@enum'
import React from 'react'
import { MyProjectBaseBody, MyProjectBaseHeader, MyProjectsBase } from './base'

const Highlight: React.FC<BoxProps & { code?: boolean }> = ({ children, code, ...props }) => (
  <Box
    as={'span'}
    fontWeight={'bold'}
    sx={
      code
        ? {
            as: 'div',
            textAlign: 'center',
            fontWeight: 'normal',
            bg: 'gray.300',
            py: 1,
            rounded: 'md'
          }
        : undefined
    }
    {...props}
  >
    {children}
  </Box>
)

const MyProjectsPHPVanilla: React.FC = () => (
  <Box>
    <MyProjectsBase tags={[TagEnum.PHP, TagEnum.PHPUnit, TagEnum.HTML, TagEnum.CSS, TagEnum.Bootstrap]}>
      <MyProjectBaseHeader repository={'vanilla-php-mvc'}>MVC - PHP Puro</MyProjectBaseHeader>

      <MyProjectBaseBody flex={1}>
        <Box as={'p'} textAlign={'center'}>
          MVC com PHP puro inspirado no <a href={'https://www.yiiframework.com/'}>Framework Yii2</a>.
        </Box>
        <p>Projeto feito do zero, utilizando apenas PHP puro e sem frameworks.</p>

        <p>
          Possui autenticação, cadastro e logout. Utilizando <a href={'https://mdbootstrap.com'}>Material Design Bootstrap 5</a> no
          frontend, foi criado um sistema de cadastro de dívidas como exemplo de uso das funcionalidades que o MVC possui.
        </p>

        <p>
          Após realizar o cadastro/login no sistema, no menu lateral possui uma opção para acessar o menu <b>Minhas dívidas</b> para
          listagem, criação, edição e exclusão de dívidas do usuário autenticado.
        </p>

        <p>
          A renderização de telas acontece dinâmicamente através das views que estão localizadas em <Highlight>src/views</Highlight> e que
          estão dentro da pasta que possui o nome do controller (<Highlight>src/views/controller-name</Highlight>)
        </p>

        <p>
          Para facilitar o acesso às pastas do sistema, é possível registrar alias para os diretórios do projeto no arquivo
          <Highlight>/config/params.php</Highlight> utilizando o método
        </p>

        <Highlight code>
          Application::setAlias(string <b>$alias</b>, string <b>$path</b>);
        </Highlight>

        <p>
          É possível renderizar outros arquivos dentro das views, como por exemplo, um arquivo de cabeçalho ou rodapé utilizando o método
        </p>

        <Highlight code>
          View::render(string <b>$folder</b>, string <b>$file</b>, array <b>?$params</b>);
        </Highlight>

        <p>
          Possui um sistema de rotas, que são definidas no arquivo <Highlight>index.php</Highlight> utilizando a classe{' '}
          <Highlight>Router</Highlight>
        </p>
      </MyProjectBaseBody>
    </MyProjectsBase>
  </Box>
)

export default MyProjectsPHPVanilla
