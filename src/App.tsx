import { version } from "react";

import "./App.css";
import MemoizationComponent from "./Compoents/MemoizationComponent";
// import { LiftingState } from "./Compoents/LiftingState";
// import RefComponent from "./Compoents/RefComponent";
// import EventPropagation from "./Compoents/EventPropagation";
// import StateManagementKit from "./Compoents/StateManagementKit";
// import data from "./assets/data.json";
// import NetflixSeries from "./Compoents/NetflixSeries";
// import GettingPropsWithJSX from "./Compoents/GettingPropsWithJSX";

// const dataSendToNetflixSeries = data;

function App() {
  return (
    <>
      <div>
        <h1>Hello Akash! {version}</h1>
        {/* <NetflixSeries dataSendToNetflixSeries={dataSendToNetflixSeries} /> */}
        {/* <GettingPropsWithJSX
          name={"Akash Meena"}
          age={28}
          city={"Jaipur, Rajasthan, India"}
          message={
            <h1>
              This is a child component from parent component from message prop
            </h1>
          }
        >
          <h1>This is a child component</h1>
          <p>Where I'm getting props from parent component</p>
        </GettingPropsWithJSX> */}
        {/* <EventPropagation /> */}
        {/* <StateManagementKit /> */}
        {/* <LiftingState /> */}
        {/* <RefComponent /> */}
        <MemoizationComponent />
      </div>
    </>
  );
}

export default App;
