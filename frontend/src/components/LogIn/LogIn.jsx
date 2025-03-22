import { useState } from "react";
import "./LogIn.css"

function LogIn(){

   const [logInMessage,setLogInMessage] = useState("");
const [logInValues,setLogInValues] = useState(
    
    {
    
    "email":"",
    "password":""

    });


function handleChange(valueToChange,replacmentValue){

const holder = { ...logInValues };
holder[valueToChange] = replacmentValue;
setLogInValues(holder);

}


const sendLogInValues = async() =>{
console.log("ne");
    const response = await fetch(import.meta.env.VITE_URL_BASE +"ReciveLogInValues",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(logInValues),
        credentials: 'include'


    }) 
    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers.entries()]); // Log headers
    const result = await response.json();
    console.log(result);
    console.log("Response data:", result);

    console.log("Response headers:", [...response.headers.entries()]);


    setLogInMessage("Please refresh the page");
}

return(<>
<div className="logInPage">
    <div className="logInCard">
        <h1>Welcome back</h1>
        <input placeholder="Email" onChange={(e)=>handleChange("email",e.target.value)}></input>
        <input placeholder="Password" onChange={(e)=>handleChange("password",e.target.value)}></input>
        <button onClick={()=>sendLogInValues()}>Sign In</button>
        <h1>{logInMessage}</h1>

    </div>
</div>
</>)

}export default LogIn;