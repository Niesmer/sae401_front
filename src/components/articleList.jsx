import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";
import Popup from "./Popup";
import PopupInfos from "./PopupInfos";

function formatString(str) {
  let cleanedString = str.replace('_', '');
  let formattedString = cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
  return formattedString;
}

function ArticleList() {
  const ArticleStore = useArticleStore();
  const [visibleDel, setVisibleDel] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [keys, setKeys] = useState([]);
  
  useEffect(() => {
    if (ArticleStore.articles.length > 0) {
      const firstArticle = ArticleStore.articles[0];
      setKeys(Object.keys(firstArticle));
    }
  }, [ArticleStore.articles]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleBtnDel = (id) => {
    setSelectedId(id);

    setVisibleDel(true);
  };

  const handleBtnEdit = (id) => {
    
    setSelectedId(id);
    setVisibleEdit(true);
  };
  const handleBtnDetails = (id) => {
    setSelectedId(id);
    setVisibleDetails(true);
  };



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

  return (
    <>
      <li>
      <ul className={`grid grid-flow-col auto-cols-[1fr]`}>
          {keys.map((key) => (
            <li className="text-center" key={key}>{formatString(key)}</li>
          ))}
          <li className="text-center">Actions</li>
        </ul>
      </li>
      {ArticleStore.articles.map((article) => (
        <LigneArticle
          key={article.id}
          data={article}
          handleBtnDel={() => handleBtnDel(article.id)}
          handleBtnEdit={() => handleBtnEdit(article.id)}
          handleBtnDetails={() => handleBtnDetails(article.id)}
        />
      ))}
      {visibleDel && (
        <Popup
        action="Supprimer"
          onCancel={closePopupDel}
          onConfirm={() => {
            ArticleStore.deleteArticle(selectedId);
            closePopupDel();
          }}
        >
          <div className="flex flex-col justify-center"><h3>Supprimer l'article {selectedId}</h3>
            <p>Voulez-vous supprimer l'article {selectedId} ?</p></div>
          
        </Popup>
      )}
      {visibleEdit && (
        <Popup
          action="Enregistrer"
          onCancel={closePopupEdit}
          onConfirm={() => {
            ArticleStore.updateArticle();
            closePopupEdit();
          }}
        >
          <h3>{`Modifier l'article ${selectedId}`}</h3>
          <ul className="flex flex-col gap-2">
            {Object.keys(ArticleStore.getArticle(selectedId)).filter(key => key !== '_articleType').map((key) => (
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
        </Popup>
      )}
      {visibleDetails && (
        <PopupInfos onClose={closePopupDetails}>
          <h3>{`Détails de l'article ${selectedArticle.id}`}</h3>
          <ul>
            {Object.keys(selectedArticle).map((key) => (
              <li key={key} className="grid grid-cols-2 gap-4">
                <div className="text-right"><strong>{formatString(key)} :</strong></div>
                <div>{selectedArticle[key]}</div>
              </li>
            ))}
          </ul>
          <button className="btn w-full rounded-full" onClick={()=> handleBtnEdit(selectedArticle)}>Modifier</button>
        </PopupInfos>
      )}
    </>
  );
}

export default observer(ArticleList);
