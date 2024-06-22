import React from "react";
import Popup from "../Popup";
import FormFactory from "../FormFactory";

function PopupArticleEdit({ loading, article, onCancel, onSubmit, error }) {
  return (
    <Popup buttons={false}>
      <FormFactory
        loading={loading}
        onCancel={onCancel}
        handleSubmit={onSubmit}
        article={article}
      ></FormFactory>
      {error && <p className="text-red-500 bg-red-300 p-4 rounded-md">{error}</p>}
    </Popup>
  );
}

export default PopupArticleEdit;
