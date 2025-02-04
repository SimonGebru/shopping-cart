import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Cart from "./Cart"; // Importera Cart-komponenten
import "./App.css";

const products = [
  { id: 1, title: "A Sign of Four", author: "Sir Arthur Conan Doyle" },
  { id: 2, title: "A Study in Scarlet", author: "Sir Arthur Conan Doyle" },
  { id: 3, title: "Baskervilles Hound", author: "Sir Arthur Conan Doyle" },
  { id: 4, title: "The Adventures of Sherlock Holmes", author: "Sir Arthur Conan Doyle" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Förhindra att lägga till samma produkt flera gånger
    if (!cartItems.some(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="app">
      <Header cartCount={cartItems.length} />
      <Cart cartItems={cartItems} /> {/* Visar varukorgens innehåll */}
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            isInCart={cartItems.some(item => item.id === product.id)} // Kontrollera om produkten redan är i varukorgen
          />
        ))}
      </div>
    </div>
  );
}

export default App;
