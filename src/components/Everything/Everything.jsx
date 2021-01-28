import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./Everything.module.css";

function Everything() {
  //input search
  const [inputText, setinputText] = useState("");
  const changeInput = (e) => {
    setinputText(e.target.value);
  };

  //get data from axios api call
  const fetchItems = () => {
    axios
      .get("https://newsapi.org/v2/everything", {
        params: {
          q: inputText,
          apiKey: "f2a6ecdbdd0048f8bb6a2d988489bc67",
        },
      })
      .then((res) => {
        const data = res.data.articles;
        console.log(data);
        setEverything(data);
      });
  };

  //on enter init fetchItems
  const searchNews = (e) => {
    if (e.key === "Enter") {
      fetchItems();
      setinputText("");
    }
  };

  const [everything, setEverything] = useState([]);

  let article = null;

  if (everything.length > 0) {
    article = (
      <div>
        {everything.map((art) => {
          return (
            <div className={classes.article}>
              <img className={classes.cover} src={art.urlToImage} alt="" />
              <h3>{art.title}</h3>
              <p>{art.description}</p>
              <a href={art.url}>Read More</a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Search News</h1>
      <input
        type="text"
        placeholder="Search"
        value={inputText}
        onChange={changeInput}
        onKeyPress={searchNews}
      />
      {article}
    </div>
  );
}

export default Everything;
