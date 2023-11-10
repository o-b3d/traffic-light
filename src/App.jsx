import "./App.css";
import { Light } from "./Light.jsx";
import { useEffect, useState } from "react";

{
  /*The below line is where component begins*/
}
export default function App() {
  const [trafficLight, setTrafficLight] = useState("red");

  useEffect(() => {
    {
      /*if is entered here to detect if state is set to false using trafficLightStopped
    and stop the function that has "switch" from running if trafficLightStopped is set to true
    using the "return" at the end of the if statement*/
    }
    if (trafficLightStopped) return;

    const interval = setInterval(() => {
      switch (trafficLight) {
        case "red":
          setTrafficLight("yellow");
          break;
        case "yellow":
          setTrafficLight("green");
          break;
        case "green":
          setTrafficLight("red");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const switchTrafficLight = () => {
    switch (trafficLight) {
      case "red":
        setTrafficLight("yellow");
        break;
      case "yellow":
        setTrafficLight("green");
        break;
      case "green":
        setTrafficLight("red");
    }
  };

  {
    /*trafficLightStopped is a variable used to change State of component to false to stop*/
  }
  const [trafficLightStopped, setTrafficLightStopped] = useState(false);

  const handleStopButton = () => {
    //prettier-ignore
    {/*setTrafficLightStopped is used in a function to call "set Value" of variable above.
    toggleState is parameter used in setTrafficLightStopped to change between true to false
    in State using the ! symbol*/}
    setTrafficLightStopped((toggleState) => !toggleState);
  };


  return (
    <>
      <div className="trafficPole" />
      <div className="trafficLights">
        <Light color="red" opacity={trafficLight === "red" ? 1 : 0.4} />
        <Light color="yellow" opacity={trafficLight === "yellow" ? 1 : 0.4} />
        <Light color="green" opacity={trafficLight === "green" ? 1 : 0.4} />
      </div>
      <button onClick={switchTrafficLight}>Switch ↻</button>
      <button onClick={handleStopButton}>
        {/*if statement using ? operator to use trafficLightStopped as condition to
        detect if state is true or false and show corresponding text depending on state*/}
        {trafficLightStopped ? "Start 👍" : "Stop ✋"}
      </button>
    </>
  );
}
