import React from "react";
import { useArticleStore } from "../stores";

function PageTest(props) {
  let articleStore = useArticleStore();
  console.log(articleStore);
  console.log(articleStore.getArticle(55677821));
  console.log(
    articleStore.updateArticle({
      id: 115978233158,
      title: "test",
      continent: "Europe",
    })
  );
  return <div></div>;
}

export default PageTest;
