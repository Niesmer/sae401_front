import React from "react";

function LigneArticle({ data = {}, keys = null, handleBtnDel = () => {}, handleBtnEdit = () => {}, handleBtnDetails = ()=>{}}) {
  if (!keys) {
    keys = Object.keys(data);
    console.log(keys);
  }
  return (
    <><li><ul className={`grid grid-cols-${keys.length}`}>
      {keys.map((key) => {
        return data[key] ? (
          
            <li key={key}>
            {key}: {data[key]}{" "}
          </li>
          
          
        ) : null;
      })}
      <li>
        <button className="btn" onClick={handleBtnDel}>Supprimer</button>
      <button className="btn" onClick={handleBtnEdit}>Modifier</button>
      <button className="btn" onClick={handleBtnDetails}>Détails</button>
      </li></ul></li>
      
    </>
  );
}

export default LigneArticle;
