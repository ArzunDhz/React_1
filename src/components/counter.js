import React,{ useState , useEffect} from 'react'


const Counter = ()=>{

    const today = new Date().toLocaleString("en-US",{timeZone:'Asia/kathmandu', timeStyle:'full',hourCycle:'h12'});

    const [sec ,setSec] = useState(0);
    const [min ,setMin] = useState(0)
    const [hour ,setHour] = useState(0)

var timer;
    useEffect(()=>{
timer = setInterval( ()=>{

    setSec(sec+1);
    if(sec===59){

        setMin(min+1);
        setSec(0)
    }
    if(min===59){
        setHour(hour+1)
        setMin(0);
    }

} , 1000)


return ()=>clearInterval(timer)
    })



    const pausee = ()=>{

        clearInterval(timer)

    
    }
    const reset = ()=>{
        setSec(0);
        setMin(0);
        setHour(0);
    
    }
    
return(

    <>
<div  className='bg-boy text-center text-white h-80 w-60 ml-40 border-solid border-2 border-boy '>
{sec<10?'0'+sec:sec }:{min<10?'0'+min:min}:{hour<10?'0'+hour:hour}
   <button  className=' text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600 rounded text-md m-10 mt-10' onClick={ pausee}> Pause</button>
   <button className=' text-white bg-indigo-500 border-0  focus:outline-none hover:bg-indigo-600 rounded text-md ' onClick={reset}> Reset</button>
</div>
    </>
)



}
export default Counter