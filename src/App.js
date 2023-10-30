import React, { useState } from "react";
import "./index.css";

function App() {
  // ! STATES -----------

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("-");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height.");
    } else {
      const setToMeter = height * 0.01;
      let bmi = weight / (setToMeter * setToMeter);
      setBmi(bmi.toFixed(2));

      if (bmi < 18.5) {
        setMessage("Underweight.");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("Healty Weight.");
      } else {
        setMessage("Overweight");
      }
    }
  };

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("../src/assets/underweight.png");
    } else if (bmi >= 18.5 && bmi < 29.9) {
      imgSrc = require("../src/assets/healthy.png");
    } else {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <div>
          <label>Height (Cm)</label>
          <input
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          ></input>
        </div>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
