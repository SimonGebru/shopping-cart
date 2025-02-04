function Cart({ cartItems }) {
    return (
      <div className="cart-items">
        <h2>Varukorg ({cartItems.length})</h2>
        {cartItems.length === 0 ? (
          <p>Varukorgen är tom.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.title} - {item.author}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Cart;