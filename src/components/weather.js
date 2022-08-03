
import React,{ useEffect, useState } from 'react'


const Counter = ()=>{

    const rainURL = "https://cdn.videvo.net/videvo_files/video/free/2015-06/small_watermarked/Raindrops_Macro2_Videvo_preview.webm"
    const cloudsURL =  "https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/RooftopClouds_preview.webm"  
    const mistyURL ="https://cdn.videvo.net/videvo_files/video/free/2016-05/small_watermarked/481479901_preview.webm"
    const clearURL = "https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180705_01_03_preview.webm"
    const thunderURL = "https://media.istockphoto.com/videos/lightning-in-storm-clouds-video-id482761919"
    const snowURL = "https://cdn.videvo.net/videvo_files/video/free/2012-08/small_watermarked/Snow-H264%2075_preview.webm";  
    const appid = "ae7b6dd66e9cf5a4fb2502b9e4681c96";
    const url  = "https://api.openweathermap.org/data/2.5/weather?q="+ "kathmandu" +"&appid="+appid+"&units=metric";





    const [temp ,setTemp] = useState(0)
    const [main ,setMain]  = useState('')      



const Video = ()=>{
    if (main ==="Clouds"){
       
  return(cloudsURL)
       } else if (main==="Rain"){
        return(rainURL)
       }
       else if (main==="Mist"){
        return(mistyURL)
       }
       else if (main==="Clear"){
        return( clearURL)
       }
       else if (main==="Thunderstrom"){
        return(thunderURL)
       }
       else if (main==="Snow"){
        return(snowURL)
       }
      
       else{
        return(rainURL)
       }

}






   

 useEffect(()=>{
    fetch(url).then(res => res.json()).then(data => {setTemp(data.main.temp) ; setMain(data.weather[0].main);console.log(data)})
 },[url],[Video])
  

return(

    <>
 
<div className='mt-10'> 
<video  className= 'ml-40' id="video" width="250" height="700" autoPlay loop src={Video()}>  </video>
<p className='text-lg text-black text-center'>{temp}°C  </p> </div>

    </>
)



}
export default Counter
