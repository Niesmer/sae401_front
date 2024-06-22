import React from "react";
import Popup from "../Popup";
import FormFactory from "../FormFactory";

function PopupArticleAdd({ error, article, loading, onCancel, onSubmit }) {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Popup buttons={false}>
      <div className="flex border-b sticky -top-6 bg-white ">
        <button
          onClick={() => handleTabClick(1)}
          className={`py-2 px-4 ${
            activeTab === 1
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
        >
          Livre
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`py-2 px-4 ${
            activeTab === 2
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
        >
          Musique
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`py-2 px-4 ${
            activeTab === 3
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
        >
          Autre
        </button>
      </div>
      <div className="p-4">
        <FormFactory
          handleSubmit={onSubmit}
          onCancel={onCancel}
          article={{
            article_type:
              activeTab === 1
                ? "livre"
                : activeTab === 2
                ? "musique"
                : "article",
          }}
        />
      </div>
      {error && (
        <p className="text-red-500 bg-red-300 p-4 rounded-md">{error}</p>
      )}
    </Popup>
  );
}

export default PopupArticleAdd;
