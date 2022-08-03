import React,{ useEffect, useState} from 'react'


const Count = ()=>{

const [time, setTIme ] = useState('00-00-00')



    const today = new Date().toLocaleString("en-US",{timeZone:'Asia/kathmandu', timeStyle:'medium',hourCycle:'h12'});

useEffect(()=>{
  var timer ;
  timer = setInterval(()=>{

  setTIme(today);
  },1000)

  return()=>clearInterval(timer)
})





return(

    <>
    <div className='text-amber-500 text-center p-10 text-3xl border-dotted border-2 border-sky-500 bg-blue-100' >
    {time}
    </div>

    </>
)



}
export default Count