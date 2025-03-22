import "./MakeAccountCard.css"
import MakeAccountEntry from "./MakeAccountEntry/MakeAccountEntry";
import MakeAccountGetLocation from "./MakeAccountGetLocation/MakeAccountGetLocation";
import SignUpButton from "./SignUpButton/SignUpButton";
import { useState } from "react";
function MakeAccountCard(){

    const [longitude,setLongitude] = useState();
    const [latitude,setLatitude] = useState();
    const [first_name,setFirst_name] = useState();
    const [last_name,setLast_name] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();




return (<>

<div className="accountCard">
<h1>Welcome</h1> 
<MakeAccountEntry value="First name" setState={setFirst_name}/>
<MakeAccountEntry value="Last name" setState={setLast_name}/>
<MakeAccountEntry value="Email" setState={setEmail}/>
<MakeAccountEntry value="Password" setState={setPassword}/>
<MakeAccountGetLocation longitude = {longitude} setLongitude = {setLongitude} latitude = {latitude} setLatitude = {setLatitude}/>
{longitude && latitude ? <SignUpButton longitude = {longitude} latitude = {latitude} first_name = {first_name}  last_name = {last_name} email = {email} password = {password}/> : ""}
</div>
</>)




}export default MakeAccountCard;