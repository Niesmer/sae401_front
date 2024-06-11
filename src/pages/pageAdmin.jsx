import ArticleList from "../components/ArticleList";
import { useArticleStore } from "../stores";
import React, { useState } from "react";

import Popup from "../components/Popup";
function PageAdmin(props) {
  const ArticleStore = useArticleStore();
  const [visibleAdd, setVisibleAdd] = useState(false);
  const handleBtnAdd = () => {
    setVisibleAdd(true);
  };

  const closePopupAdd = () =>{
    setVisibleAdd(false);
  }
  const handleInputChange = (e) => {
    
    
  };
  return (
    <div>
      Admin article
      <button className="btn" onClick={()=>handleBtnAdd()}>Ajouter un article</button>
      <ul >
        <ArticleList></ArticleList>
      </ul>
      {visibleAdd && (
        <Popup
        action="Ajouter"
          onCancel={closePopupAdd}
          onConfirm={() => {
            ArticleStore.addArticle();
            closePopupAdd();
          }}
        >
          <p></p>
        </Popup>
      )}
      
    </div>
  );
}

export default PageAdmin;
