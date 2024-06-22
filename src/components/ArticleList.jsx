import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";
import SearchBar from "./SearchBar";
import { Article } from "../stores/Article";

import PopupArticleFactory from "./PopupArticleFactory";

function ArticleList() {
  const ArticleStore = useArticleStore();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (ArticleStore.articles.length > 0) {
      setKeys(Article.keys());
    }
  }, [ArticleStore.articles]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleConfirm = async () => {
    setError(null);
    switch (selectedPopup) {
      case "details":
        setSelectedPopup("edit");
        break;
      case "delete":
        setLoading(true);
        try {
          await ArticleStore.deleteArticle(selectedArticle.id);
          setSelectedPopup(null);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
        break;
      default:
        setSelectedPopup(null);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ArticleStore.error = null;
    setLoading(true);
    const formData = Object.fromEntries(new FormData(e.target));
    selectedPopup === "add"
      ? await ArticleStore.addArticle(formData)
      : await ArticleStore.updateArticle(formData);
    if (ArticleStore.error) {
      setLoading(false);
      setError(ArticleStore.error);
    } else {
      setLoading(false);
      setSelectedPopup(null);
    }
  };

  const handleCancel = () => {
    setSelectedPopup(null);
    ArticleStore.error = null;
  };

  //const filteredArticles = ArticleStore.articles.filter((article) => {
  //  return keys.some((key) =>
  //    article[key].toString().toLowerCase().includes(searchValue.toLowerCase())
  //  );
  //});
  return (
    <>
      <li className="flex justify-center gap-2 flex-wrap w-full sticky z-[1] top-4 md:flex-nowrap md:justify-between ">
        <button
          className="btn rounded-full md:w-1/3 w-full md:max-w-72"
          onClick={() => setSelectedPopup("add")}
        >
          Ajouter un article
        </button>
        <SearchBar onChange={handleSearchChange}></SearchBar>
      </li>
      <li className="hidden md:block">
        <ul
          className={`grid grid-flow-col auto-cols-[1fr] bg-indigo-500 text-white p-2 rounded-3xl`}
        >
          {keys.map((key) => (
            <li className="text-center" key={key}>
              {key}
            </li>
          ))}
          <li className="text-center">Actions</li>
        </ul>
      </li>
      {ArticleStore.articles.map((article) => (
        <LigneArticle
          key={article.id}
          keys={keys}
          data={article}
          setPopupArticle={setSelectedArticle}
          setPopupType={setSelectedPopup}
        />
      ))}
      <PopupArticleFactory
        popupType={selectedPopup}
        article={selectedArticle}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onSubmit={handleSubmit}
        loading={loading}
        error={ArticleStore.error?.toString()}
      />
    </>
  );
}

export default observer(ArticleList);
