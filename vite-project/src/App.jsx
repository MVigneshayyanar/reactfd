import { useState } from 'react';
import './App.css'
import Component from './Component';
function App() {

  const [mode,setMode]=useState(true)

  const switchMode=()=>{
    setMode(!mode)
  }

  const person1={
    name:"Vignesh INR",
    age:19,
    city:"Chennai",
  }
  const person2={
    name:"fake",
    age:19,
    city:"Tvl",
  }

  const{age:hbd}=person1
  console.log("Happy ",hbd," guys")
  return(
    <div id="main" className={mode?"lm":"dm"}>
    <div id="container2">
    <Component firstName={person1.name} firstAge={person1.age} firstCity={person1.city} secondName={person2.name} secondAge={person2.age} secondCity={person2.city}/>
     </div>
     <button onClick={switchMode}>Switch Mode</button>
    <div id="container1">
    <button onClick={()=>alert("Thanks for the Click")}>SINGLE CLICK</button>
    <button onDoubleClick={()=>alert("Thanks for the Double Click")}>DOUBLE CLICK</button>
    </div>
    </div>
  )
}

export default App
