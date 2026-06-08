-- B2B Agri Trading Platform Database
CREATE DATABASE padmayog_agrotech;

USE padmayog_agrotech;

-- Categories Table
CREATE TABLE Categories_table (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    isactive VARCHAR(50)
);

-- Products Table
CREATE TABLE Products_table (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT,
    product_name VARCHAR(255) NOT NULL,
    image VARCHAR(500),
    packaging_detail VARCHAR(255),
    hs_code VARCHAR(100),
    product_price DECIMAL(10,2),

    CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES Categories_table(category_id)
);

-- Product Specification Table
CREATE TABLE Product_Specification_table (
    product_specification_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    title VARCHAR(255) NOT NULL,
    value VARCHAR(500) NOT NULL,

    CONSTRAINT fk_specifications_product FOREIGN KEY (product_id) REFERENCES Products_table(product_id)
);

-- Quality Grades Table
CREATE TABLE Quality_Grades_table (
    qualitygrade_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    grade VARCHAR(255) NOT NULL,

    CONSTRAINT fk_grades_product FOREIGN KEY (product_id) REFERENCES Products_table(product_id)
);

-- View Data
SELECT * FROM Categories_table;
SELECT * FROM Products_table;
SELECT * FROM Product_Specification_table;
SELECT * FROM Quality_Grades_table;