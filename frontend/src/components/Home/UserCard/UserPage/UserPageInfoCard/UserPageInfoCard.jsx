import "./UserPageInfoCard.css";
function UserPageInfoCard({first_name,last_name,about}){












    return (<>
    <div className="userPageInfoCard">
    <h1>Meet {first_name}</h1>
    <p>{about}</p>
    </div>
    </>);



}export default UserPageInfoCard;