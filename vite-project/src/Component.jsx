import React from "react"
import { useState } from 'react';
import { FaFemale, FaMale } from 'react-icons/fa';
import  './Component.css';

const Person=(props)=>{
  const [gender, setGender] = useState('M');

const changeGender = () => {
  setGender(gender === 'M' ? 'F' : 'M');
};
  return(

      <div id="container">
      <h1>Name: {props.name}</h1>
      <p>Age: &nbsp; &nbsp;{props.age}</p>
      <p>City: {props.city}</p>
      <h2>Gender: {gender}</h2>
      <div id="genderIcon">
        {gender === 'M' ? <FaMale /> : <FaFemale />}
      </div>
      <button onClick={changeGender}>Click to change gender</button>
    </div>
  );
}

export default Person;