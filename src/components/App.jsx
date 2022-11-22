import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState("");
  let currTime = new Date().toLocaleTimeString();

  const updateTime = () => {
    setTime(currTime);
  };
  // setInterval(updateTime, 1000);
  return (
    <div className="container my-5">
      <h1>Click The Button to Get Current Time</h1>
      <h2>{time}</h2>
      <button type="button" className="btn btn-dark" onClick={updateTime}>
        Get Time
      </button>
    </div>
  );
};
export default App;
