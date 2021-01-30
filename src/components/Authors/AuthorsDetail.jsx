import React, { useState, useEffect } from "react";
import axios from "axios";

function AuthorsDetail({ match }) {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  console.log(match);
  const fetchItems = () => {
    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=f2a6ecdbdd0048f8bb6a2d988489bc67"
      )
      .then((res) => {
        const response = res.data.sources;
        console.log(response);
        const singleAuthor = response.filter(
          (item) => item.id === match.params.id
        );
        // console.log(
        //   "🚀 ~ file: AuthorsDetail.jsx ~ line 20 ~ .then ~ singleAuthor",
        //   singleAuthor
        // );
        setDetail(singleAuthor);
      });
  };

  let dettagli = null;

  if (detail.length > 0) {
    dettagli = (
      <div>
        {detail.map((det) => {
          return (
            <div key={det.id}>
              <h3>Name: {det.name}</h3>
              <h3>Country: {det.country}</h3>
              <h3>Language: {det.language}</h3>
              <h3>Category: {det.category}</h3>
              <p>{det.description}</p>
              <a href={det.url}>{det.url}</a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Item</h1>
      {dettagli}
    </div>
  );
}

export default AuthorsDetail;
