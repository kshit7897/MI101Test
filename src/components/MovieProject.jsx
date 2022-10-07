import React, { useState } from "react";
import MovieInput from "./MovieInput";

const MovieProject = () => {
  const [data, setData] = useState([]);
  const inputData = (input) => {
    setData([...data, input]);
    console.log("input", input);
  };
  return (
    <>
      <div className="Input-1">
        <MovieInput inputData={inputData} />
      </div>
      <div className="output">
        {data.map((elements) => {
          return (
            <div className="output1">
              <h2>{elements}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieProject;
