import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function Popup({action, onConfirm={}, onCancel ={}, children}) {
  
  return (
    
    <div>
      {children}
        <button className="btn" onClick={onConfirm}>{action}</button>
        <button className="btn" onClick={onCancel}>Annuler</button>
    </div>

    

  );
}

export default observer(Popup);
