function ProductCard({ product, onAddToCart, isInCart }) {
    return (
      <div className="product-card">
        <h3>{product.title}</h3>
        <p>Av {product.author}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={onAddToCart} disabled={isInCart}>
          {isInCart ? "I varukorgen" : "Add to cart"}
        </button>
      </div>
    );
  }
  
  export default ProductCard;