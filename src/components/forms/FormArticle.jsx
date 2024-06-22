import { observer } from "mobx-react";

function FormArticle({
  loading,
  article,
  onCancel = () => {},
  handleSubmit = () => {},
}) {
  return (
    <>
      <h2>
        {article.id ? `Modifier l'article ${article.id}` : "Ajouter un Article"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={article?.id} />
        <input type="hidden" name="article_type" value="article" />
        <ul className="flex flex-col gap-2">
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label
              className="text-left md:text-right before:content-['*'] before:text-red-500"
              htmlFor="titre"
            >
              Titre :
            </label>
            <input
              type="text"
              className=""
              id="titre"
              name="titre"

              required
              defaultValue={article?.titre}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label
              className="text-left md:text-right before:content-['*'] before:text-red-500"
              htmlFor="prix"
            >
              Prix :
            </label>
            <input
              type="number"
              className=""
              id="prix"
              min="0"
              name="prix"
              step={0.01}

              required
              defaultValue={article?.prix}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label
              className="text-left md:text-right before:content-['*'] before:text-red-500"
              htmlFor="disponibilite"
            >
              Disponibilite :
            </label>
            <input
              type="number"
              className=""
              id="disponibilite"
              min="0"
              required
              name="disponibilite"
              defaultValue={article?.disponibilite}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <label className="text-left md:text-right" htmlFor="image">
              Image :
            </label>
            <input
              type="text"
              className=""
              id="image"
              name="image"
              defaultValue={article?.image}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
            <button
              className="btn w-full rounded-full"
              title="confirm"
              type="submit"
            >
              {loading ? "En cours..." : "Enregistrer"}
            </button>
            <button
              className="btn w-full rounded-full bg-white border-gray-200 text-black border"
              title="cancel"
              type="button"
              onClick={onCancel}
            >
              Annuler
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default observer(FormArticle);
