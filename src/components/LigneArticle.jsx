import React from "react";

function LigneArticle({ data = {}, keys = null, handleBtnDel = () => {}, handleBtnEdit = () => {}, handleBtnDetails = ()=>{}}) {
  if (!keys) {
    keys = Object.keys(data);
    console.log(keys);
  }
  return (
    <>
    <li className={`grid grid-flow-col auto-cols-[1fr] border-t p-2`}>
      {keys.map((key) => {
        return data[key] ? (
          
            <p className="max-w-25 text-ellipsis overflow-hidden" key={key}>
            {data[key]}{" "}
          </p>
          
          
        ) : null;
      })}
      <div className="flex justify-center gap-2">
        <button title="delete" className="btn h-8" onClick={handleBtnDel}><img alt="supprimer" className="w-5 h-5" src="/bin.svg"></img></button>
      <button title='edit' className="btn h-8" onClick={handleBtnEdit}><img alt="modifier" className="w-5 h-5" src="/edit.svg"></img></button>
      <button title="details" className="btn h-8" onClick={handleBtnDetails}><img alt="détails" className="w-5 h-5" src="/infos.svg"></img></button>
      </div></li>
      
    </>
  );
}

export default LigneArticle;
