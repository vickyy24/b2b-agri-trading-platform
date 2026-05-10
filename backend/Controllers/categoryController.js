const con = require("../Config/db");

// For POST API
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

// For GET API
async function getCategories(req, res){

    try{

        const [result] = await con.query(`SELECT * FROM Categories_table`);

        res.status(200).send(result);

    }
    catch(error){
        res.status(500).send({message: error.message});
    }
}

// For PUT API

async function updateCategory(req, res){

    try{

        const d = req.body;

        const catid = req.params.id;

        const [result] = await con.query(`SELECT * FROM Categories_table WHERE LOWER(category_name)=LOWER(?) AND category_id!=?`,
            [d.CategoryName,catid]
        );

        if(result.length > 0){
            res.status(409).send({message: "Category Already Exists"});

        }
        else{

            await con.query(`UPDATE Categories_table SET category_name=?, isactive=? WHERE category_id=?`,[d.CategoryName,d.IsActive,id]);

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