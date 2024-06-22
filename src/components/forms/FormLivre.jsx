import { observer } from "mobx-react";

function FormLivre({
  loading,
  livre,
  onCancel = () => {},
  handleSubmit = () => {},
}) {
  return (
    <>
      <h2>
        {livre.id ? `Modifier le livre ${livre.id}` : "Ajouter un Livre"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={livre?.id} />
        <input type="hidden" name="article_type" value="livre" />
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
 </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
         
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
 </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
         
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
 </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
         
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
 </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
         
        <label
          className="text-left md:text-right before:content-['*'] before:text-red-500"
          htmlFor="ISBN"
        >
          ISBN :
        </label>
        <input
          type="text"
          className=""
          pattern="[0-9]{10,13}"
          min="0"
          id="ISBN"
          title="Veuillez entrer un nombre positif (entre 10 et 13 caractères)."
          required
          name="ISBN"
          defaultValue={livre?.ISBN}
        />
  </li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
         
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
</li>
          <li className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
           
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

export default observer(FormLivre);
