import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function Popup({action, onConfirm={}, onCancel ={}, children}) {
  
  return (
    
    <div className="bg-white border absolute z-20 gap-4 rounded-lg p-6 flex flex-col align-middle">
      {children}
      <div className="flex justify-center gap-4">
        <button className="btn w-full rounded-full" title="confirm" onClick={onConfirm}>{action}</button>
        <button className="btn w-full rounded-full" title="cancel" onClick={onCancel}>Annuler</button>
      </div>
        
    </div>

    

  );
}

export default observer(Popup);
