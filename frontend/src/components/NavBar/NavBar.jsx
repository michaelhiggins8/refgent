import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect,useState,useRef  } from "react";
import { useNavigate } from "react-router-dom";











function NavBar(){

const [loggedIn,setLoggedIn] = useState(true);
const navBarNavigate = useNavigate();
const [searchQuery,setSearchQuery] = useState("") ;


const checkIfLoggedIn = async()=>{
console.log("1n");
const result = await fetch(import.meta.env.VITE_URL_BASE +"checkIfLoggedIn",


    {
        method:"GET",
        credentials: 'include'



    }
)

console.log("2n");

const response = await result.json();
console.log(response);
if(response.message == "working"){

    setLoggedIn(false);
    
}else{
    setLoggedIn(true);

}


console.log("3n");


}


useEffect(()=>{

    checkIfLoggedIn()


},[]);






const handleSearch = ()=>{


    navBarNavigate(`/?city=${searchQuery}`);



}
 




    return (
<>
    <nav>
        {loggedIn ? (
        
        <ul className="navContainer">
        <li className="homeButton"><Link className="homeButtonLink" to = "/"><img src="images/profile_pictures/logo.png"/></Link></li>
        <input placeholder="City" className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
        <button className = "searchButton"onClick={()=>handleSearch()}>Search</button>
        <li className="logIn"><Link to = "/log-in" className="logInLink"> Log In</Link></li>
        <li className="makeAccount"><Link to = "/make-account" className="makeAccountLink">SIGN UP</Link></li>
        
        </ul>
       
    ) : (
    <ul className="navContainer" >
        <li className="homeButton"><Link className="homeButtonLink" to = "/" ><img src="images/profile_pictures/logo.png"/></Link></li>
        <input placeholder="City" className="search" onChange={(e)=>setSearchQuery(e.target.value)}></input>
        <button  className = "searchButton" onClick={()=>handleSearch()}>Search</button>
         <li className="logIn" ><Link to = "/MESSAGES" className="logInLink">MESSAGES</Link></li>
        <li className="makeAccount" ><Link to = "/ACCOUNT" className="makeAccountLink"> ACCOUNT</Link></li>

        </ul>
    ) }
                
        
    </nav>
    
    </>

)


}export default NavBar;