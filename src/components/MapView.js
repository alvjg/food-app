import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapView = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>

    return <Map />;
};

function Map() {
    //calculates value of center once and reuses it every single time it re-renders (instead of having it recentering itself)
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    return (<GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >
        <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>);
}


export default MapView;