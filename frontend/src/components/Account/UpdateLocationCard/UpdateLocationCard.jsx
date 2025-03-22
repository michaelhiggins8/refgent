import "./../UpdateCard/UpdateCard.css";
import { useState } from "react";
function UpdateLocationCard({receive_user_data,current_value,headr,attribute,locationOrText}){




const [thingToChange,setThingToChange] = useState("");
const[readyToEdit,setReadToEdit] = useState(false);


const [longi,setLongi] = useState(1);
const [lati,setLati] = useState(1);


const findLocation = ()=>{

    navigator.geolocation.getCurrentPosition((position)=>{

        setLongi(position.coords.longitude);
        setLati(position.coords.latitude);

    })

}










const updateValue = async() =>{
        
        const response = await fetch(import.meta.env.VITE_URL_BASE +"update_account",
            {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({longi,lati,attribute,locationOrText}),
            credentials: 'include'
    })
    
    const anr = await response.json();
    console.log(anr);    

        receive_user_data();
        
  
    
    
            }


























return (<>

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
                                                {lati},{longi}
                                                <button onClick={()=>findLocation()}>Locate</button>
                                                 <button onClick={() =>updateValue()}>Update</button>
                                        </>
                                :
                                                null
                        }
                </div>
        </div>
</div>


</>);



}export default UpdateLocationCard;