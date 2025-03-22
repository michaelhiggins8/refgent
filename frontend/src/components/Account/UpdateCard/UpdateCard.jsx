import { useState } from "react";
import "./UpdateCard.css";
function UpdateCard({receive_user_data,current_value,headr,attribute,locationOrText}){


const [thingToChange,setThingToChange] = useState("");
const[readyToEdit,setReadToEdit] = useState(false);









const updateValue = async() =>{

    const response = await fetch(import.meta.env.VITE_URL_BASE +"update_account",
        {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'newValue':thingToChange,attribute,locationOrText}),
        credentials: 'include'
})


receive_user_data();




        }
return(<>
<div className="cardContainer">
        <div className="updateCard">
                <div className="firstRow">
                        <h1>{headr}</h1>
                        <button onClick={()=>{readyToEdit ? setReadToEdit(false) : setReadToEdit(true) }}>edit</button>
                </div>
                <div className="aboutRow">
                        {current_value}
                </div>
                <div className="upDateRow">
                        {readyToEdit 
                                ? 
                                        <>
                                                <input onChange={(e)=>setThingToChange(e.target.value)}></input>
                                                <button onClick={()=>updateValue()}>Update</button>
                                        </>
                                :
                                                null
                        }
                </div>
        </div>
</div>


</>);

} export default UpdateCard;