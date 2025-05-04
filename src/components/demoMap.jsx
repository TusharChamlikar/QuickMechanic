import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from "react-leafleft";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon=new L.Icon({
    iconUrl:markerIcon,
    shadowUrl:markerShadow,
    iconSize:[25,41],
    iconAnchor:[12,41],
});
function demoMap() {
    const [position,setPosition]= useState([23.2599, 77.4126])
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(
                (pos)=>{
                    setPosition([pos.coords.latitude,pos.coords.longitude])
                },(error)=>console.log(error),{
                    enableHighAccuracy:true
                }
            );
        }
    },[]);
  return (
    <MapContainer center={position} zoom={13} style={{height:"500px",width:"100%"}} >

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors"></TileLayer>
        <Marker position={position} icon={customIcon}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default demoMap
