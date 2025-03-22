import {BrowserRouter,Route,Routes} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import "./App.css"
import Home from "./components/home/home"
import LogIn from "./components/LogIn/LogIn"
import MakeAccount from "./components/MakeAccount/MakeAccount"
import SearchResults from "./components/SearchResults/SearchResult"
import Account from "./components/Account/Account"
import Messages from "./components/Messages/messages"
import ChatPage from "./components/Messages/ChatPage/ChatPage"
import UserPage from "./components/Home/UserCard/UserPage/UserPage"
import Footer from "./components/Footer/Footer"
function App() {

  return (
    <>

    
     <BrowserRouter>
     <NavBar/>
      <Routes>
       

        <Route path = "/" element={<Home/>}/ >
        <Route path = "/make-account" element = {<MakeAccount/>}/>
        <Route path = "/log-in" element = {<LogIn/>}/>
        <Route path = "/search-results" element = {<SearchResults/>}/>
        <Route path ="/Account" element ={<Account/>}></Route>
        <Route path = "/Messages" element = {<Messages/>}></Route>
        <Route path = "/chatPage" element = {<ChatPage/>}></Route>
        <Route path = "/user-page" element={<UserPage/>}></Route>
      </Routes>
     
      
     </BrowserRouter>
     
     
    </>
  )
}

export default App
