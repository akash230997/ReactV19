// Lifting State Up in React
import React, { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface InputValProps {
  inputVal: string;
  setInputVal: Dispatch<SetStateAction<string>>;
}

interface DisplayValProps {
  inputVal: string;
}

const LiftingState: React.FC = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef("");
  console.log("myRef : ", myRef);

  useEffect(() => {
    // Side effect
    console.log("Component mounted or count changed");
    return () => {
      // Cleanup (optional)
      console.log("Cleanup on unmount or before re-run");
      // count >= 1 ? setCount(0) : setCount(count + 1);
    };
  }, [count]);
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <h1>Lifting the state up!!!</h1>
      <h1>{count}</h1>
      <InputVal inputVal={inputVal} setInputVal={setInputVal} />
      <DisplayVal inputVal={inputVal} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export { LiftingState };

const InputVal: React.FC<InputValProps> = ({ inputVal, setInputVal }) => {
  return (
    <>
      <h1>InputVal</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter something..."
      />
    </>
  );
};

const DisplayVal: React.FC<DisplayValProps> = ({ inputVal }) => {
  return (
    <>
      <h1>DisplayVal</h1>
      <p>You typed: {inputVal}</p>
    </>
  );
};
