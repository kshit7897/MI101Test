import React, { useState } from "react";

function MovieInput({ inputData }) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Movie Name"
        />
        <button
          onClick={() => {
            inputData(text);
          }}
        >
          Add Movie
        </button>
        <input
          onChange={(e) => {
            setRate(e.target.value);
          }}
          type="text"
          placeholder="Rating"
        />
        <button
          onClick={() => {
            inputData(rate);
          }}
        >
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieInput;
