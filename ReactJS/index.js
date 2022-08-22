//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

const firstName = "Aravinda";
const lastName = "S V";
const b = () => {
  return "hiiiiii";
};
ReactDOM.render(
  <div>
    <h1
      className="heading"
      contentEditable="true"
      spellCheck="false"
    >
      {b()} Favourite foods of {`${firstName} ${lastName}`}
    </h1>
    <ul>
      <li>Pizza</li>
      <li>Pulav</li>
      <li>Pasta</li>
    </ul>

    <h2 style={{color:"red"}}> This is heading2 </h2>
    <div>
      <img src="https://miro.medium.com/max/1200/1*Rvs7u_g6dnDTRF-FMY4vsA.png" />
      <img src="https://miro.medium.com/max/1200/1*Rvs7u_g6dnDTRF-FMY4vsA.png" />
      <img src="https://miro.medium.com/max/1200/1*Rvs7u_g6dnDTRF-FMY4vsA.png" />
    </div>
  </div>,
  document.getElementById("root")
);


/*
const name = "Aravinda";
const year = 2022;

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

*/
