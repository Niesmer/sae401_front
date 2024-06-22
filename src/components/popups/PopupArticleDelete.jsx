import React from "react";
import Popup from "../Popup";

function PopupArticleDelete({loading, article, onCancel, onConfirm, error }) {
  return (
    <Popup loading={loading} action="Supprimer" onCancel={onCancel} onConfirm={onConfirm}>
      <div className="flex flex-col justify-center">
        <h3>Supprimer l'article {article.id}</h3>
        <p>Voulez-vous supprimer l'article {article.id} ?</p>
      </div>
      {error && <p className="text-red-500 bg-red-300 p-4 rounded-md">{error}</p>}
    </Popup>
  );
}

export default PopupArticleDelete;
