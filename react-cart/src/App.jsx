import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert("Item already added to the cart");
      return;
    }

    setCart([...cart, product]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-red-600">Error: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <main className="container mx-auto px-4 py-8">
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </main>
      )}

      {showModal && (
        <CartModal
          cartItems={cart}
          onClose={() => setShowModal(false)}
          onRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
}

export default App;
