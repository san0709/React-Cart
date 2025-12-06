/**
 * ProductCard Component
 * Displays individual product with image, title, price, and add to cart button
 */
import PropTypes from "prop-types";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category */}
        <span className="text-xs font-semibold text-blue-600 uppercase mb-2">
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...new Array(5)].map((_, i) => (
              <svg
                key={`star-${i}`}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating?.rate || 0)
                    ? "fill-current"
                    : "fill-gray-300"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">
            ({product.rating?.count || 0} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-bold text-gray-900">
            ${product.price?.toFixed(2)}
          </p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
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
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
