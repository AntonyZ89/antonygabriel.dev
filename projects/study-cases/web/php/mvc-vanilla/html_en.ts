export default `
<h2>MVC with Pure PHP Inspired by <a href="https://www.yiiframework.com/">Yii2 Framework</a>.</h2>
<p>Project built from scratch using only pure PHP without frameworks.</p>
<p>It includes authentication, registration, and logout. Using <a href="https://mdbootstrap.com">Material Design Bootstrap 5</a> on the frontend, a debt registration system was created as an example of how the MVC functionalities can be used.</p>
<p>After registering/logging into the system, the sidebar menu includes an option to access the <b>My Debts</b> section, where users can list, create, edit, and delete their debts.</p>
<p>Screen rendering happens dynamically through views located in <b>src/views</b>, inside folders named after their respective controllers (<b>src/views/controller-name</b>).</p>
<p>To simplify access to system directories, aliases for project folders can be registered in the <b>/config/params.php</b> file using the method:</p>
<code class="text-center">Application::setAlias(string <b>$alias</b>, string <b>$path</b>);</code>
<p>Other files can be rendered within views, such as a header or footer file, using the method:</p>
<code class="text-center">View::render(string <b>$folder</b>, string <b>$file</b>, array <b>?$params</b>);</code>
<p>It includes a routing system, defined in the <b>index.php</b> file using the <b>Router</b> class.</p>
`
