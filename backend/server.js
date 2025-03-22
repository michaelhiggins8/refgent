
const express = require("express");
const server = express();


//.env

const dotenv = require("dotenv");
dotenv.config()



//middleware
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser")
server.use(express.json());
server.use(morgan('dev'));
server.use(cookieParser());
server.use(cors({
    origin: process.env.ORIGIN_ADDRESS,  
    credentials: true
}));


// data base pool

const {Pool} = require("pg");
const pool = new Pool(


{

    host: process.env.POOL_HOST,
    port: parseInt(process.env.POOL_PORT,10),
    user: process.env.POOL_USER,
    password: process.env.POOL_PASSWORD,
    database: process.env.POOL_DATA_BASE,
    ssl: {
        rejectUnauthorized: false
    }

}




);


(async()=>{

try{
const result = await pool.query("SELECT * FROM users");
console.log("win");

}catch(err){

    console.log(err);
}

})();







// hashing


const bcrypt = require("bcryptjs");



// tokens 
const jwt = require("jsonwebtoken");



// axios

const axios = require('axios');




//commands

server.post(process.env.CREATION_ADDRESS,async (req,res) =>{
const first_name =  req.body.first_name;
const last_name = req.body.last_name;
const email = req.body.email;
const password = req.body.password;
const longitude = req.body.longitude;
const latitude = req.body.latitude;
console.log(first_name,last_name,email,password,longitude,latitude);

try{
const hash = await bcrypt.hash(password,10);

const rsponse = await pool.query("INSERT INTO users(first_name,last_name,email,password,location) VALUES ($1,$2,$3,$4,ST_SetSRID(ST_MakePoint($5, $6),4326))",[first_name,last_name,email,hash,parseFloat(longitude),parseFloat(latitude)]);
res.status(201).json({'message':'account created'})
} catch(err){

    console.log(err);
    res.status(500).json({'message':'error'});

}


});


server.post(process.env.SIGN_IN_ADDRESS,async(req,res)=>{



//verrify password

const email = req.body.email;
const result = await pool.query("SELECT password,id FROM users where users.email = $1",[email]);

const hashFromDataBase = result.rows[0].password;
const user_id = result.rows[0].id;
const passwordFromForm = req.body.password;

const isVerified = await bcrypt.compare(passwordFromForm,hashFromDataBase);

// send token


if (isVerified){

const token = jwt.sign({'sub':user_id,},process.env.TOKEN_KEY,{expiresIn:"7d"});

res.cookie(process.env.COOKIE_NAME,token,{

    httpOnly:true,
    secure:false,
    sameSite:'strict'
}
);

res.status(200).json({'message':'Loged In'});

}else{

res.status(500).json({'message':'error'});

}


});









// ACCOUNT
server.post("/update_account",async(req,res)=>{

    
//get id

const token = req.cookies[process.env.COOKIE_NAME];
if(!token){
    return res.status(400).json({'message':'error'});
}
let user_id
try{
const payload = jwt.verify(token,process.env.TOKEN_KEY);
 user_id = payload.sub;
} catch(err){

    return res.status(400).json({'message':'error'});

}


// get value to values to update
    const attribute = req.body.attribute;
    let newValue;
    let longi;
    let lati;
    if(req.body.locationOrText == "text"){
         newValue = req.body.newValue;
    
        if (!newValue || !attribute){

            return res.status(400).json({'message':'error'});
        }

   }else if (req.body.locationOrText == "location"){

     longi = parseFloat(req.body.longi);
     lati = parseFloat(req.body.lati);
     
     console.log(longi);
    if (!longi || !lati){

        return res.status(400).json({'message':'error'});
                        }   

   }

   
// update values
let respose;
try{
    console.log("1a");
    if(req.body.locationOrText == "text"){
        
        respose = await pool.query(`UPDATE users SET ${attribute} = $1 WHERE id =$2 `,[newValue,user_id]);
        
    }else if (req.body.locationOrText == "location"){
        
        respose = await pool.query(`UPDATE users SET location = ST_SetSRID(ST_MakePoint($1,$2),4326) WHERE id =$3`,[longi,lati,user_id]);
        
    }
}catch(err){
    
    return res.status(400).json({'message':'error'});
    
}

    return res.status(200).json({'message':'complete'});

})







































































server.get("/receive_user_data",async(req,res)=>{

const token = req.cookies[process.env.COOKIE_NAME];
if(!token){
    return res.status(400).json({"message":"not logged in"});

}
let users_id
try{
const token_data = jwt.verify(token,process.env.TOKEN_KEY);
users_id = token_data.sub;
}catch(err){

    return res.status(400).json({"message":"incorrect user token"});

}
let users_data;
try{
const users_result = await pool.query( `SELECT first_name,last_name,email,about,ST_X(ST_AsText(location::geometry)) AS longitude, ST_Y(ST_AsText(location::geometry)) AS latitude
 FROM users WHERE id = $1`,[users_id]);
 users_data = users_result.rows[0];
}catch(err){

return res.status(400).json({"message":"database error"});

}
console.log(users_data);
return res.status(200).json({"message":users_data});


})





// check if logged in

server.get("/checkIfLoggedIn",(req,res)=>{
const token = req.cookies[process.env.COOKIE_NAME];


if (!token) {
    console.log("No token received");
    return res.status(401).json({"message":"Not logged in"});
}


// confirm valid
let result
try{
result = jwt.verify(token,process.env.TOKEN_KEY);
}catch(err){

    return res.status(400).json({'message':'error'})
}

return res.status(200).json({'message':'working'});


})





// nav bar 

server.post("/checkIfLoggedIn",async(req,res)=>{
let logged_in_user_id;
try{
const token = req.cookies[process.env.COOKIE_NAME];
const user_data = jwt.verify(token,process.env.TOKEN_KEY);
logged_in_user_id = user_data.sub; 
}catch(err){

res.status(400).json({"message":"not logged in"})

}


const f_name = await pool.query(`SELECT first_name FROM users WHERE id = $1`,[logged_in_user_id]);
res.status(200).json({"message":"logged in"});

})



// home

server.post("/getAccounts",async(req,res)=>{

const cityName = req.body.cityName;
if(!cityName){
    return res.status(400).json({"message":"no city name"});

}

let latitude;
let longitude;
try{
const coordinates = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityName)}&format=json`)
latitude = coordinates.data[0].lat;
longitude = coordinates.data[0].lon;

}catch(err){
    return res.status(400).json({"message":"api call failure"});



}

let peopleInArea;
try{
const result = await pool.query(`SELECT id,first_name,last_name,about,image_url FROM users WHERE ST_DWithin(location,ST_SetSRID(ST_MakePoint($1,$2),4326),50000)`,[longitude,latitude]);
peopleInArea = result.rows;

} catch(err){

    return res.status(400).json(err);

}


res.json({peopleInArea});



}





);





server.post("/startChat",async(req,res)=>{


let self_id;
try{
const token = req.cookies[process.env.COOKIE_NAME];
const selfData = jwt.verify(token,process.env.TOKEN_KEY);
self_id = selfData.sub;
}catch(err){

  return res.status(400).json({'message':'Not logged in'})  
}

const partner_id = req.body.partner_id;
if (!partner_id){
    return res.status(400).json({'message':'No partner id'})  

}

const smaller_id = Math.min(Number(self_id), Number(partner_id));
const bigger_id = Math.max(Number(self_id), Number(partner_id));

let response;
try{
response = await pool.query(`INSERT INTO chats(user1_id,user2_id) VALUES ($1,$2)`,[smaller_id,bigger_id]);
}catch(err){

    return res.status(400).json({'message':'Chat exists'})  

}

res.status(200).json({'message':'Chat created'});
});









// messages


server.post("/retrieveChats",async(req,res)=>{

const token = req.cookies[process.env.COOKIE_NAME];
const payload = jwt.verify(token,process.env.TOKEN_KEY);
const user_id = payload.sub;

const resultOfConversations = await pool.query(`SELECT * FROM chats WHERE (user1_id = $1 or user2_id = $1)`,[user_id])
const convos = resultOfConversations.rows; 
//console.log(convos);
let chatPartners = [];
for (let i = 0;i<convos.length;i++){

if (convos[i]["user1_id"] != user_id){chatPartners.push(convos[i]["user1_id"])}
if (convos[i]["user2_id"] != user_id){chatPartners.push(convos[i]["user2_id"])}
}

console.log(chatPartners);

const resultOfPartners = await pool.query(`SELECT id,first_name,last_name,about FROM users WHERE id = ANY($1)`,[chatPartners])
const partners = resultOfPartners.rows;
//console.log(partners);
res.json({partners});

})












server.post("/sendChatMessage",async(req,res)=>{
const message = req.body.message;

const idOfPartner = req.body.idOfPartner;

const token = req.cookies[process.env.COOKIE_NAME];

const response = jwt.verify(token,process.env.TOKEN_KEY);

const self_id =  response.sub

const result = await pool.query(`INSERT INTO messages(chat_id,sender_id,content) VALUES (

(SELECT id FROM chats WHERE (user1_id = $1 and user2_id = $2) or (user1_id = $2 and user2_id = $1)),
$2,	
$3

);`,[idOfPartner,self_id,message])


res.status(200).json({"message":"text message created"});

console.log(message,idOfPartner,self_id);

})


server.post("/receiveConversation",async(req,res)=>{
const idOfPartner = req.body.idOfPartner;
const token = req.cookies[process.env.COOKIE_NAME];
const selfData = jwt.verify(token,process.env.TOKEN_KEY);

const idOfSelf = selfData.sub;

const resultOfMessages = await pool.query(`SELECT content,sender_id FROM messages WHERE chat_id = (SELECT id FROM chats WHERE (user1_id = $1 and user2_id = $2) or (user1_id = $2 and user2_id = $1)) ORDER BY created_at ASC;`,[idOfPartner,idOfSelf]);

const messages = resultOfMessages.rows;
res.json({messages});
})









server.listen(3000,()=>{


    console.log("server listeing")
})


