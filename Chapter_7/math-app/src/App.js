import logo from "./logo.svg";
import "./App.css";

import { useRef, useState, useEffect } from "react";

function App() {
  const [renderCount, setRenderCount] = useState(0);
  const [count, setCount] = useState(0);

  // Using REF
  const valueOne = useRef(0);
  const valueTwo = useRef(0);

  const sumValue = () => {
    if (valueOne.current.value && valueTwo.current.value) {
      const valueOneInt = parseInt(valueOne.current.value);
      const valueTwoInt = parseInt(valueTwo.current.value);
      const sum = valueOneInt + valueTwoInt;

      setCount(sum);
    }
  };

  useEffect(() => setRenderCount(renderCount + 1), [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          placeholder="Value One"
          type="number"
          ref={valueOne}
        />
        <input
          placeholder="Value Two"
          type="number"
          ref={valueTwo}
        />
        <button onClick={sumValue}>Sum</button>
        <h1>{count}</h1>
        <h1>Render count: {renderCount}</h1>
      </header>
    </div>
  );
}

export default App;
