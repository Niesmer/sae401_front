import React from "react";

function LigneArticle({ data = {}, keys = null, handleBtn = () => {}}) {
  if (!keys) {
    keys = Object.keys(data);
  }
  return (
    <>
      {keys.map((key) => {
        return data[key] ? (
          <ul>
            <li key={key}>
            {key}: {data[key]}{" "}
          </li>
          </ul>
          
        ) : null;
      })}
      <button onClick={handleBtn}>Supprimer</button>
    </>
  );
}

export default LigneArticle;
