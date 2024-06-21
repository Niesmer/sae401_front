import React from "react";
import img404 from "../assets/404.webp";
import {Link } from "react-router-dom";

function Page404(props) {
  return (
    <main className="grid gap-2 mx-auto content-center justify-items-center  max-w-7xl min-h-screen">
        <img width="1200" height="628" src={img404} alt="404" className=" rounded-xl" />
        <div className="pb-5 grid content-center align-middle justify-items-center">
            <h1 className="my-4">Égaré sur les autoroutes de l’information</h1>
            <p>À l’heure où nous écrivons ces lignes, nous ne savons pas ce qu’il s’est précisément passé. Nous connaissons le résultat : vous êtes arrivé ici, dans cette rue sans issue de l’Internet. Vous vous êtes égaré sur les chemins pourtant tout tracés des autoroutes de l’information. Vous souhaitez désormais retrouver un environnement plus utile : la page d’accueil semble une bonne solution pour repartir de l’avant.</p>
            <Link to="/admin" className="btn my-4 block">Prendre un nouveau départ</Link>

        </div>
    </main >
);
}

export default Page404;
