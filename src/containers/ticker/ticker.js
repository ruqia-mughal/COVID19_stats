import React from 'react'
import MovingComponent from 'react-moving-text'
import "./ticker.css";

const MyAnimatedTypo = () => {
  return (
      <>
    <MovingComponent
   
    type="slideInFromRight"
    duration="10000ms"
    delay="0s"
    direction="alternate"
   
    iteration="infinite"
    timing="linear"
    fillMode="none">
      <h1 className="alertheading" style={{color:"green"}}><span className="alert" >Alert! </span>
        Wear Mask , Maintain Distance, Stay Safe </h1>
      
    
  </MovingComponent>
 
  </>
  )
}


export default MyAnimatedTypo;
