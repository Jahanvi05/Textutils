import React, { useState } from "react";
import PropTypes from "prop-types";

export function Textforms(props) {
  const [text, setText] = useState("");

  const inptext = (e) => {
    setText(e.target.value);
  };

  const upper = () => {
    console.log("Upper case");
    const newUpText = text.toUpperCase();
    setText(newUpText);
    props.showAlert("Converted to Upper case", "success");
  };

  const lower = () => {
    console.log("Lower case");
    const newLwText = text.toLowerCase();
    setText(newLwText);
    props.showAlert("Converted to Lower case", "success");
  };

  // Uncomment and implement the 'Space' button if needed
  const space = () => {
    // console.log("Space case");
    // const newSpaceText = text.replace(/\s/g, '-');
    // setText(newSpaceText);
    const trimtxt = text.trim();
    // Split the string into an array of words.
    const words = trimtxt.split(" ");
    // Remove any words that are only whitespace.
    const remwords = words.filter((word) => word.trim() !== "");
    // Join the words back together with a single space between each word.
    setText(remwords.join(" "));
    props.showAlert("Removed the extra spaces", "success");
  };

  const capatalize = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    props.showAlert("Capatalized the string", "success");
  };

  const reverse = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Your string is reversed", "success");
  };

  const copy = () => {
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 my-4">
          <label
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: props.mode === "light" ? "dark" : "light",
            }}
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          >
            {props.texthead}
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#25282a",
              border:
                props.mode === "light" ? "1px solid grey" : "1px solid white",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="mybox"
            rows="6"
            value={text}
            onChange={inptext}
          ></textarea>
        </div>
      </div>
      <center>
        <div className="container my-4 mx-3">
          <button
            disabled={text.length === 0}
            style={{
              marginLeft: "100px",
              fontSize: "20px",
              position: "absolute",
              right: "55px",
            }}
            onClick={speak}
            id="toggle"
            type="button"
            class="btn btn-warning text-right"
          >
            Speak
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={upper}
            style={{ margin: "18px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Convert to Upper Case
          </button>
          {/* Add other buttons here */}
          <button
            disabled={text.length === 0}
            type="button"
            onClick={lower}
            style={{ margin: "20px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Convert to Lower Case
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={capatalize}
            style={{ margin: "20px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Capatilaize the text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={reverse}
            style={{ margin: "20px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Reverse the text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={space}
            style={{ margin: "20px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Remove extra spaces
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={copy}
            style={{ margin: "20px", fontSize: "22px" }}
            className="btn btn-primary"
          >
            Copy Text
          </button>
        </div>
      </center>
      <div className="container">
        <h2 style={{ color: props.mode === "light" ? "dark" : "light" }}>
          Your text summary
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h1>Preview</h1>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {" "}
          {text.length === 0 ? " Enter the text first !!!" : text}
        </p>
      </div>
    </>
  );
}

// Define the propTypes for the component
Textforms.propTypes = {
  texthead: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default Textforms;
