import { useCart } from "../context/CartContext";
import "./CartPage.css"

export default function CartPage() {
    const { cartItems, removeFromCart, cartTotal, increaseQty, decreaseQty } = useCart();


  if (cartItems.length === 0) {
    return (
  <div className="empty-cart">
    🛒 Your Cart is Empty
  </div>
);
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">My Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
        <img
  src={item.image}
  alt={item.title}
  className="cart-image"
/>

        <div className="cart-info">
            <h3>{item.title}</h3>

            <p className="cart-price">
  ${item.price} × {item.qty}
</p>

        <div className="qty-box">
            <button
  className="qty-btn"
  onClick={() => decreaseQty(item.id)}
>
  −
</button>

            <span className="qty">
  {item.qty}
</span>
            <button
  className="qty-btn"
  onClick={() => increaseQty(item.id)}
>
  +
</button>
        </div>
    </div>

          <button
  className="remove-btn"
  onClick={() => removeFromCart(item.id)}
>
  Remove
</button>
        </div>
      ))}

      <h2 className="cart-total">
  Total: ${cartTotal.toFixed(2)}
</h2>
    </div>
  );
}