import type { Project } from '~/types'

export default {
  type: 'file',
  name: 'mvc-vanilla',
  description: 'Um aplicativo MVC simples em PHP',
  url: {
    github: 'https://github.com/AntonyZ89/mvc-vanilla',
    website: 'https://devedor.in-development.tk/',
  },
  images: [],
  html: `
<h2>MVC com PHP puro inspirado no <a href="https://www.yiiframework.com/">Framework Yii2</a>.</h2>
<p>Projeto feito do zero, utilizando apenas PHP puro e sem frameworks.</p>
<p>Possui autenticação, cadastro e logout. Utilizando <a href="https://mdbootstrap.com">Material Design Bootstrap 5</a> no frontend, foi criado um sistema de cadastro de dívidas como exemplo de uso das funcionalidades que o MVC possui.</p>
<p>Após realizar o cadastro/login no sistema, no menu lateral possui uma opção para acessar o menu <b>Minhas dívidas</b> para listagem, criação, edição e exclusão de dívidas do usuário autenticado.</p>
<p>A renderização de telas acontece dinâmicamente através das views que estão localizadas em <b>src/views</b> e que estão dentro da pasta que possui o nome do controller (<b>src/views/controller-name</b>)</p>
<p>Para facilitar o acesso às pastas do sistema, é possível registrar alias para os diretórios do projeto no arquivo<b>/config/params.php</b> utilizando o método</p>
<code class="text-center">Application::setAlias(string <b>$alias</b>, string <b>$path</b>);</code>
<p>É possível renderizar outros arquivos dentro das views, como por exemplo, um arquivo de cabeçalho ou rodapé utilizando o método</p>
<code class="text-center">View::render(string <b>$folder</b>, string <b>$file</b>, array <b>?$params</b>);</code>
<p>Possui um sistema de rotas, que são definidas no arquivo <b>index.php</b> utilizando a classe <b>Router</b></p>
`,
  technologies: [
    technology.bootstrap,
    technology.css,
    technology.html,
    technology.mysql,
    technology.php,
    technology.phpunit,
  ],
} satisfies Project
