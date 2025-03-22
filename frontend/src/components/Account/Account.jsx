import UpdateCard from "./UpdateCard/UpdateCard";
import UpdateLocationCard from "./UpdateLocationCard/UpdateLocationCard";
import "./Account.css";
import { useState,useEffect } from "react";
function Account(){
   const [userData,setUserData] = useState(null);

   const receive_user_data = async() =>{


      const result = await fetch(import.meta.env.VITE_URL_BASE +"receive_user_data",
      {
              method: 'GET',
              credentials: 'include'
      
      })
      

      const response = await result.json();
      

      setUserData(response.message);
      

      }
      



useEffect(()=>{

   receive_user_data();

},[])











    return(<>
    
      <UpdateCard locationOrText = "text" receive_user_data = {receive_user_data} current_value = {userData?.first_name} headr = "First name" attribute = "first_name"/>
      <UpdateCard locationOrText = "text" receive_user_data = {receive_user_data} current_value = {userData?.last_name} headr = "Last name" attribute = "last_name"/>
      <UpdateCard locationOrText = "text" receive_user_data = {receive_user_data} current_value = {userData ? "*****" : null} headr = "Password" attribute = "password]"/>
      <UpdateLocationCard locationOrText = "location" receive_user_data = {receive_user_data} current_value = {userData?.latitude && userData?.longitude ? userData.latitude + ","+ userData.longitude : null} headr = "Location" attribute = "first_name"/>
      <UpdateCard locationOrText = "text" receive_user_data = {receive_user_data} current_value = {userData?.about} headr = "About" attribute = "about"/>
      
    


    </>);


}export default Account;