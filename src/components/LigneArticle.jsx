import React from "react";

function LigneArticle({ data = {}, keys = null, handleBtn = () => {}}) {
  if (!keys) {
    keys = Object.keys(data);
  }
  return (
    <tr>
      {keys.map((key) => {
        return data[key] ? (
          <td key={key}>
            {key}: {data[key]}{" "}
          </td>
        ) : null;
      })}
      <button onClick={handleBtn}>Supprimer</button>
    </tr>
  );
}

export default LigneArticle;
