import React from "react";
import Button from "./button/Button";
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handelCounter = (pressValue) => {
    if (pressValue === "Next") {
      if (number < 20) {
        setNumber(number + 1);
      } else {
        alert("Danger Zone!...");
      }
    } else {
      if (number > -20) {
        setNumber(number - 1);
      } else {
        alert("Danger Zone!...");
      }
    }
    if (pressValue === "reset") {
      setNumber(0);
    }
    if (number > 20) {
      return;
    }
  };
  return (
    <>
      <h1 className={number > 0 ? "green" : number === 0 ? "blue" : "red"}>
        {number}
      </h1>
      <Button handelCounter={handelCounter} />
    </>
  );
};

export default Counter;
