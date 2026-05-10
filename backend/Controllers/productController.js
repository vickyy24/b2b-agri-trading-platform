const con = require("../Config/db");

//POST API Handling Function
async function addProduct(req,res){

    try{

        const d = req.body;
        const imagename = req.file.filename;

        const [result] = await con.query("select * from Products_table where LOWER(product_name)=LOWER(?)",[d.ProductName]);

        if(result.length>0){
            res.status(409).send({message:"Product Already Exists"})
        }
        else{

            const [productdata] = await con.query(
                "insert into Products_table(category_id, product_name, image, packaging_detail, hs_code) values(?,?,?,?,?)",[d.CategoryId, d.ProductName, imagename, d.PackagingDetail, d.HsCode]
            );

            const productid = productdata.insertId;

            await con.query(
                "insert into Product_Specification_table(product_id, title, value) values(?,?,?)",[productid,d.Title,d.Value]
            );

            await con.query(
                "insert into Quality_Grades_table(product_id, grade) values(?,?)",[productid,d.Grade]
            );
            res.status(200).send({message: "Product Added Successfully"});
        }
    }
    catch(error){
        res.status(500).send({message: error.message});
    }
}

// GET API Handling Function
async function getProducts(req, res){

    try{

        const [result] = await con.query(
            `SELECT c.category_name, p.product_name, p.packaging_detail, p.hs_code,p.image, ps.title, ps.value, qg.grade
            FROM Products_table p
            JOIN Categories_table c ON p.category_id=c.category_id
            JOIN Product_Specification_table ps ON p.product_id=ps.product_id
            JOIN Quality_Grades_table qg ON p.product_id=qg.product_id`
        );
        res.status(200).send(result);
    }
    catch(error){
        res.status(500).send({message: error.message});

    }
}

// PUT API Handling Function
async function updateProduct(req, res){

    try{
        const d = req.body;
        const productid = req.params.productid;

        const imagename = req.file.filename;

        const [result] = await con.query(
            `SELECT * FROM Products_table
            WHERE LOWER(product_name)=LOWER(?) AND product_id!=?`,[d.ProductName, productid]
        );

        if(result.length > 0){
            res.status(409).send({message: "Product Already Exists"});
        }
        else{

            await con.query(
                `UPDATE Products_table
                SET category_id=?, product_name=?, packaging_detail=?, hs_code=?, image=? 
                WHERE product_id=?`,[d.CategoryId,d.ProductName,d.PackagingDetail,d.HsCode,imagename,productid]
            );

            res.status(200).send({message: "Product Updated Successfully"});
        }
    }
    catch(error){
        res.status(500).send({message: error.message});
    }
}

module.exports = {addProduct, getProducts, updateProduct};