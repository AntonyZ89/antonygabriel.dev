export default `
<h2>MVC con PHP puro inspirado en el <a href="https://www.yiiframework.com/">Framework Yii2</a>.</h2>
<p>Proyecto creado desde cero utilizando solo PHP puro, sin frameworks.</p>
<p>Incluye autenticación, registro y cierre de sesión. Utilizando <a href="https://mdbootstrap.com">Material Design Bootstrap 5</a> en el frontend, se creó un sistema de registro de deudas como ejemplo del uso de las funcionalidades del MVC.</p>
<p>Después de registrarse/iniciar sesión en el sistema, el menú lateral incluye una opción para acceder al menú <b>Mis deudas</b>, donde los usuarios pueden listar, crear, editar y eliminar sus deudas.</p>
<p>La renderización de pantallas ocurre dinámicamente a través de las vistas ubicadas en <b>src/views</b>, dentro de carpetas con el nombre del controlador correspondiente (<b>src/views/controller-name</b>).</p>
<p>Para facilitar el acceso a los directorios del sistema, es posible registrar alias para las carpetas del proyecto en el archivo <b>/config/params.php</b> utilizando el método:</p>
<code class="text-center">Application::setAlias(string <b>$alias</b>, string <b>$path</b>);</code>
<p>Es posible renderizar otros archivos dentro de las vistas, como un archivo de encabezado o pie de página, utilizando el método:</p>
<code class="text-center">View::render(string <b>$folder</b>, string <b>$file</b>, array <b>?$params</b>);</code>
<p>Cuenta con un sistema de rutas, definido en el archivo <b>index.php</b> utilizando la clase <b>Router</b>.</p>
`
