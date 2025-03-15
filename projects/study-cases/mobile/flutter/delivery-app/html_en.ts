export default `
<h2>Delivery App</h2>
<p>This app was created based on the prototype <a href="https://dribbble.com/shots/14261724-Food-delivery-app-prototyping">shared on Dribbble</a>.</p>
<p>The application was built using Flutter and simulates the flow of a delivery service, storing its data in the device's memory using <b>ChangeNotifierProvider</b>. It has five screens:</p>
<ul>
  <li><strong>Home</strong> - The app's home screen, listing available products for purchase, with the option to filter by name and category.</li>
  <li><strong>Product</strong> - Product details screen, displaying product images, name, description, price, quantity to be added to the cart, and a button to add it to the cart.</li>
  <li><strong>Cart</strong> - Cart screen displaying the products added to the cart, showing the total value, with options to remove items by swiping left, increase or decrease quantity, and a button to complete the purchase.</li>
  <li><strong>Checkout</strong> - Payment screen displaying customer details, with options to change the delivery address, add a note to the order, change the payment method, and a button to complete the purchase.</li>
  <li><strong>Status</strong> - Order status screen displaying the order status and a map to track the delivery.</li>
  <li><strong>Orders</strong> - Order history screen displaying all customer orders, with an option to view order details.</li>
</ul>
`
