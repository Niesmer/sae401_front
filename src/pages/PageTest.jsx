import React, { useState } from "react";
import { useArticleStore } from "../stores";
import Popup from "../components/Popup";
import { useRef } from "react";

function PageTest() {
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);
  const ArticleStore = useArticleStore();
  
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    let article_type = "livre";
    data.article_type = article_type;
    let response = await ArticleStore.addArticle(data);
    setLoading(false);
  };
  
  return (
    <Popup buttons={false}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titre" placeholder="Titre" />
        <input type="text" name="auteur" placeholder="Auteur" />
        <input type="number" name="prix" placeholder="Prix" />
        <input type="number" name="disponibilite" placeholder="Disponibilité" />
        <input type="text" name="image" placeholder="Image" />
        <input type="text" name="ISBN" placeholder="ISBN" />
        <input type="number" name="nbPages" placeholder="Nombre de pages" />
        <input
          type="date"
          name="dateDeParution"
        />
        <div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
          <button className="btn w-full rounded-full" type="submit">
            {loading ? "Loading..." : "Add"}
          </button>
          <button className="btn w-full rounded-full">Cancel</button>
        </div>
      </form>
    </Popup>
  );
}

export default PageTest;
