const db1 = require('../config/database');
const fetchData = async (req, res)=>{
    console.log("Inside fetch ");
    console.log('req.body', req.body);
    try{
        const value = await db1.query("SELECT * FROM mini_table");
        res.send(value);
        console.log('value', value);
    }
    catch(error){
        console.log(error);
    }
};

const putData = async(req, res)=>{
     console.log("Inserting data");
     console.log('req.body', req.body);
    try{
        const input = await db1.query("INSERT INTO mini_table(id,task) VALUES($1,$2)");
        res.send(input);
        console.log('input', input);

    }
    catch(error){
        console.log(error);
    }
};

const postData = async(req, res)=>{
    console.log("updating existing data");
    console.log('req.body', req.body);
    try{
        const result = await db1.query("UPDATE mini_table SET id=$1 WHERE task=$2");
        res.send(result);
        console.log('result', result);
    }
    catch(error){
        console.log(error);
    }
};
const deleteData = async (req, res)=>{
    console.log("Deleted ");
    console.log('req.body', req.body);
    try{
        const deletion = await db1.query("DELETE FROM mini_table (req.body)VALUES", [req.body]);
        console.log('deletedvalue is', deletion);
        res.send(deletion);
    }
    catch(error){
        console.log(error);
    }
};



module.exports ={ fetchData, 
                  putData,
                postData,
            deleteData};