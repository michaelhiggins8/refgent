import { useLocation } from "react-router-dom";
import StartChatCard from "./StartChatCard/StartChatCard";
import UserPageInfoCard from "./UserPageInfoCard/UserPageInfoCard";
import "./UserPage.css";
import myImage from "../../../../assets/realtor.jpg"
function UserPage(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const partner_id = queryParams.get('id');
    const first_name = queryParams.get('first_name');
    const last_name = queryParams.get('last_name');
    const about = queryParams.get('about');
    const img_url_file = queryParams.get('img_url_file');
    const img_url = import.meta.env.VITE_IMAGE_URL_BASE + img_url_file;

    return (<>

    <div className="userPage">
        
        <div className="imgRow">
            <img src={img_url}></img>
            <h1>{first_name} {last_name}</h1>
           
        </div>
        <div className="thirdRow">
            <UserPageInfoCard first_name = {first_name} last_name = {last_name} about={about}/>
            <StartChatCard first_name={first_name} partner_id={partner_id}/>
            
        </div>
    </div>
    </>)
}
export default UserPage;