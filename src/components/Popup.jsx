import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function Popup({id, onConfirm={}, onCancel, children}) {
  
  return (
    
    <div>
      {children}
        <button onClick={onConfirm}>Supprimer</button>
        <button onClick={onCancel}>Annuler</button>
    </div>

    

  );
}

export default observer(Popup);
