import React, { useState } from "react";
import "./InputRender.css";

const InputRender = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    rating: "",
  });

  const handleMovieName = (e) => {
    setName(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(e);
    let data = {
      name: name,
      url: url,
      rating: rating,
    };
    setFormData(data);
  };

  return (
    <div className="main-div">
      <h1>Apna Movie Channel</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          onChange={handleMovieName}
          type="text"
          placeholder="movie name"
        />
        <input onChange={handleUrl} type="url" placeholder="Image Link" />
        <input onChange={handleRating} type="text" placeholder="rating" />
        {/* <input onClick={handleSubmitForm} type="button" value="Submit" /> */}
        <button>Submit</button>
      </form>

      <h1 className="head">{formData.name}</h1>
      <img src={formData.url} alt="" />
      <h1 className="rate">{formData.rating}</h1>
    </div>
  );
};

export default InputRender;
