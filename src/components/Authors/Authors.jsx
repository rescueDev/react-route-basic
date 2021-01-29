import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorsDetail from "./AuthorsDetail";

function Authors() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [authors, setAuthors] = useState([]);

  const fetchItems = () => {
    axios
      .get(
        "https://newsapi.org/v2/sources?apiKey=f2a6ecdbdd0048f8bb6a2d988489bc67"
      )
      .then((res) => {
        setAuthors(res.data.sources);
        console.log(authors);
      });
  };

  var autore = null;

  console.log(authors);

  if (authors.length > 0) {
    autore = (
      <div>
        {authors.map((auth) => {
          return (
            <div key={auth.id}>
              <Link to={`/authors/${auth.id}`}>
                <h3>{auth.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Authors</h1>
      {autore}
      <AuthorsDetail data={authors} />
    </div>
  );
}

export default Authors;
