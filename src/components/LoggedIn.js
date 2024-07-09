

import { useState } from "react";
import { Navigate } from "react-router-dom"
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from "@vis.gl/react-google-maps"
const LoggedIn = () => {
    //AIzaSyCUJue6X0uxHkwvND82UvPGAP4la1nGhz0
    const [user, setUser] = useState('fei1')
    const position = { lat: 53.54, lng: 10 };
    if (!user) {
        //replace method replaces the previous page in history with the home page (so the user can't access the Logged In page after they logged out)
        return <Navigate to='/' replace={true} />
    }

    return (
        <>
            <>The login button worked 😲</> 
            <button onClick={() => setUser(null)}>Log Out</button>
            <div style={{ height: "60vh", width: "100%" }}>
            <APIProvider apiKey = {"AIzaSyCUJue6X0uxHkwvND82UvPGAP4la1nGhz0"}>
                
                <Map zoom={10} center={{lat: 53.54992, lng: 10.00678}}/>
            </APIProvider>
            </div>
            
            

        </>)
}


export default LoggedIn;