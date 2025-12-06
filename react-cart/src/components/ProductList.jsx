/**
 * ProductList Component
 * Displays all products in a responsive grid layout
 */
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">No products available</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
      }),
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
