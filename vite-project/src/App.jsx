import React from 'react';
import './App.css';
import Person from './Component';

function App() {

  const person1 = {
    name: 'faKe',
    age: 19,
    city: 'Chennai',
    gender: 'M',
  };
  const person2 = {
    name: 'fake',
    age: 19,
    city: 'Tvl',
    gender:   'F',
  };

  console.log(`Happy ${person1.age} guys`);

  return (
  <>
    <Person name={person1.name} age={person1.age} city={person1.city} gender={person1.gender}/>
    <Person name={person1.name} age={person1.age} city={person1.city} gender={person1.gender}/>
  </>
    
  );
}

export default App;
