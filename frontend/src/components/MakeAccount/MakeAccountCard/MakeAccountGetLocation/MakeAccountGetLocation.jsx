
function MakeAccountGetLocation({longitude,setLongitude,latitude,setLatitude}){


    const findLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Location retrieved:", position);
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
            },
            (error) => {
                console.error("Geolocation error:", error);
                alert(`Error: ${error.message}`);
            }
        );
    };
    



    return (<>
    
    <button onClick={()=>findLocation()}>Allow location</button>
    <h1>Location: {latitude ? latitude+"," : ""}{longitude ? longitude : ""} </h1>
    
    </>)
    
    
    
    
    }export default MakeAccountGetLocation;