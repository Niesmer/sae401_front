function FormLivre({
  loading,
  livre,
  onCancel = () => {},
  handleSubmit = () => {},
}) {
  return (
    <>
      <h2>
        {livre.id ? `Modifier le livre ${livre.id}` : "Ajouter une Livre"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={livre?.id} />
        <input type="hidden" name="article_type" value="livre" />

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
          required
          name="titre"
          defaultValue={livre?.titre}
        />

        <label
          className="text-left md:text-right before:content-['*'] before:text-red-500"
          htmlFor="prix"
        >
          Prix :
        </label>
        <input
          type="number"
          className=""
          min="0"
          id="prix"
          step={0.01}
          required
          name="prix"
          defaultValue={livre?.prix}
        />

        <label
          className="text-left md:text-right before:content-['*'] before:text-red-500"
          htmlFor="disponibilite"
        >
          Disponibilité :
        </label>
        <input
          type="number"
          className=""
          id="disponibilite"
          min="0"
          required
          name="disponibilite"
          defaultValue={livre?.disponibilite}
        />

        <label className="text-left md:text-right" htmlFor="image">
          Image :
        </label>
        <input
          type="text"
          className=""
          id="image"
          name="image"
          defaultValue={livre?.image}
        />

        <label className="text-left md:text-right" htmlFor="auteur">
          Auteur :
        </label>
        <input
          type="text"
          className=""
          id="auteur"
          name="auteur"
          defaultValue={livre?.auteur}
        />

        <label
          className="text-left md:text-right before:content-['*'] before:text-red-500"
          htmlFor="ISBN"
        >
          ISBN :
        </label>
        <input
          type="number"
          className=""
          minLength="10"
          maxLength="13"
          id="ISBN"
          title="Veuillez entrer un nombre positif."
          required
          name="ISBN"
          defaultValue={livre?.ISBN}
        />

        <label
          className="text-left md:text-right before:content-['*'] before:text-red-500"
          htmlFor="nbPages"
        >
          Nombre de pages :
        </label>
        <input
          type="number"
          className=""
          min="0"
          id="nbPages"
          required
          name="nbPages"
          defaultValue={livre?.nbPages}
        />

        <label className="text-left md:text-right" htmlFor="dateDeParution">
          Date de parution :
        </label>
        <input
          type="date"
          className=""
          id="dateDeParution"
          name="dateDeParution"
          defaultValue={livre?.dateDeParution}
        />

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
      </form>
    </>
  );
}

export default FormLivre;
