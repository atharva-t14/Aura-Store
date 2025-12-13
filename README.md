# AuraStore - E-commerce Platform (Live Project Link: https://aura-store-git-main-atharvatamhankar11-gmailcoms-projects.vercel.app )

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

## Images

<img width="1920" height="1682" alt="screencapture-localhost-5173-2025-12-13-18_27_08" src="https://github.com/user-attachments/assets/666985b1-4b24-4588-9b28-81b72774e4e4" />

<img width="1898" height="908" alt="Screenshot 2025-12-13 183011" src="https://github.com/user-attachments/assets/bb37bc8a-76ba-4510-9d97-d710f2ed7449" />

<img width="1897" height="896" alt="Screenshot 2025-12-13 183503" src="https://github.com/user-attachments/assets/efb5b02a-6d51-4c37-890a-51d00853343b" />

<img width="1893" height="840" alt="Screenshot 2025-12-13 183555" src="https://github.com/user-attachments/assets/98ade490-2bc1-4b3d-803d-0ebd227b144b" />

<img width="1899" height="894" alt="Screenshot 2025-12-13 183537" src="https://github.com/user-attachments/assets/17ed86f0-157d-48bb-933f-6bb422765d5d" />

<img width="1895" height="900" alt="Screenshot 2025-12-13 183128" src="https://github.com/user-attachments/assets/6310d753-0b62-4e91-b5ca-66f2636de077" />

<img width="1919" height="902" alt="Screenshot 2025-12-13 183250" src="https://github.com/user-attachments/assets/24eb43e0-633b-4e76-bdf6-5eaa68e94819" />

<img width="1919" height="902" alt="Screenshot 2025-12-13 183310" src="https://github.com/user-attachments/assets/0699b71c-ff86-4f6b-9170-452513f24a32" />

<img width="1919" height="909" alt="Screenshot 2025-12-13 183338" src="https://github.com/user-attachments/assets/31d07651-ff0f-4f1f-bf87-7f08074d202d" />

<img width="1899" height="900" alt="Screenshot 2025-12-13 183359" src="https://github.com/user-attachments/assets/0cc1887f-1af2-4cbd-b774-676f3bd1ff7e" 

<img width="1892" height="906" alt="Screenshot 2025-12-13 183035" src="https://github.com/user-attachments/assets/ce3303a5-ad9c-4de2-9b64-98df945e06ef" />

<img width="1897" height="898" alt="Screenshot 2025-12-13 183024" src="https://github.com/user-attachments/assets/232410fa-f4b9-4993-8761-343b997e8fd3" />



Light Mode

<img width="1920" height="1682" alt="screencapture-localhost-5173-2025-12-13-18_26_39" src="https://github.com/user-attachments/assets/3c1bb8c3-9632-480b-8528-4b23a3cf71bc" />

<img width="1899" height="966" alt="image" src="https://github.com/user-attachments/assets/119d8b07-f5cc-40ea-bd33-84fe0d09f2a9" />

<img width="1897" height="910" alt="Screenshot 2025-12-13 183137" src="https://github.com/user-attachments/assets/fa06f955-19b1-430b-a1d6-029a5fc21be4" />

<img width="1919" height="907" alt="Screenshot 2025-12-13 183155" src="https://github.com/user-attachments/assets/229de8f0-8b47-437a-87d0-6a85df9ef2ec" />

<img width="1919" height="906" alt="Screenshot 2025-12-13 183317" src="https://github.com/user-attachments/assets/fb138385-8a13-485b-89c7-ba46cd234c7b" />

<img width="1919" height="909" alt="Screenshot 2025-12-13 183328" src="https://github.com/user-attachments/assets/97acf89b-9391-409f-b037-af5a38223e47" />

<img width="1896" height="904" alt="Screenshot 2025-12-13 183407" src="https://github.com/user-attachments/assets/fcd25c56-9438-4477-95ed-1edae3a25bc8" />

<img width="1901" height="908" alt="Screenshot 2025-12-13 183453" src="https://github.com/user-attachments/assets/9e5a23af-1d6f-4565-b078-75130f6b4169" />

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
git clone https://github.com/atharva-t14/Aura-Store.git
cd Aura-Store

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
