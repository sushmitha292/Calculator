import './App.css';
import img from './images/calculator.png'
import React, { useState } from 'react';
function App() {
  const [count,setCount]=useState('');
  const handleClick =(e)=>{
    setCount(count.concat(e.target.name));
  }
const allclear=()=>{
  setCount('');
}
const clear=()=>{
  setCount(count.slice(0,-1));
}
const calculation=()=>{
  try{
   setCount(eval(count));
 }
  catch{
    setCount('Invalid Input');
  }
}
  return (
    <div className="App">
       <div className='images'>
        <img src={img} />
      </div>
      <h1> Calculator</h1>
      <div className='contents'>
        <input className='input' type='text' value={count} disabled='true'/>
      <div className='button-layout'>
     <button className='button' onClick={handleClick} name='7'> 7 </button>
     <button className='button'onClick={handleClick} name='8'> 8 </button>
     <button className='button' onClick={handleClick} name='9'> 9 </button> 
     <button className='button' onClick={handleClick} name='+'> + </button> 
     <button className='button' onClick={handleClick} name='4'> 4 </button>
     <button className='button' onClick={handleClick} name='5'> 5 </button>
     <button className='button' onClick={handleClick} name='6'> 6 </button>
     <button className='button' onClick={handleClick} name='-'> - </button>
     <button className='button' onClick={handleClick} name='1'> 1 </button>
     <button className='button'onClick={handleClick}name='2'> 2 </button>
     <button className='button' onClick={handleClick} name='3'> 3 </button>
     <button className='button'onClick={handleClick} name='*'> * </button>
     <button className='button'onClick={handleClick} name='/'> / </button> 
     <button className='button'onClick={calculation} > =</button> 
     <button className='button'onClick={allclear}> AC </button>
     <button className='button'onClick={clear} > C </button>      
      </div>
      </div>
      
    </div>
  );
}

export default App;
