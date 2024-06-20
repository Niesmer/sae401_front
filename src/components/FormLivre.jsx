import { useEffect, useState } from 'react';
import { useArticleStore } from "../stores";
import { useRef } from 'react';
import { observer } from "mobx-react";


function FormLivre({ idArticle = 0, onCancel }) {
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
        const updatedData = { ...formData, article_type: 'livre' };
        idArticle!==0 ?
            ArticleStore.updateArticle({...updatedData,id:idArticle})
            :
            ArticleStore.addArticle(updatedData)

    }



    return (
        <form onSubmit={handleSubmit}>
            <ul className="flex flex-col gap-2">
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="titre">titre : </label>
                    <input type="text" className="" id="titre" name="titre" defaultValue={data ? data._titre : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label class="text-left md:text-right" htmlFor="prix">prix : </label>
                    <input type="number" className="" id="prix" name="prix" defaultValue={data ? data._prix : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label class="text-left md:text-right" htmlFor="disponibilite">disponibilite : </label>
                    <input type="number" className="" id="disponibilite" name="disponibilite" defaultValue={data ? data._disponibilite : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="image">image : </label>
                    <input type="text" className="" id="image" name="image" defaultValue={data ? data._image : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="auteur">auteur:</label>
                    <input type="text" className="" id="auteur" name="auteur" defaultValue={data ? data._auteur : ``} />
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="ISBN">ISBN:</label>
                    <input type="number" className="" id="ISBN" name="ISBN" defaultValue={data ? data._ISBN : ``}/>
                </li>
                <li className=" grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4">
                    <label className="text-left md:text-right" htmlFor="nbPages">nbPages:</label>
                    <input type="number" className="" id="nbPages" name="nbPages" defaultValue={data ? data._nbPages : ``} />
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

export default observer(FormLivre);