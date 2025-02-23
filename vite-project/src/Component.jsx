import React from 'react'

const Component = (props) => {
    return (

    <div id="mainConatiner">
      <p>Clarity in Teaching : {props.first}</p>
      <p>Friendliness : {props.second}</p>
      <p>Support & Approachability: {props.third}</p>
      <p>Fun & Engaging Teaching Style : {props.fourth}</p>
      <p>Respect & Fairness : {props.fifth}</p>
    </div>
    )
}

export default Component
