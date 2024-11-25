import { useState, useMemo, useReducer } from "react";
import "./App.css";

function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
}

export function Counter() {
  // let [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [value, setValue] = useState("")
  // let handleIncrement = () => {
  //   setCount((prev) => {
  //     handleDisable(prev + 1);
  //     return prev + 1;
  //   });
  // };
  // let handleDecrement = () => {
  //   setCount((prev) => {
  //     handleDisable(prev - 1);
  //     return prev - 1;
  //   });
  // };

  const handleChange=  (e)=>{
    setValue(e.target.value)
  }
  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
  );

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>
        <button
          disabled={state.count >= 10}
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
        {state.count}
        <button
          disabled={state.count <= -10}
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
      </p>
      <p>
        Factorial of {state.count} is {factorial}
      </p>
    </div>
  );
}
