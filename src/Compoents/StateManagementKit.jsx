import React, { useState } from "react";

function StateManagementKit() {
  const [data, setData] = useState([
    { name: "AKash Meena", Age: 27 },
    { name: "Kiran Meena", Age: 29 },
    { name: "Kuldeep Meena", Age: 36 },
    { name: "Neelam Meena", Age: 38 },
  ]);

  const increment = (index) => {
    console.log("index : ", index);
    const updatedData = [...data];
    console.log("updatedData : ", updatedData[index]);
    updatedData[index].Age += 1;
    setData(updatedData);
  };

  const decrement = (index) => {
    console.log("index : ", index);
    const updatedData = [...data];
    console.log("updatedData : ", updatedData[index]);

    updatedData[index].Age -= 1;
    setData(updatedData);
  };

  return (
    <div>
      <h1>State Management Kit</h1>
      {data.map((person, index) => (
        <ul key={index}>
          <li style={{ padding: "10px" }}>
            {person.name} - {person.Age}
            <button onClick={() => increment(index)}>+</button>
            <button onClick={() => decrement(index)}>-</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default StateManagementKit;
