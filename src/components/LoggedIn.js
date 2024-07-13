

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from "@vis.gl/react-google-maps"
const LoggedIn = () => {
    //AIzaSyCUJue6X0uxHkwvND82UvPGAP4la1nGhz0
    const [user, setUser] = useState('fei1')
    
    const [userLocation, setUserLocation] = useState(null);
    const getUserLocation = () => {
        // if geolocation is supported by the users browser
        console.log(`hihihii`);
        if (navigator.geolocation) {
          // get the current users location
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // save the geolocation coordinates in two variables
              const { latitude, longitude } = position.coords;
              // update the value of userlocation variable
              console.log(`Lat: ${latitude}, Long: ${longitude}`);
              setUserLocation({ latitude, longitude });
            },
            // if there was an error getting the users location
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
        // if geolocation is not supported by the users browser
        else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
     
      useEffect(() => {
        getUserLocation();
      }, []);
    if (!user) {
        //replace method replaces the previous page in history with the home page (so the user can't access the Logged In page after they logged out)
        return <Navigate to='/' replace={true} />
    }

    return (
        <>
            <>The login button worked 😲</> 
            <button onClick={() => setUser(null)}>Log Out</button>
            
            
            
      
            <div style={{ height: "60vh", width: "100%" }}>
            <APIProvider apiKey="AIzaSyCUJue6X0uxHkwvND82UvPGAP4la1nGhz0">
          {userLocation ? (
            <Map zoom={10} center={{ lat: userLocation.latitude, lng: userLocation.longitude }} mapId = 
            '63acfe1a96bff0e2 '>
              
              
            </Map>
          ) : (
            <div>Loading map...</div>
          )}
        </APIProvider>
            </div>
            
            

        </>)
}


export default LoggedIn;