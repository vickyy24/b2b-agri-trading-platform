# 🌾 B2B Agri Trading Platform

A full-stack agricultural trading platform built using React.js, Redux Toolkit, Node.js, Express.js, and MySQL. The platform provides commodity management, product catalog management, product specifications, quality grades, shopping cart functionality, and administrative tools for managing categories and products.

---

## 🚀 Features

### User Features

- Browse commodities and products
- View product details
- Product category filtering
- Shopping cart management
- Increase and decrease product quantity
- Remove products from cart
- Automatic cart total calculation
- Cart persistence using Local Storage
- Responsive user interface
- Commodity inquiry modal

### Admin Features

#### Category Management

- Add Category
- View Categories
- Update Categories
- Duplicate Category Validation

#### Product Management

- Add Products
- View Products
- Update Products
- Upload Product Images
- Manage Product Specifications
- Manage Product Quality Grades
- Duplicate Product Validation

---

## 🛠 Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Icons

### Backend

- Node.js
- Express.js
- MySQL
- Multer
- dotenv
- mysql2
- CORS

---

## 📂 Project Structure

```text
B2B-Agri-Trading-Platform
│
├── backend
│   ├── Config
│   │   └── db.js
│   │
│   ├── Controllers
│   │   ├── categoryController.js
│   │   └── productController.js
│   │
│   ├── uploads
│   ├── node_modules
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── node_modules
│   │
│   ├── src
│   │   ├── assets
│   │   ├── Components
│   │   │   ├── CommonHero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── footerSection.jsx
│   │   │   └── QuoteModal.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Commodities.jsx
│   │   │   ├── ViewProduct.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── CategoryAdmin.jsx
│   │   │   ├── ProductAdmin.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── TradeProcess.jsx
│   │   │   ├── GlobalReach.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── Redux
│   │   │   ├── CartSlice.js
│   │   │   └── Store.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── main.css
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── Database.sql
└── README.md
```

---

## 🗄 Database

Database schema is available in:

```text
Database.sql
```

Tables used:

- Categories_table
- Products_table
- Product_Specification_table
- Quality_Grades_table

### Database Relationships

```text
Categories_table
        │
        ▼
Products_table
       │
       ├── Product_Specification_table
       │
       └── Quality_Grades_table
```

---

## 🔌 API Endpoints

### Category APIs

```http
POST /addcategory
GET /getcategories
PUT /updatecategory/:categoryid
```

### Product APIs

```http
POST /addproduct
GET /getproducts
GET /getproduct/:productid
PUT /updateproduct/:productid
```

---

## 🛒 Cart Functionality

Implemented using Redux Toolkit.

Features:

- Add Product to Cart
- Increase Quantity
- Decrease Quantity
- Remove Product
- Calculate Total Amount
- Local Storage Persistence
- Centralized State Management

---

## 📦 Product Management

Each product contains:

- Product Name
- Product Price
- Product Image
- Packaging Detail
- HS Code
- Product Specifications
- Quality Grades

---

## 📷 Image Uploads

Implemented using Multer.

Features:

- Product image upload
- Unique image naming
- Product image update support
- Old image removal during updates
- Static image serving through Express

---

## ⚙ Environment Variables

Create a `.env` file inside the backend directory.

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=padmayog_agrotech
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```bash
http://localhost:9000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🎯 Implemented Functionalities

- React Component Architecture
- Dynamic Routing
- Redux Toolkit State Management
- REST API Development
- MySQL Integration
- CRUD Operations
- Product Management
- Category Management
- Product Specifications Management
- Product Quality Grades Management
- Image Upload Handling
- Axios API Integration
- Form Validation
- Error Handling
- Shopping Cart Management
- Local Storage Persistence

---

## 👨‍💻 Author

**Vikas Sonatkke**

Full Stack Developer
