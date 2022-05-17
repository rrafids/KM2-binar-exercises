import React from "react";

import { ACTIONS } from "../libs/const";

export default function Button(props) {
  const { count, setCount, action, text } = props;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <button
      onClick={() => {
        if (action === ACTIONS.INCREMENT) return increment();
        else if (action === ACTIONS.DECREMENT) return decrement();
      }}
    >
      {text}
    </button>
  );
}
