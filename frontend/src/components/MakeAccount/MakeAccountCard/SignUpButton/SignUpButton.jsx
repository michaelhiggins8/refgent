function SignUpButton({longitude,latitude,first_name,last_name,email,password}){


    const sendNewAccountData = async()=>{

        const rponse = await fetch(import.meta.env.VITE_URL_BASE+"catchNewAccountData",{
        
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({longitude,latitude,first_name,last_name,email,password}),
        credentials: 'include'
        
        });
        
        
        
        
        }




return (<>

<button onClick={()=>sendNewAccountData()}>Sign up</button>
<br/><br/><br/>



</>)






}export default SignUpButton;