import React from "react";
//import "./styles.css";
import ReactDOM from "react-dom";

function MovieItem() {
  return (
    <div>
      <p>Title</p>
      <p>8.0</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
