import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import MessageBar from "./MessageBar/MessageBar";
import MessagesDisplay from "./MessagesDisplay/MessagesDisplay";
function ChatPage(){
const location = useLocation();
const idOfPartner = location.state.idToGoTo;



const [conversation,setConversation] = useState([{"content":"no messages"}])

    const receiveConversation = async()=>{
        const result = await fetch(import.meta.env.VITE_URL_BASE +"receiveConversation",
        {
        
            method:'Post',
            headers: {'Content-Type': 'application/json'},
           body:JSON.stringify({idOfPartner}),
           credentials:'include'
        
        
        
        });

        const messages = await result.json()
       // console.log(messages.messages)
        setConversation(messages.messages);
        
        
        }




        useEffect(()=>{

            receiveConversation();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });


        },[])



    return(<>
    <MessagesDisplay  conversation = {conversation}/>
    <MessageBar conversation = {conversation} idOfPartner = {idOfPartner} receiveConversation = {receiveConversation}/>
    </>);
}
export default ChatPage;