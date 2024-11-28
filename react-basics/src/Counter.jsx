import {
  useState,
  useMemo,
  useReducer,
  memo,
  useCallback,
  useEffect,
} from "react";
import "./App.css";
import PropTypes from "prop-types";

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

function Header({ value }) {
  useEffect(() => {
    console.log("Header useEffect");
    return () => {
      console.log("Cleanup function header"); //called when header component is destroyed
    };
  }, []);
  return <h1>{value}</h1>;
}

Header.propTypes = {
  value: PropTypes.string,
};

function Input({ value, handleChange }) {
  return <input type="text" value={value} onChange={handleChange} />;
}

const MemoizedHeader = memo(Header);
const MemoizedInput = memo(Input);

export function Counter() {
  // let [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [value, setValue] = useState("");
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

  useEffect(() => {
    console.log("useEffect dependencies state.count");
    return () => {
      console.log("cleanup function dependencies state.count"); //called when state.count is changed
    };
  }, [state.count]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const factorial = useMemo(
    () => calculateFactorial(state.count),
    [state.count]
  );

  return (
    <div>
      <div>
        <MemoizedHeader value={value} />
      </div>
      <div>
        <MemoizedInput value={value} handleChange={handleChange} />
      </div>
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
      <p>
        Factorial of {state.count} is {factorial}
      </p>
    </div>
  );
}
