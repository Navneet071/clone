import React from 'react'

// import "./index.css"

const currentDate = new Date();
let greeting;

const currentTime = currentDate.getHours();

const currentStyle = {
    color:""
  }

if (currentTime < 12) {
  greeting = "Good Morning";
  currentStyle.color = "red";
} else {
  greeting = "Good Afternoon";
  currentStyle.color = "green";
}

function Greeting() {
  return (
    <div className="event" style={currentStyle}>
      <h1>{greeting}</h1>
    </div>
  );
}


export default Greeting;