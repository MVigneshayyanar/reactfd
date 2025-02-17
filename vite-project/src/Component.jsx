import React from 'react'
import './Component.css'

const Component = (props) => {
  return (
    <>
    <div id="mainContainer">
    <h2>{props.firstName}</h2>
    <p>{props.firstAge}</p>
    <p>{props.firstCity}</p>
    </div>
    <div id="mainContainer">
    <h2>{props.secondName}</h2>
    <p>{props.secondAge}</p>
    <p>{props.secondCity}</p>
    </div>
    </>
  )
}

export default Component