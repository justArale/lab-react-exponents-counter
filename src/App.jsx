import "./App.css";
import { useState } from "react";

import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>
      <div className="container">
        <Exponent num={count} exponent="2" />
        <Exponent num={count} exponent="3" />
        <Exponent num={count} exponent="4" />
        <Exponent num={count} exponent="5" />
        <Exponent num={count} exponent="6" />
      </div>
    </div>
  );
}

export default App;
