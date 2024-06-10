import { observer } from "mobx-react";
import React from "react";
import { useArticleStore } from "../stores";
import LigneArticle from "./LigneArticle";

function ArticleList() {
  let ArticleStore = useArticleStore();

  let handleBtn = (id) => {
    ArticleStore.deleteArticle(id);
  }
  return (
    <tbody>
      {ArticleStore.articles.map((article) => (
        <LigneArticle key={article.id} data={article} handleBtn={handleBtn}></LigneArticle>
      ))}
    </tbody>
  );
}

export default observer(ArticleList);
