import { observer } from "mobx-react";
import React, { useState } from "react";
import { useArticleStore } from "../stores";


function PopupInfos({id, onClose={}, children}) {
  
  return (
    
    <div className="bg-white border absolute center z-20 gap-4 rounded-lg p-6 flex flex-col align-middle">
      {children}
        <button className="absolute right-4 top-4" onClick={onClose}>X</button>
    </div>

    

  );
}

export default observer(PopupInfos);
