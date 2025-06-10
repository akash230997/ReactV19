// Passing Events as Props in React | Control Parent Function Using Child Component
// Event Propagation in React: Capturing, Bubbling, and Practical Implementation🔥
import React from "react";

function EventClick({ onClick, onMouseEnter }) {
  const handleGreet = () => {
    console.log("Event Hover!!!");
    onMouseEnter();
  };

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handleGreet}>Greet! Me</button>
    </div>
  );
}

export default EventClick;
