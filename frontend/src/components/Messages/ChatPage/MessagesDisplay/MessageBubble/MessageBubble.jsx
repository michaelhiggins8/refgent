import './MessageBubble.css'

function MessageBubble({content,sender_id,idOfPartner}){











    return(<>
    <div className={sender_id == idOfPartner ? "light-theme": "dark-theme"}>
    <h1>{content}</h1>

    </div>
    
    
    </>)
}export default MessageBubble;