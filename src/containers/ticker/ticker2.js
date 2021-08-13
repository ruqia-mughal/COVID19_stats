import React from 'react'
import "./ticker.css";
import MovingText from 'react-moving-text'

const MovingFunction   = () => {
    return (
        <>
   
  <MovingText
  type="flash"
  duration="1000ms"
  delay="0s"
  direction="alternate"
  timing="ease"
  iteration="infinite"
  fillMode="both">
  <h1 className="corona"> <span style={{color:"red",fontStyle:"oblique"}}> Corona</span> Virus</h1>
  </MovingText>
    </>
    )
  }
  export default MovingFunction;