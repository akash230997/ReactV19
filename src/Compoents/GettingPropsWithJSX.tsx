import type { ReactNode } from "react";
import styles from "./GettingPropsWithJSX.module.css";
import EventClick from "./EventClick";
interface GettingPropsWithJSXProps {
  name: string;
  age: number;
  city: string;
  message: ReactNode;
  children: ReactNode;
}

const styleGettingPropsWithJSX = {
  border: "1px solid #000",
  backgroundColor: "#9B7EBD",
  padding: "10px",
  borderRadius: "5px",
  width: "fit-content",
  margin: "10px",
};

function GettingPropsWithJSX({
  name,
  age,
  city,
  message,
  children,
}: GettingPropsWithJSXProps) {
  const handleClick = () => {
    console.log("Event Clicked");
  };
  const handleHover = () => {
    alert("Event Hovered");
  };

  return (
    <div style={styleGettingPropsWithJSX}>
      <h2 className={styles.changeColorTOred}>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      {message}
      {children}
      <EventClick
        onClick={handleClick}
        onMouseEnter={handleHover}
        // handleGreet={handleGreet}
      />
    </div>
  );
}

export default GettingPropsWithJSX;
