import "./MessagesDisplay.css"
import MessageBubble from "./MessageBubble/MessageBubble";
import { useState } from "react";


function MessagesDisplay({receiveConversation,conversation}){


   




    return(<>
    <div className="messagesDisplay">
       { conversation.map((people,index)=>{


return ( <> <MessageBubble content={people.content} sender_id = {people.sender_id}/> </>)
        })}
    </div>
    
    
    </>)


}


export default  MessagesDisplay;