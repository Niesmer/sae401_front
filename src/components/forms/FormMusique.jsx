function FormMusique({
  musique,
  loading = false,
  onCancel = () => {},
  handleSubmit = () => {},
}) {
  return (
    <>
      <h2>
        {musique.id
          ? `Modifier la musique ${musique.id}`
          : "Ajouter une Musique"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={musique?.id} />
        <input type="hidden" name="article_type" value="livre" />
        <ul className="flex flex-col gap-2">
          <li className="grid grid-rows-2  grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
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
              required
              name="titre"
              defaultValue={musique?.titre}
            />
          </li>
          <li className="grid grid-rows-2  grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
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
              required
              name="prix"
              defaultValue={musique?.prix}
            />
          </li>
          <li className="grid grid-rows-2  grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
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
              name="disponibilite"
              defaultValue={musique?.disponibilite}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label className="text-left md:text-right" htmlFor="image">
              image :
            </label>
            <input
              type="text"
              className=""
              id="image"
              name="image"
              defaultValue={musique?.image}
            />
          </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
            <label className="text-left md:text-right" htmlFor="artiste">
              artiste :
            </label>
            <input
              type="text"
              className=""
              id="artiste"
              name="artiste"
              defaultValue={musique?.artiste}
            />
          </li>
          <li className=" grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
            <label className="text-left md:text-right" htmlFor="dateDeParution">
              date de parution :
            </label>
            <input
              type="date"
              className=""
              id="dateDeParution"
              name="dateDeParution"
              defaultValue={musique?.dateDeParution}
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

export default FormMusique;
