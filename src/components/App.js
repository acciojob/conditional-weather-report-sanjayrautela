import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  let data = { temperature: 25, conditions: "Sunny" }
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay data={data}/>
    </div>
  )
}

export default App