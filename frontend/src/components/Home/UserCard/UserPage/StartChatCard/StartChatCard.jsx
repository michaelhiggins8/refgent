import "./StartChatCard.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function StartChatCard({first_name,partner_id}){

const navigate = useNavigate();
const [conclusion,setConclusion] = useState();
const startChat = async() =>{

    const result = await fetch(import.meta.env.VITE_URL_BASE +"startChat",
        {   
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({partner_id}),
            credentials: 'include'
        }
    );

    const response = await result.json();
    console.log(response);
    setConclusion(response.message);
    if (response.message == "Not logged in"){
        navigate("/make-account")

    }else if(response.message == "Chat created" || response.message == "Chat exists"){
        navigate("/MESSAGES")

    }

}

return(<>

<div className="startChatCard">
    <h1>Contact {first_name}</h1>
    <button onClick={()=>startChat()}>Chat</button>
    {conclusion}
    
</div>
</>)



}export default StartChatCard;