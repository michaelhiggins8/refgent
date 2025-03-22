import "./UserCard.css";
import { useNavigate } from "react-router-dom";
import myImage from "./../../../assets/realtor.jpg"
function UserCard({id,first_name,last_name,about,image_url}){

    const userCardNavigate = useNavigate();

    const img_url_file = image_url;
  
      const img_url = import.meta.env.VITE_IMAGE_URL_BASE + img_url_file;

      return(<>
<div className="userCard" onClick={()=>userCardNavigate(`/user-page?id=${id}&first_name=${first_name}&last_name=${last_name}&about=${about}&img_url_file=${img_url_file}`)}>

{/* <img src = {img_url_file}  onError={(e) => (e.target.src = "/images/profile_pictures/Dog_man.png")}></img>*/}

    <h1 className="title">{first_name}  {last_name}</h1>
    <p className="about">{about}</p>
    
</div>
</>)

}export default UserCard;