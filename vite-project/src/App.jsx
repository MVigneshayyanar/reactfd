import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${JSON.stringify(details)} are submitted`);
  }

  const details={
    name:name,
    email:email,
    pass:'********'
  }

  return (
  <>
   <div>
    <form onSubmit={handleSubmit} >
      <input type="text" id="name" placeholder='Enter your name' required value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" name="" id="email" placeholder='Enter you email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" name="" id="pass" placeholder='Enter your password' required value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button type="submit" value="Submit" >Submit</button>
    </form>
   </div>
  </>
    
  );
}

export default App;