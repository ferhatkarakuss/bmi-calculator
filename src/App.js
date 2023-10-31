import "./index.css";
import React, { useState } from "react";

function App() {
  // ! -------STATES------ !

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("-");
  const [message, setMessage] = useState("-");

  // FONKSİYON HESAPLAMALAR İÇİN

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
    } else if (bmi >= 30) {
      imgSrc = require("../src/assets/overweight.png");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-400">
      <div className="border-r-8  px-12 py-6 shadow-xl rounded-xl bg-slate-100">
        <div className="text-center font-bold text-4xl border-b-2 border-gray-950 my-5">
          <h2>BMI Calculator</h2>
        </div>

        <div>
          <form onSubmit={calcBmi}>
            <div className="py-1">
              <div className="py-1">
                <label className="block text-xl">Height (Cm) :</label>
                <input
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  className="border-2 w-full border-black rounded-md my-2 px-2 py-1 font-xl"
                ></input>
              </div>

              <label className="block text-xl">Weight (kg) :</label>
              <input
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                className="border-2 w-full border-black rounded-md my-2 px-2 py-1 font-xl"
              ></input>
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="block bg-slate-800 text-white w-full rounded-md py-2 my-2 text-xl"
              >
                Submit
              </button>
              <button
                type="submit"
                onClick={reload}
                className="block bg-slate-800 text-white w-full rounded-md py-2 my-2 text-xl"
              >
                Reload
              </button>
            </div>
          </form>
        </div>

        <div className="result text-center font-bold my-4">
          <h2 className="text-xl border-b-2 border-gray-500">
            Your BMI is : {bmi}
          </h2>
          <p>{message}</p>
        </div>

        <div className="">
          <img src={imgSrc} className="mx-auto h-40" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
