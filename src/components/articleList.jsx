import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";
import Popup from "./Popup";


function ArticleList() {
  let ArticleStore = useArticleStore();

  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleBtn = (id) => {
    setSelectedId(id);
    setVisible(true);
  };

  const closePopup = () => {
    setVisible(false);
  };
  return (
    <>

      {ArticleStore.articles.map((article) => (
        <LigneArticle key={article.id} data={article} handleBtn={()=>handleBtn(article.id)}></LigneArticle>

      ))}
      {visible && (
        <Popup onCancel={closePopup} onConfirm={()=>{ArticleStore.deleteArticle(selectedId);
          closePopup();}} ><p>Voulez vous supprimer l'article {selectedId} </p></Popup>
      )}


    </>

  );
}

export default observer(ArticleList);
