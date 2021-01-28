import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./TopHeadlines.module.css";

function TopHeadlines() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [topHeadlines, setTopHeadlines] = useState([]);
  //methods
  const fetchItems = () => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: { apiKey: "f2a6ecdbdd0048f8bb6a2d988489bc67", country: "us" },
      })
      .then((res) => {
        console.log(res.data.articles);
        const data = res.data.articles;
        setTopHeadlines(data);
      });
  };

  let article = null;

  if (topHeadlines.length > 0) {
    article = (
      <div>
        {topHeadlines.map((art) => {
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
      <h1>Top News</h1>
      {article}
    </div>
  );
}

export default TopHeadlines;
