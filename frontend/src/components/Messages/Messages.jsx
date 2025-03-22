import { useState,useEffect } from "react";
import MessageCard from "./MessageCard/MessageCard";
import "./Messages.css";
import { useNavigate } from "react-router-dom";
function Messages(){


    const [convos,setConvos] = useState([
        { id:0,
        first_name:"No conversations",
        last_name:"",
        about:""}])

const retrieveChats = async()=>{


const response = await fetch(import.meta.env.VITE_URL_BASE +"retrieveChats",
 
{
method:'Post',
headers: {'Content-Type': 'application/json'},
credentials:'include'

})

const results = await response.json();
console.log(results.partners);
setConvos(results.partners);
}


useEffect(()=>{

    retrieveChats();
},[])

const [idToGoTo,SetIdToGoTo] = useState(0);
const navigate = useNavigate();
const newId = (index) =>{

    SetIdToGoTo(convos[index].id);
    
    



}

useEffect(()=>{
    if (idToGoTo !== 0){
    navigate("/chatpage",{ state: { idToGoTo } })
    }
},[idToGoTo])
return (<>


<div className="hedr">
    <h1>Conversations</h1>
</div>
{convos.map( (person,index)=>{

return <>

<div onClick={()=>newId(index)}>
<MessageCard first_name={person.first_name}/>
</div>
</>

})}



</>);



}export default Messages;