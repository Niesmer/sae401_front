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
    <div className="flex flex-col gap-4">
      <button className="btn rounded-full w-full md:max-w-72 sticky top-4 left-4" onClick={()=>handleBtnAdd()}>Ajouter un article</button>
      <ul className="grid grid-flow-row gap-3 border rounded-3xl bg-indigo-50 p-2">
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
