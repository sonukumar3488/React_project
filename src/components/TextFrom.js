// import { useState } from "react";
import React, { useState } from "react";


export default function TextFrom(props) {
  const [Text, TextSet] = useState("");
  
  const Touppercase = (() => {
    console.log("uppercase was clicked");
    let newtext = Text.toUpperCase();
    TextSet(newtext);
    
  })

  const Tolowercase = () => {
    console.log("Lowercase  was clicked");
    let newtext = Text.toLowerCase();
    TextSet(newtext);
  };

  const Remove = () => {
    // console.log("Lowercase  was clicked");
    let newtext = " ";
    TextSet(newtext);
  };

  const Removewhiteapace = (() => {
    let newtext = Text.trim();
    TextSet(newtext);
  })



  const Handleonchange = ((event) => {
    TextSet(event.target.value)
    console.log("handle change ")
  })

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-5">
          <textarea
            className="form-control"
            value={Text}
            onChange={Handleonchange}
            id="mybox"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
            }}
          ></textarea>
          <button className="btn btn-danger my-2" onClick={Touppercase}>
            Convert to Upper Case
          </button>
          <button className="btn btn-success my-2" onClick={Tolowercase}>
            Convert to Lower Case
          </button>
          <button className="btn btn-success my-2" onClick={Remove}>
            Remove
          </button>

          <button className="btn btn-success my-2" onClick={Removewhiteapace}>
            Remove white space
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>your text length is :{Text.length}</p>
        <p>your word is : {Text.split(" ").length}</p>

        <h1>Preview</h1>
        <p>{Text.length>0?Text:"Enter your text here "}</p>
      </div>
    </div>
  );
}
