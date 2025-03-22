const bcrypt = require("bcryptjs")

const {Pool} = require("pg");

const pool = new Pool({

    user: 'postgres',        
    host: 'localhost',            
    database: 'test',
    password: 'mH20094491',    
    port: 5432, 


})




const user_name = "joesmith";
const password = "qwerty123456";
const saltRounds = 10;
bcrypt.hash(password,saltRounds,(err,hash)=>{

    
pool.query("INSERT INTO user(user_name,password) VALUES($1,$2)",[user_name,hash]);
    

}



);