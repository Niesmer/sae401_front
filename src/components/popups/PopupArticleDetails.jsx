import React from "react";
import Popup from "../Popup";

function PopupArticleDetails({ loading,article, onCancel, onConfirm,error }) {
  console.log(onConfirm);
  return (
    <Popup loading={loading} onCancel={onCancel} onConfirm={onConfirm} action="Modifier">
      <h3>{`Détails de l'article ${article.id}`}</h3>
      <ul>
        {Object.keys(article).map((key) => (
          <li
            key={key}
            className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4"
          >
            <div className="md:text-right">
              <strong>{key.replace("_", "")} :</strong>
            </div>
            <div>{article[key]}</div>
          </li>
        ))}
      </ul>
      {error && <p className="text-red-500 bg-red-300 p-4 rounded-md">{error}</p>}
    </Popup>
  );
}

export default PopupArticleDetails;
