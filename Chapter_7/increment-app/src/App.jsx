import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Button from "./components/Button";
import { ACTIONS } from "./libs/const";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Increment APP</p>
        <div>
          <h1>{count}</h1>
          <div>
            <Button
              count={count}
              setCount={setCount}
              action={ACTIONS.DECREMENT}
              text="Minus"
            />
            <Button
              count={count}
              setCount={setCount}
              action={ACTIONS.INCREMENT}
              text="Plus"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
