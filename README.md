# AuraStore - Premium E-commerce Platform

A modern, feature-rich e-commerce application built with React, Redux, and Tailwind CSS. AuraStore delivers a seamless shopping experience with advanced filtering, cart management, and a sophisticated checkout workflow.

## 🎯 Overview

AuraStore is a frontend-only e-commerce application that demonstrates real-world React/Next.js concepts and best practices. The platform includes authentication, product discovery, detailed product pages, cart management, and a complete checkout workflow with multiple payment steps.

## ✨ Key Features

### 🔐 Authentication System
- **Login & Signup Pages** with split carousel layout
- Email validation and secure authentication
- Protected routes for authenticated users only
- Persistent user sessions via localStorage
- Automatic redirect to `/products` on successful login

### 🛍️ Product Discovery
- **Infinite Scroll & Pagination** - User-selectable display mode
- **Advanced Filtering:**
  - Price range slider (min/max dual handles)
  - Product name search with debounce
  - Rating filter (≥ threshold)
  - Category selection with checkboxes
  - Sort by Rating, Price (ascending/descending)
- **Product Cards** with hover quick-view overlay
- **Lazy loading** for optimized performance
- Skeleton loaders while fetching data

### 📦 Product Details
- **Image Gallery** with magnifier zoom (lens + zoom window)
- Multiple product images with clickable thumbnails
- Complete product information (name, price, description, category)
- Star rating display with review count
- **Add to Cart** with quantity selector
- **Reviews & Ratings:**
  - View existing customer reviews
  - Write new reviews with 5-star rating system
  - Submit on Enter key
  - User info and timestamps on each review

### 🛒 Shopping Cart
- **Cart Management:**
  - Increase/decrease product quantity
  - Remove items (auto-removes at qty=1)
  - Persistent cart via Redux
- **Order Summary:**
  - Total items and price calculation
  - Itemized product list with images
- **"Users Also Bought"** recommendation section
- Toast notifications for all actions

### 💳 Checkout Workflow
- **3-Step Sequential Checkout:**
  1. **Address Form** - Name, phone, address, pincode
  2. **Card Details** - Card number, CVV, expiry date
  3. **Order Summary** - Review items and confirm order
- Form validation with error messages
- Sticky order summary sidebar
- Prevent skipping steps
- Success page with order receipt

### 🎨 UI/UX Features
- **Dark & Light Themes** with user preference persistence
- **Sophisticated Color Palette:**
  - Dark theme: Deep purples with amber accents
  - Light theme: Warm peachy-orange tones
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Smooth Animations** and transitions
- **Sticky Navigation Header** with search and cart icon
- **Hero Carousel** with auto-rotating images
- **Category Showcase** with grid layout
- **Hover Effects** and interactive elements
- **Subtle Scrollbar Styling** - Non-intrusive design

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx          # Navigation with search and theme toggle
│   │   └── Footer.jsx          # Footer with branding
│   ├── Product/
│   │   ├── ProductCard.jsx     # Product card component
│   │   └── ProductDetail.jsx   # Product detail page
│   └── Common/
│       ├── SkeletonLoader.jsx  # Loading skeleton
│       └── Loader.jsx          # Loading spinner
├── pages/
│   ├── Home/
│   │   └── Home.jsx            # Homepage with hero carousel
│   ├── Products/
│   │   └── Products.jsx        # Products listing with filters
│   ├── Cart/
│   │   └── Cart.jsx            # Shopping cart
│   ├── Checkout/
│   │   └── Checkout.jsx        # 3-step checkout wizard
│   ├── Auth/
│   │   ├── Login.jsx           # Login page with carousel
│   │   └── Signup.jsx          # Signup page with carousel
│   └── Success/
│       └── Success.jsx         # Order confirmation page
├── redux/
│   ├── store.js                # Redux store configuration
│   └── slices/
│       ├── authSlice.js        # Authentication state
│       ├── cartSlice.js        # Cart state management
│       └── productsSlice.js    # Products state
├── hooks/
│   └── useDebounce.js          # Custom hook for search debounce
├── routes/
│   └── ProtectedRoute.jsx      # Route protection wrapper
├── data/
│   └── products.js             # Dummy product database
├── styles/
│   └── index.css               # Global CSS with theme variables
└── App.jsx                     # Main app component
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing

### State Management
- **Redux Toolkit** - State management
- **Redux-Persist** - LocalStorage persistence

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Custom Properties** - Theme variables

### UI Components & Icons
- **React Hot Toast** - Notifications
- **React Icons** - Icon library (FaStar, FaFilter, FaCart, etc.)

### Development Tools
- **ESLint** - Code quality
- **Node.js** - Runtime environment

## 📋 Requirements Met

### ✅ Core Requirements
- [x] Authentication (Login/Signup with redirects)
- [x] Protected routes for logged-in users
- [x] Product listing with filters and sorting
- [x] Infinite scroll or pagination (user selectable)
- [x] Product detail page with images and reviews
- [x] Add to cart functionality
- [x] Cart management (add/remove/quantity)
- [x] Order summary with totals
- [x] 3-step checkout with validation
- [x] Order confirmation page

### ✅ React Concepts
- [x] Hooks (useState, useEffect, useCallback, useMemo, useRef, useContext)
- [x] Custom Hooks (useDebounce)
- [x] Redux Toolkit with Persist
- [x] React Router with lazy loading
- [x] Protected routes
- [x] Context API
- [x] Code splitting with Suspense
- [x] Form validation
- [x] Image lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecom_ui_v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📸 Screenshots

*Screenshots will be added here*

- Homepage with hero carousel
- Product listing with filters
- Product detail with magnifier
- Shopping cart
- Checkout workflow
- Order confirmation
- Dark and light theme examples

## 🎨 Theme System

AuraStore features a sophisticated theme system with two complete color palettes:

### Dark Theme
- **Base**: #0a0810 (Deep purple-black)
- **Surface**: #1d1b25 (Dark surface)
- **Brand**: #f7a620 (Golden amber)
- **Accent**: Blue/purple accents

### Light Theme
- **Base**: #fef5e7 (Warm white)
- **Surface**: #fffbf0 (Light cream)
- **Brand**: #ff9500 (Vibrant orange)
- **Accent**: Warm peachy tones

Themes are persisted to localStorage and toggle seamlessly via the header button.

## 🔄 State Management

### Redux Slices

**authSlice**
- User login/logout
- User profile management
- Token storage

**cartSlice**
- Add/remove items
- Update quantities
- Calculate totals

**productsSlice**
- Fetch products
- Apply filters
- Manage sorting

All state is persisted via redux-persist except for transient UI state.

## 🌐 API & Data

Currently uses dummy product data from `src/data/products.js`. Ready to integrate with any REST API or GraphQL backend by updating the data fetching logic in Redux slices.

## 📱 Responsive Design

- **Mobile** (< 640px) - Full-width forms, stacked layout
- **Tablet** (640px - 1024px) - 2-column grid
- **Desktop** (> 1024px) - Full multi-column layouts with sidebars

## ⚡ Performance Features

- **Image Lazy Loading** - `loading="lazy"` on all product images
- **Code Splitting** - Route-based lazy loading with Suspense
- **Debounced Search** - Optimized search input handling
- **Skeleton Loaders** - Smooth loading states
- **Redux Persist** - Cached state for instant loads

## 🔒 Security Features

- Protected routes for authenticated users
- Form validation on all inputs
- Token-based authentication (simulated)
- Secure cart persistence
- Input sanitization

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Stripe, Razorpay)
- [ ] Backend API integration
- [ ] User profile and order history
- [ ] Wishlist feature
- [ ] Product reviews with ratings
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Social login (Google, GitHub)
- [ ] Product search analytics

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a comprehensive React/Next.js learning project demonstrating production-ready e-commerce patterns and best practices.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**AuraStore** - Elevating Your Shopping Experience ✨
