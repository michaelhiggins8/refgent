import { useState } from "react";
import "./MessageBar.css";
function MessageBar({conversation,receiveConversation,idOfPartner}){

const [message,setMessage] = useState("a");
const sendChatMessage = async()=>{
const result = await fetch(import.meta.env.VITE_URL_BASE +"sendChatMessage",{

    method:'Post',
    headers: {'Content-Type': 'application/json'},
   body:JSON.stringify({message,idOfPartner}),
   credentials:'include'



});
const respnoze = await result.json();
receiveConversation();
window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

}


return(<>
<div className="message_bar_container">
    <div className="messageBar">
        <textarea placeholder="message" onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button onClick={()=>sendChatMessage()}>Send</button>
    </div>
</div>
</>);






}  export default MessageBar;