const con = require("../Config/db");

// POST API Handling Function
async function addCategory(req, res){

    try{
        
        const d= req.body;

        const [result] = await con.query(
            `SELECT * FROM Categories_table
            WHERE LOWER(category_name)=LOWER(?)`,[d.CategoryName]
        );

        if(result.length > 0){
            res.status(409).send({message: "Category Already Exists"});
        }
        else{
            await con.query("insert into Categories_table(category_name, isactive) values(?,?)",[d.CategoryName, d.IsActive]);

            res.status(200).send({message:"Category Added Successfully"});
        }

    }
    catch(error){
        res.status(500).send({message: error.message});
    }
}

// GET API Handling Function
async function getCategories(req, res){

    try{

        const [result] = await con.query(`SELECT * FROM Categories_table`);

        res.status(200).send(result);

    }
    catch(error){
        res.status(500).send({message: error.message});
    }
}

// PUT API Handling Function
async function updateCategory(req, res){

    try{

        const d = req.body;

        const catid = req.params.categoryid;

        const [result] = await con.query(`SELECT * FROM Categories_table WHERE LOWER(category_name)=LOWER(?) AND category_id!=?`,
            [d.CategoryName,catid]
        );

        if(result.length > 0){
            res.status(409).send({message: "Category Already Exists"});

        }
        else{

            await con.query(`UPDATE Categories_table SET category_name=?, isactive=? WHERE category_id=?`,[d.CategoryName,d.IsActive,catid]);

            res.status(200).send({
                message: "Category Updated Successfully"
            });

        }

    }
    catch(error){
        res.status(500).send({message: error.message});

    }

}

module.exports = {addCategory, getCategories,updateCategory};