import { PropTypes, observer } from "mobx-react";
import Popup from "./Popup";
import FormArticle from "./FormArticle";
import FormLivre from "./FormLivre";
import FormMusique from "./FormMusique";


function FormFactory({ typeArticle, idArticle = 0, closePopup }) {
    
    return (
        <>
            {typeArticle === "article" && (
                
                    <FormArticle idArticle={idArticle} onCancel={closePopup}></FormArticle>
                
            )}

            {typeArticle === "livre" && (
                
                    <FormLivre idArticle={idArticle} onCancel={closePopup}></FormLivre>
                
            )}

            {typeArticle === "musique" && (
                
                    <FormMusique idArticle={idArticle} onCancel={closePopup}></FormMusique>
                
            )}
        </>
    );



}

export default observer(FormFactory);