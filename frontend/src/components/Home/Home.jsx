import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import UserCard from "./UserCard/UserCard";
import "./Home.css";


function Home(){
const [people,setPeople] = useState([{first_name:"Please wait",about:"while your page loads",id:0}])


    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCity = queryParams.get('city') || "phoenix";
    const [cityName,setCityName] = useState(initialCity);
    
    
    
useEffect(()=>{

    const initialCity = queryParams.get('city') || "phoenix";
    setCityName(initialCity);

},[location.search])








    const getAccounts = async()=>{
   const result = await fetch(import.meta.env.VITE_URL_BASE +"getAccounts",
       {
   method:'POST',
   headers: {'Content-Type': 'application/json'},
   body:JSON.stringify({cityName}),
   credentials:'include'
   
   
       }
     
   
   
   )



   const finalResult = await result.json();

   const peopleInArea = finalResult.peopleInArea;

   console.log(peopleInArea);

   setPeople(peopleInArea);

    }   


   
    

useEffect(()=>{
   
 
    getAccounts();
    




},[cityName])

   
    return(<>



<div className="cards-container">


{people.map((person,index)=>{

return <><UserCard image_url = {person.image_url} id = {person.id}first_name = {person.first_name} last_name={person.last_name}about={person.about}/></>

    })
}


</div>
    </>);
}export default Home;