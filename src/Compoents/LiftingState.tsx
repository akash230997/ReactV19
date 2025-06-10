// Lifting State Up in React
import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface InputValProps {
  inputVal: string;
  setInputVal: Dispatch<SetStateAction<string>>;
}

interface DisplayValProps {
  inputVal: string;
}

const LiftingState: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <h1>Lifting the state up!!!</h1>
      <InputVal inputVal={inputVal} setInputVal={setInputVal} />
      <DisplayVal inputVal={inputVal} />
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
