import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"
export default function Search({Updateinfo}){
   
     let[city,setCity]=useState("")
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="97b2f5b5fdccdfe985abf06870eb5bc4"

    let weatherinfo=async()=>{
        let response= await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        )
        let jsonResponse= await response.json()
        console.log(jsonResponse);
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            description:jsonResponse.weather[0].description,
        };
     console.log( result)
     return result;
    }
   let handlechange=(event)=>(
    setCity(event.target.value)
   )
   let handlesubmit=async(event)=>{
    event.preventDefault()
    console.log(city)
   let newinfo= await weatherinfo()
    setCity("")
   Updateinfo(newinfo)
   }
   
   
    return(
        
        <div className="Search">
            <form onSubmit={handlesubmit}>
                
             <h3>Search Weather!</h3>
             <TextField id="outlined-basic" label="City Name" variant="outlined"   required value={city} onChange={handlechange} />
             <br></br><br></br>
             <Button variant="contained" type="submit" >Search</Button>
             


            </form>
           
            
        </div>
    )
}