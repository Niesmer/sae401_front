import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function PopupInfos({id, onClose={}, children}) {
  
  return (
    
    <div>
      {children}
        <button className="btn" onClick={onClose}>Fermer</button>
    </div>

    

  );
}

export default observer(PopupInfos);
