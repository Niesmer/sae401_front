import { observer } from "mobx-react";
import React, { useState } from "react";
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
  const keys = ArticleStore.articles[0].map((key) => {
    return formatString(key);
  });
  const [selectedId, setSelectedId] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleBtnDel = (id) => {
    setSelectedId(id);
    setVisibleDel(true);
  };

  const handleBtnEdit = (article) => {
    setSelectedArticle(article);
    setSelectedId(article.id);
    setVisibleEdit(true);
  };
  const handleBtnDetails = (article) => {
    setSelectedArticle(article);
    setSelectedId(article.id);
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
        <ul className={`grid grid-cols-${keys.length}`}>
          {keys.map((key) => {
            <li>`${formatString(key)}`</li>
          })}
        </ul>
      </li>
      {ArticleStore.articles.map((article) => (
        <LigneArticle
          key={article.id}
          data={article}
          handleBtnDel={() => handleBtnDel(article.id)}
          handleBtnEdit={() => handleBtnEdit(article)}
          handleBtnDetails={() => handleBtnDetails(article)}
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
          <p>Voulez-vous supprimer l'article {selectedId} ?</p>
        </Popup>
      )}
      {visibleEdit && (
        <Popup
          action="Enregistrer"
          onCancel={closePopupEdit}
          onConfirm={() => {
            ArticleStore.editArticle(selectedArticle);
            closePopupEdit();
          }}
        >
          <ul>
            {Object.keys(selectedArticle).filter(key => key !== '_articleType').map((key) => (
              <li key={key}>
                <label htmlFor={key}>{formatString(key)}:</label>
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
          <h3>Article Details</h3>
          <ul>
            {Object.keys(selectedArticle).map((key) => (
              <li key={key}>
                <div><strong>{formatString(key)}:</strong></div>
                <div>{selectedArticle[key]}</div>
              </li>
            ))}
          </ul>
          <button className="btn" onClick={()=> handleBtnEdit(selectedArticle)}>Modifier</button>
        </PopupInfos>
      )}
    </>
  );
}

export default observer(ArticleList);
