import React,{ useContext, useRef } from 'react';
import Counter from './counter';
import Weather from "./weather";

import { MyContext } from '../context';

const Todo_list = ()=>{
 const context = useContext(MyContext)
const textInput = useRef();



const handleSubmit = (e)=>{
e.preventDefault();
const value = textInput.current.value

if(value==='')
{  
  alert('adfasf')
}
else{
  context.addList(value)
  textInput.current.value = ''
}

}





/*

 */ 
  return(
<>

<div className=' flex'> 

<div className='m-5 bg-boy'>

<form onSubmit={handleSubmit}  className="mt-4">
  
        <input  className ="h-9 rounded-md "type="text"  name="player"ref={textInput}/>
        <span> <button className=' text-white bg-amber-500 border-0 py-1 px-4 focus:outline-none hover:bg-amber-600 rounded text-lg m-1' type='submit'> + </button> </span>
       
        </form>

<ul>
{ context.state.list.map((items,idx)=>(

 <li className=   'bg-boy w-45 text-center  rounded  border-solid border-2' key={idx}>   <input type="checkbox" className='m-5' onClick={context.deleteList}></input> {items}     </li>
))}


</ul>
</div>

<div  className='bg-white'>
<Counter/>

</div>
<div>
<Weather/>
</div>

</div>



</>

  )


}

export default Todo_list