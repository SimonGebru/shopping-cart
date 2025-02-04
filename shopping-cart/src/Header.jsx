function Header({ cartCount }) {
    return (
      <header className="header">
        <div className="logo">Sherlock Books</div>
        <div className="cart">
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </header>
    );
  }
  
  export default Header;