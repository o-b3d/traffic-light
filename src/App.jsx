import "./App.css";
import { Light } from "./Light.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (activeLight) {
        case "red":
          setActiveLight("yellow");
          break;
        case "yellow":
          setActiveLight("green");
          break;
        case "green":
          setActiveLight("red");
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="trafficPole" />
      <div className="trafficLight">
        <Light color="red" opacity={activeLight === "red" ? 1 : 0.4} />
        <Light color="yellow" opacity={activeLight === "yellow" ? 1 : 0.4} />
        <Light color="green" opacity={activeLight === "green" ? 1 : 0.4} />
      </div>
      <h1 style={{ margin: "auto", width: "fit-content" }}>{activeLight}</h1>
    </>
  );
}
