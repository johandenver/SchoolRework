import React from "react";

const name = "JohnnyUtah";
const nameLength = name.length;
const thoughts = "that React is cool!";

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name} !!</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think {thoughts}</h2>
          <h3>My name backwards is {name.split("").reverse()}</h3>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
