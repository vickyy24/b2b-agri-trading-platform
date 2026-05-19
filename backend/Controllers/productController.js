const con = require("../Config/db");
const fs = require("fs");

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

            const specificationlist = JSON.parse(d.SpecificationList);
            for(let i=0; i<specificationlist.length; i++){
                await con.query(
                    "insert into Product_Specification_table(product_id, title, value) values(?,?,?)",
                    [productid, specificationlist[i].title, specificationlist[i].value]
                );
            }

            const gradeslist = JSON.parse(d.GradesList);
            for(let i=0; i<gradeslist.length; i++){
                await con.query(
                    "insert into Quality_Grades_table(product_id, grade) values(?,?)",
                    [productid, gradeslist[i].grades]
                );
            }
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
            `SELECT p.product_id, p.category_id, c.category_name, p.product_name,p.packaging_detail,p.hs_code,p.image
            FROM Products_table p
            JOIN Categories_table c
            ON p.category_id = c.category_id`
        );

        for(let i=0; i<result.length; i++){

            const [Specifications] = await con.query("select product_specification_id, title, value from Product_Specification_table where product_id=?", [result[i].product_id]);

            const [Grades] = await con.query("select qualitygrade_id, grade as grades from Quality_Grades_table where product_id=?", [result[i].product_id]);

            result[i].specifications = Specifications;
            result[i].grades = Grades;
        }
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

        const [oldImage] = await con.query(
            "SELECT image FROM Products_table WHERE product_id=?",
            [productid]
        );

        const oldImagePath = `uploads/${oldImage[0].image}`;

        if(fs.existsSync(oldImagePath)){
            fs.unlinkSync(oldImagePath);
        }

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