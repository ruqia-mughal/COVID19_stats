import React, { Component } from 'react'
import "./timer.css"
class CurrentTym extends Component {
 state = {}
 render() {
    const clock=() =>{
        var time = document.getElementById("time");
  
        var date = new Date();
        
         let setdate= date.toLocaleString("en-US", {
          
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
       
        time.innerHTML=setdate;
   
       
        }
        var interval=setInterval(clock,1000);
        
  return(
   

     <div class="div1">
       <strong id="time">00</strong>
   </div>


    

    )
   }
 }


export default CurrentTym