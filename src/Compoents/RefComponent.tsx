import { useEffect, useRef, useState } from "react";

function RefComponent() {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    console.log("Focus Ref");

    // Change background color of the div
    if (divRef.current) {
      divRef.current.style.backgroundColor = "red";
    }

    // Focus on the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1>Ref Component Ref Hook in React Js</h1>
      <div>
        <div ref={divRef}>Hello Hi!!!</div>
        <input ref={inputRef} placeholder="Type something..." />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
      <PreviousCounter />
      <Timer />
    </div>
  );
}

export default RefComponent;

function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    }; // clear on unmount
  }, []);

  return <p>Timer: {seconds}</p>;
}
