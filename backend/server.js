const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const {addCategory, getCategories, updateCategory} = require("./Controllers/categoryController");
const {addProduct, getProducts, updateProduct} = require("./Controllers/productController");

const app = express();

app.use(cors());
app.use(express.json());


// Upload Folder Access
app.use("/uploads", express.static("uploads"));

// Multer Configuration
const imageStorage = multer.diskStorage({
    
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, path.parse(file.originalname).name + '_' + Date.now() + path.extname(file.originalname));
    }

});
const upload = multer({storage: imageStorage});

// Category APIs
app.post("/addcategory", addCategory);

app.get("/getcategories", getCategories);

app.put("/updatecategory/:categoryid", updateCategory);


// Product APIs
app.post("/addproduct", upload.single("ProductImage"), addProduct);

app.get("/getproducts", getProducts);

app.put("/updateproduct/:productid", upload.single("ProductImage"), updateProduct);


app.listen(9000, function(){

    console.log("Server Started");

});