import React from "react";
import ReactDOM from "react-dom";

const randomImg = "https://picsum.photos/300";
const URL1 = "https://static.toiimg.com/thumb/63799510.cms";

const customStyle = {
  color: "green",
  fontSize: "2rem"
};

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <ul>
      <img
        className="imgdim"
        alt="grayscale"
        src={URL1 + "?width=1200&height=1200"}
      />
      <img alt="random" className="imgdim" src={randomImg + "?/grayscale"} />

      <li>Noodles</li>
      <li className="heading">Hey Test...</li>
    </ul>
    <p style={customStyle}>Hello World!</p>
  </div>,
  document.getElementById("root")
);
