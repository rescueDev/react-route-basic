import React, { useState, useEffect } from "react";

function AuthorsDetail({ data }) {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail(data);
  }, []);
  console.log(detail);

  /*   if (detail.length > 0) {
    dettagli = (
      <div>
        {detail.map((det) => {
          return (
            <div key={det.id}>
              <h3>{det.name}</h3>
              <h3>{det.country}</h3>
              <h3>{det.language}</h3>
              <h3>{det.url}</h3>
            </div>
          );
        })}
      </div>
    );
  } */

  return <div></div>;
}

export default AuthorsDetail;
