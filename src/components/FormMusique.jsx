import { useEffect, useState } from 'react';
import { useArticleStore } from "../stores";
import { useRef } from 'react';
import { observer } from "mobx-react";


function FormMusique({ idArticle = 0, onCancel }) {
    const ArticleStore = useArticleStore();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (idArticle !== 0) {
            setData(ArticleStore.getArticle(idArticle));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target).entries());
        const updatedData = { ...formData, article_type: 'musique' };
        idArticle===0 ?
            ArticleStore.updateArticle({...updatedData,id:idArticle})
            :
            ArticleStore.addArticle(updatedData)

    }


    return (
        <form onSubmit={handleSubmit}>
            <ul className="flex flex-col gap-2">
                <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="titre">titre : </label>
                    <input type="text" className="" id="titre" name="titre" defaultValue={data ? data.titre : ``} />
                </li>
                <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="prix">prix : </label>
                    <input type="number" className="" id="prix" name="prix" defaultValue={data ? data.prix : ``} />
                </li>
                <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="disponibilite">disponibilite : </label>
                    <input type="number" className="" id="disponibilite" name="disponibilite" defaultValue={data ? data.disponibilite : ``} />
                </li>
                <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="image">image : </label>
                    <input type="text" className="" id="image" name="image" defaultValue={data ? data.image : ``} />
                </li>
                <li className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="artiste">artiste : </label>
                    <input type="text" className="" id="artiste" name="artiste" defaultValue={data ? data.artiste : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="dateDeParution">dateDeParution:</label>
                    <input type="date" className="" id="dateDeParution" name="dateDeParution" defaultValue={data ? data.dateDeParution : ``} />
                </li>
                <li className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4">
                    <button className="btn w-full rounded-full" title="confirm" type="submit">Enregistrer</button>
                    <button className="btn w-full rounded-full bg-white border-gray-200 text-black border" title="cancel" onClick={onCancel}>Annuler</button>
                </li>
            </ul>
        </form>
    );
}

export default observer(FormMusique);
