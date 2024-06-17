import { useArticleStore } from "../stores";
import React, { useState } from "react";
import ArticleList from "../components/ArticleList";

import Popup from "../components/Popup";
function PageAdmin(props) {
  
  return (
    <div className="flex flex-col gap-4">
      
      <ul className="grid grid-flow-row md:gap-3 border rounded-3xl bg-indigo-50 p-2">
        <ArticleList></ArticleList>
      </ul>
      
      
    </div>
  );
}

export default PageAdmin;
