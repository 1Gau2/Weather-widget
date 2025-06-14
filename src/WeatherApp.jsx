import SearchComp from "./SearchComp";
import InfoComp from "./InfoComp";
import { useState } from "react";

export default function Weatherapp(){
   const[weatherinfo,setWeatherinfo]=useState({
       
      temprature: 25,
      humidity:20,
      feels_Like:40,
      Description:"dusty"
   })

    let updateinfo=(newinfo)=>(
        setWeatherinfo(newinfo)
       )
    return(
      
    <div >
   <SearchComp Updateinfo={updateinfo}/>
   <InfoComp info={weatherinfo}/>



    </div>)
}