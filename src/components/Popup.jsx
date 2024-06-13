import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function Popup({action, onConfirm={}, onCancel ={}, children, hasBackground=true, zIndex=10}) {

  

  return (
    
    <>
    {hasBackground &&(
      <div className="backdrop-blur	w-screen h-screen fixed z-5"></div>
      
    )}
    
      <div className={`bg-white border fixed top-2/4 translate-x-[-50%] translate-y-[-50%] left-2/4 z-${zIndex} gap-4 rounded-lg p-6 flex flex-col align-middle`}>
      {children}
      <div className="flex justify-center gap-4">
        <button className="btn w-full rounded-full" title="confirm" onClick={onConfirm}>{action}</button>
        <button className="btn w-full rounded-full" title="cancel" onClick={onCancel}>Annuler</button>
      </div>
    </div>
</>
    

  );
}

export default observer(Popup);
