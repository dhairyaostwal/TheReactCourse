import React from "react";
import Heading from "./heading";
import List from "./list";
import * as pi from "./math";
// import * as pi from "./react"

const a = 20,
  b = 30;

function App() {
  return (
    <div>
      <Heading />
      <List />
      <p>pi = {pi.default}</p>
      <p>2*pi = {pi.doublePi()}</p>
      <p>3*pi = {pi.triplePi()}</p>
      <p>
        add({a}, {b}) = {pi.multiply(a, b)}
      </p>
      <hr></hr>
      <div>
        a = {a}, b = {b}
      </div>
    </div>
  );
}

export default App;
