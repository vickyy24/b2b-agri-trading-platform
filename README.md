# 🌾 B2B Agri Trading Platform

A full-stack agricultural trading platform built using React.js, Redux Toolkit, Node.js, Express.js, and MySQL. The platform enables users to browse agricultural commodities, view detailed product information, manage shopping cart operations, and explore commodity offerings through a responsive user interface. It also provides an administrative dashboard for managing categories, products, specifications, and quality grades.

---

# 🚀 Features

## Customer Features

- Browse agricultural commodities and products
- View detailed product information
- Dynamic product detail pages
- Product category filtering
- Shopping cart functionality
- Increase and decrease product quantity
- Remove products from cart
- Automatic cart total calculation
- Cart persistence using Local Storage
- Commodity inquiry modal
- Responsive user interface

---

## Admin Features

### Category Management

- Add Categories
- View Categories
- Update Categories
- Duplicate Category Validation

### Product Management

- Add Products
- View Products
- Update Products
- Upload Product Images
- Manage Product Specifications
- Manage Product Quality Grades
- Duplicate Product Validation

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Icons

## Backend

- Node.js
- Express.js
- MySQL
- Multer
- dotenv
- mysql2
- CORS

---

# 📂 Project Structure

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
│   │
│   ├── node_modules
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── Database.sql
│
├── frontend
│   ├── public
│   ├── node_modules
│   │
│   ├── src
│   │   ├── assets
│   │   ├── Components
│   │   ├── pages
│   │   ├── Redux
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
└── README.md
```

---

# 🗄️ Database Design

Database Name:

```sql
padmayog_agrotech
```

---

## Categories_table

Stores commodity categories.

| Column Name | Data Type |
|------------|-----------|
| category_id | INT (PK) |
| category_name | VARCHAR(255) |
| isactive | VARCHAR(50) |

---

## Products_table

Stores commodity product information.

| Column Name | Data Type |
|------------|-----------|
| product_id | INT (PK) |
| category_id | INT (FK) |
| product_name | VARCHAR(255) |
| image | VARCHAR(500) |
| packaging_detail | VARCHAR(255) |
| hs_code | VARCHAR(100) |
| product_price | DECIMAL(10,2) |

---

## Product_Specification_table

Stores specifications associated with products.

| Column Name | Data Type |
|------------|-----------|
| product_specification_id | INT (PK) |
| product_id | INT (FK) |
| title | VARCHAR(255) |
| value | VARCHAR(500) |

### Examples

- Moisture
- Purity
- Protein
- Foreign Matter

---

## Quality_Grades_table

Stores quality grades associated with products.

| Column Name | Data Type |
|------------|-----------|
| qualitygrade_id | INT (PK) |
| product_id | INT (FK) |
| grade | VARCHAR(255) |

### Examples

- Premium
- Standard
- Grade A

---

# 🔗 Database Relationships

```text
Categories_table
        │
        ▼
Products_table
       │
       ├────────► Product_Specification_table
       │
       └────────► Quality_Grades_table
```

---

# 🔌 API Endpoints

## Category APIs

| Method | Endpoint |
|----------|----------|
| POST | /addcategory |
| GET | /getcategories |
| PUT | /updatecategory/:categoryid |

---

## Product APIs

| Method | Endpoint |
|----------|----------|
| POST | /addproduct |
| GET | /getproducts |
| GET | /getproduct/:productid |
| PUT | /updateproduct/:productid |

---

# 🛒 Cart Management

Implemented using Redux Toolkit.

### Features

- Add Product to Cart
- Increase Quantity
- Decrease Quantity
- Remove Product
- Automatic Total Amount Calculation
- Local Storage Persistence
- Centralized State Management

### Redux Actions

- addToCart
- incrementQuantity
- decrementQuantity
- removeFromCart

---

# 📦 Product Management

Each product contains:

- Product Name
- Product Price
- Product Image
- Packaging Detail
- HS Code
- Product Specifications
- Quality Grades

### Product Specification Example

```json
[
  {
    "title": "Moisture",
    "value": "12%"
  },
  {
    "title": "Purity",
    "value": "99%"
  }
]
```

### Product Grade Example

```json
[
  {
    "grade": "Premium"
  },
  {
    "grade": "Standard"
  }
]
```

---

# 📷 Image Upload Functionality

Implemented using Multer.

### Features

- Product Image Upload
- Unique Image Naming Using Timestamp
- Product Image Updates
- Automatic Removal Of Previous Images During Updates
- Static Image Serving Through Express

---

# 🌐 Frontend Routes

```text
/
├── Home
├── About
├── Commodities
├── View Product
├── Services
├── Trade Process
├── Global Reach
├── Contact
└── Cart
```

### Admin Routes

```text
/admin
├── category
└── product
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder.

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=padmayog_agrotech
```

---

# 🗄️ Database Setup

1. Open MySQL Workbench.
2. Navigate to:

```text
backend/Database.sql
```

3. Execute the SQL script.

This will create:

- Categories_table
- Products_table
- Product_Specification_table
- Quality_Grades_table

---

# 📥 Clone Repository

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd B2B-Agri-Trading-Platform
```

---

# 🚀 Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Backend runs on:

```text
http://localhost:9000
```

---

# 🚀 Frontend Setup

Open a new terminal and navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# ▶️ Running The Application

### Terminal 1

```bash
cd backend
node server.js
```

### Terminal 2

```bash
cd frontend
npm run dev
```

---

# 🎯 Implemented Functionalities

- React Component Architecture
- Dynamic Routing
- Redux Toolkit State Management
- REST API Development
- MySQL Database Integration
- CRUD Operations
- Product Management
- Category Management
- Product Specifications Management
- Product Quality Grades Management
- Product Image Upload Handling
- Axios API Integration
- Form Validation
- Error Handling
- Shopping Cart Management
- Local Storage Persistence

---

# 👨‍💻 Author

**Vikas Sonatkke**

Full Stack Developer