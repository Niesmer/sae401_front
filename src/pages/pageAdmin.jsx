import React from "react";
import ArticleList from "../components/ArticleList";
function PageAdmin(props) {
  return (
    <div>
      Admin article
      <table className="table-auto">
        <ArticleList></ArticleList>
      </table>
    </div>
  );
}

export default PageAdmin;
