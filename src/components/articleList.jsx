import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";
import Popup from "./Popup";
import SearchBar from "./SearchBar";
import { Article } from "../stores/Article";

function formatString(str) {
  if (typeof str !== "string") return "";
  let cleanedString = str.replace('_', '');
  let formattedString = cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
  return formattedString;
}

function ArticleList() {
  const ArticleStore = useArticleStore();
  const [visibleDel, setVisibleDel] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [error, setError] = useState(null);
  const [keys, setKeys] = useState([]);
  
  useEffect(() => {
    if (ArticleStore.articles.length > 0) {
      setKeys(Article.keys());
    }
  }, [ArticleStore.articles]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleBtnDel = (id) => {
    setSelectedId(id);

    setVisibleDel(true);
  };

  const handleBtnEdit = (id) => {
    setSelectedArticle(ArticleStore.getArticle(id));
    setSelectedId(id);
    setVisibleEdit(true);
  };
  const handleBtnDetails = (id) => {
    setSelectedArticle(ArticleStore.getArticle(id))

    setSelectedId(id);
    setVisibleDetails(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUpdated = Object.fromEntries(new FormData(e.target));
    console.log(dataUpdated);
    const result = ArticleStore.updateArticle({selectedId, ...dataUpdated});
    result.success ? closePopupEdit() : setError(result.message);
    }

  const handleDelete = (e) =>{
    const result = ArticleStore.deleteArticle(selectedId);
    result.success ? closePopupDel() : setError(result.message);
  }



  const closePopupDel = () => {
    setVisibleDel(false);
  };
  
  const closePopupEdit = () => {
    setVisibleEdit(false);
  };

  const closePopupDetails = () => {
    setVisibleDetails(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedArticle({
      ...selectedArticle,
      [name]: value,
    });
  };
  const handleSearchChange = (value) => {
    setSearchValue(value);
};
const filteredArticles = ArticleStore.articles.filter((article) => {
  return keys.some((key) => article[key].toString().toLowerCase().includes(searchValue.toLowerCase()));
});

  return (
    <>
    <li className="flex justify-center md:justify-normal"><SearchBar onChange={handleSearchChange}></SearchBar></li>
      <li className="hidden md:block">
      <ul className={`grid grid-flow-col auto-cols-[1fr] bg-indigo-500 text-white p-2 rounded-3xl`}>
          
          {keys.map((key) => (
            <li className="text-center" key={key}>{formatString(key)}</li>
          )) 
          }
          <li className="text-center">Actions</li>
        </ul>
      </li>
      {!searchValue ? ArticleStore.articles.map((article) => (
        <LigneArticle
          key={article.id}
          keys={keys}
          data={article}
          handleBtnDel={() => handleBtnDel(article.id)}
          handleBtnEdit={() => handleBtnEdit(article.id)}
          handleBtnDetails={() => handleBtnDetails(article.id)}
        />
      )) :
      filteredArticles.map((article) => (
      <LigneArticle
          key={article.id}
          data={article}
          handleBtnDel={() => handleBtnDel(article.id)}
          handleBtnEdit={() => handleBtnEdit(article.id)}
          handleBtnDetails={() => handleBtnDetails(article.id)}
        /> ))
      }
      {visibleDel && (
        <Popup
        action="Supprimer"
          onCancel={closePopupDel}
          onConfirm={() => {
            handleDelete();
            
          }}
        >
          <div className="flex flex-col justify-center"><h3>Supprimer l'article {selectedId}</h3>
            <p>Voulez-vous supprimer l'article {selectedId} ?</p></div>
            {error ? (<p className="text-red-600 et col-span-2">{error}</p>) : (<p></p>)}

        </Popup>
      )}
      {visibleEdit && (
        <Popup
          action="Enregistrer"
          onCancel={closePopupEdit}
          zIndex={20}
          onConfirm={() => {
            handleSubmit();
          }}
        >
          <h3>{`Modifier l'article ${selectedId}`}</h3>
          <ul className="flex flex-col gap-2">
            {Object.keys(selectedArticle).filter(key => key !== '_articleType').map((key) => (
              <li key={key} className="grid grid-cols-2 gap-4">
                <label className="text-right" htmlFor={key}>{formatString(key)}:</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={selectedArticle[key]}
                  onChange={handleInputChange}
                />
              </li>
            ))}
          </ul>
          {error ? (<p className="text-red-600 et col-span-2">{error}</p>) : (<p></p>)}

        </Popup>
      )}
      {visibleDetails && (
        <Popup onCancel={closePopupDetails}
        onConfirm={() => handleBtnEdit(selectedId)}
        action={"Modifier"}>
          <h3>{`Détails de l'article ${selectedId}`}</h3>
          <ul>
            {Object.keys(selectedArticle).map((key) => (
              <li key={key} className="grid grid-cols-2 gap-4">
                <div className="text-right"><strong>{formatString(key)} :</strong></div>
                <div>{selectedArticle[key]}</div>
              </li>
            ))}
          </ul>
        </Popup>
      )}
    </>
  );
}

export default observer(ArticleList);
