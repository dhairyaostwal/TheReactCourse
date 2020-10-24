import React from "react";
import ReactDOM from "react-dom";

// const name = "Dhairya Ostwal";
// const d = new Date().getFullYear();

// ReactDOM.render(
//   <div>
//     <p>
//       Created by <span className="nameFormat">{name}</span>
//     </p>
//     <p>
//       &copy; <span style={{ color: "blue" }}>{d}</span>{" "}
//     </p>
//   </div>,
//   document.getElementById("root")
// );

const time = new Date().getHours();

var message, messageFormat;
if (time >= 12) {
  message = 'Good Afternoon!';
  messageFormat = { color: "green" };
}
else {
  message = 'Good Morning!';
  messageFormat = { color: "red" };
}

ReactDOM.render(
  <div>
    <p>Hours = {time}</p>
    <p style={messageFormat}>{message}</p>
  </div>,
  document.getElementById("root")
);