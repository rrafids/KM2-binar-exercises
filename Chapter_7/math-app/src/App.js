import logo from "./logo.svg";
import "./App.css";

import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Using REF
  const value = useRef(0);

  const onInputChange = () => {
    setCount(value.current.value);
  };
  // Using REF

  // Using STATE
  // const onInputStateChange =(e)  => {
  //   // Update state count
  //   const value = e.target.value;

  //   setCount(value);
  // };
  // Using STATE

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="number"
          // Using REF
          ref={value}
          onChange={onInputChange}
          // Using REF

          // Using STATE
          // onChange={(e) => onInputStateChange(e)}
          // Using STATE
        />
        <h1>{count}</h1>
      </header>
    </div>
  );
}

export default App;
