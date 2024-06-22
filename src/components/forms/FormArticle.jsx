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
              titre :
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
              prix :
            </label>
            <input
              type="number"
              className=""
              id="prix"
              min="0"
              name="prix"
              required
              defaultValue={article?.prix}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label
              className="text-left md:text-right before:content-['*'] before:text-red-500"
              htmlFor="disponibilite"
            >
              disponibilite :
            </label>
            <input
              type="number"
              className=""
              id="disponibilite"
              min="0"
              required
              pattern="{0,9}"
              name="disponibilite"
              defaultValue={article?.disponibilite}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <label className="text-left md:text-right" htmlFor="image">
              image :
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

export default FormArticle;
