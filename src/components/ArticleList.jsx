import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";
import Popup from "./Popup";
import SearchBar from "./SearchBar";
import { Article } from "../stores/Article";
import { Livre } from "../stores/Livre";
import { Album } from "../stores/Album";
import FormFactory from "./FormFactory";


function ArticleList() {
  const ArticleStore = useArticleStore();
  const [visibleDel, setVisibleDel] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [error, setError] = useState(null);
  const [keys, setKeys] = useState([]);
  const [newArticle, setNewArticle] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  useEffect(() => {
    if (ArticleStore.articles.length > 0) {
      setKeys(Article.keys());
    }
  }, [ArticleStore.articles]);

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

  const handleDelete = (e) => {
    const result = ArticleStore.deleteArticle(selectedId);
    ArticleStore.error ? setError(result.message) : closePopupDel();
  }
  const closePopupDel = () => {
    setVisibleDel(false);
  };

  const closePopupEdit = () => {
    setVisibleEdit(false);
    setError('');
  };

  const closePopupDetails = () => {
    setVisibleDetails(false);
    setError('');
  };

  const handleBtnAdd = () => {
    setVisibleAdd(true);
  };

  const closePopupAdd = () => {
    setVisibleAdd(false);
    setNewArticle({});

  }
  const handleInputChangeAdd = (e) => {
    const { name, value } = e.target;

    setNewArticle({
      ...newArticle,
      [name]: value,

      ['article_type']: (activeTab === 1 ? 'livre' : activeTab === 2 ? 'album' : 'article'),
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
      <li className="flex justify-center gap-2 flex-wrap w-full sticky z-[1] top-4 md:flex-nowrap md:justify-between ">
        <button className="btn rounded-full md:w-1/3 w-full md:max-w-72" onClick={() => handleBtnAdd()}>Ajouter un article</button>
        <SearchBar onChange={handleSearchChange}></SearchBar>
      </li>
      <li className="hidden md:block">
        <ul className={`grid grid-flow-col auto-cols-[1fr] bg-indigo-500 text-white p-2 rounded-3xl`}>

          {keys.map((key) => (
            <li className="text-center" key={key}>{key}</li>
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
          />))
      }
      {visibleDel && (
        <Popup
          action="Supprimer"
          onCancel={closePopupDel}
          onConfirm={() => {
            handleDelete();

          }}>
          <div className="flex flex-col justify-center"><h3>Supprimer l'article {selectedId}</h3>
            <p>Voulez-vous supprimer l'article {selectedId} ?</p></div>
          {error ? (<p className="text-red-600 et col-span-2">{error}</p>) : (<p></p>)}

        </Popup>
      )}
      {visibleEdit && (
        <Popup>
          <FormFactory
            closePopup={closePopupEdit}
            idArticle={selectedId}

            typeArticle={selectedArticle.article_type}
          ></FormFactory>
        </Popup>

      )}
      {visibleDetails && (
        <Popup onCancel={closePopupDetails}
          onConfirm={() => handleBtnEdit(selectedId)}
          action="Modifier">
          <h3>{`Détails de l'article ${selectedId}`}</h3>
          <ul>
            {Object.keys(selectedArticle).map((key) => (
              <li key={key} className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                <div className="md:text-right"><strong>{key.replace('_','')} :</strong></div>
                <div>{selectedArticle[key]}</div>
              </li>
            ))}
          </ul>
        </Popup>
      )}
      {visibleAdd && (
        <Popup>
          <div className="flex border-b sticky -top-6 bg-white ">
            <button
              onClick={() => handleTabClick(1)}
              className={`py-2 px-4 ${activeTab === 1 ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-500"}`}
            >
              Livre
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={`py-2 px-4 ${activeTab === 2 ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-500"}`}
            >
              Musique
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={`py-2 px-4 ${activeTab === 3 ? "border-b-2 border-indigo-500 text-indigo-500" : "text-gray-500"}`}
            >
              Autre
            </button>
          </div>
          <div className="p-4">
            <FormFactory
              closePopup={closePopupAdd}
              typeArticle={activeTab === 1 ? "livre" : activeTab === 2 ? "musique" : "article"}>
            </FormFactory>

          </div>
          {error ? (<p className="text-red-600 et col-span-2">{error}</p>) : (<p></p>)}
        </Popup>
      )}
    </>
  );
}

export default observer(ArticleList);
