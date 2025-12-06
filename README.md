# React Shopping Cart

A modern, responsive shopping cart application built with React and Tailwind CSS that fetches products from the Fake Store API.

## 🎯 Features

- **Fake Store API Integration**: Fetches real product data from the Fake Store API
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Display**: Grid layout showing products with images, titles, prices, and ratings
- **Shopping Cart**: Add and remove products with visual feedback
- **Cart Modal**: Beautiful modal interface displaying all cart items with total price
- **Cart Counter**: Real-time cart count badge in the navbar
- **Duplicate Prevention**: Alerts users if they try to add an already-added product
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance

## 🛠️ Tech Stack

- **React 19.2.0**: Modern React library for building user interfaces
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **JavaScript (ES6+)**: Modern JavaScript features

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-cart
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
react-cart/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with cart button and counter
│   │   ├── ProductList.jsx     # Grid layout for all products
│   │   ├── ProductCard.jsx     # Individual product card
│   │   └── CartModal.jsx       # Shopping cart modal
│   ├── App.jsx                 # Main app component with state management
│   ├── main.jsx                # React DOM render entry point
│   └── index.css               # Tailwind CSS imports and custom styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

## 🚀 How to Use

### Viewing Products

1. The application automatically fetches products from the Fake Store API on load
2. Products are displayed in a responsive grid layout
3. Each product shows: image, category, title, description, rating, and price

### Adding Products to Cart

1. Click the **"Add"** button on any product card
2. The product will be added to your cart
3. If you try to add a product that's already in the cart, an alert will notify you

### Viewing Cart

1. Click the **"Cart"** button in the navbar
2. View all items currently in your cart
3. See the total number of items and total price

### Removing Items from Cart

1. Open the cart modal by clicking the **"Cart"** button
2. Click the **"Remove"** button on any product
3. The product will be removed from your cart

## 🎨 Component Details

### Navbar Component

- Displays the application title with cart icon
- Shows real-time cart count badge
- Sticky positioning for easy access while scrolling
- Click to open/close cart modal

### ProductList Component

- Responsive grid layout (1 column on mobile, 4 columns on large screens)
- Displays all fetched products
- Passes product data to ProductCard components

### ProductCard Component

- Shows product image, category, title, and description
- Displays star rating based on product data
- Shows price prominently
- Add to cart button with hover effects
- Responsive image scaling

### CartModal Component

- Full-screen overlay modal
- Scrollable list of cart items
- Each item shows thumbnail, title, price
- Quick-remove buttons for each item
- Total price and item count display
- Empty cart state with helpful message
- Checkout and Continue Shopping buttons

## 📡 API Integration

The application uses the **Fake Store API** (https://fakestoreapi.com/products) which provides:

- 20 sample products
- Product details (title, price, description, image, category, rating)
- No authentication required
- Free and public access

## 🎯 Key Features Implemented

✅ Fetch products from Fake Store API  
✅ Display products in responsive grid  
✅ Add products to cart  
✅ Prevent duplicate items in cart  
✅ Display cart modal with all items  
✅ Remove items from cart  
✅ Show cart count in navbar  
✅ Responsive design (mobile, tablet, desktop)  
✅ Clean, well-documented code  
✅ Professional UI with Tailwind CSS

## 🚦 Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Responsive Breakpoints

The application is fully responsive with Tailwind CSS breakpoints:

- **Mobile**: < 640px - Single column layout
- **Tablet**: 640px - 768px - Two column layout
- **Desktop**: 768px+ - Three to four column layout

## 💡 Future Enhancements

- Product quantity selection
- Persistent cart using localStorage
- User authentication
- Checkout process
- Order history
- Product filtering and search
- Product reviews and ratings system
- Wishlist functionality
- Payment integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as part of a React learning project demonstrating modern web development practices.

---

**Enjoy your shopping experience! 🛍️**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
