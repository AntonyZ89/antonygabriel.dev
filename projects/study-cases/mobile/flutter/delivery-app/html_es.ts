export default `
<h2>Aplicación de Delivery</h2>
<p>Esta aplicación fue creada basándose en el prototipo <a href="https://dribbble.com/shots/14261724-Food-delivery-app-prototyping">compartido en Dribbble</a>.</p>
<p>La aplicación fue desarrollada con Flutter y simula el flujo de un servicio de entrega, almacenando sus datos en la memoria del dispositivo mediante <b>ChangeNotifierProvider</b>. Cuenta con cinco pantallas:</p>
<ul>
  <li><strong>Inicio</strong> - Pantalla principal de la aplicación, donde se listan los productos disponibles para la compra, con opción de filtrar por nombre y categoría.</li>
  <li><strong>Producto</strong> - Pantalla de detalles del producto, que muestra imágenes, nombre, descripción, precio, cantidad a agregar al carrito y un botón para añadir al carrito.</li>
  <li><strong>Carrito</strong> - Pantalla del carrito que muestra los productos añadidos, el valor total y opciones para eliminar productos deslizando hacia la izquierda, aumentar o disminuir la cantidad y un botón para finalizar la compra.</li>
  <li><strong>Checkout</strong> - Pantalla de pago que muestra los datos del cliente, con opciones para cambiar la dirección de entrega, agregar una nota al pedido, cambiar el método de pago y un botón para completar la compra.</li>
  <li><strong>Estado</strong> - Pantalla de estado del pedido, que muestra el estado actual del pedido y un mapa para rastrear la entrega.</li>
  <li><strong>Pedidos</strong> - Pantalla de historial de pedidos, donde se listan todos los pedidos del cliente con la opción de ver los detalles.</li>
</ul>
`
