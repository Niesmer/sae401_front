import React from "react";
import ArticleList from "../components/ArticleList";
function PageAdmin(props) {
  return (
    <div>
      Admin article
      <ul className="table-auto">
        <ArticleList></ArticleList>
      </ul>

    </div>
  );
}

export default PageAdmin;
