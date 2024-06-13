import React from "react";
function formatString(str) {
  let cleanedString = str.replace('_', '');
  let formattedString = cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
  return formattedString;
}
function LigneArticle({ data = {}, keys = null, handleBtnDel = () => {}, handleBtnEdit = () => {}, handleBtnDetails = ()=>{}}) {
  if (!keys) {
    keys = Object.keys(data);
    console.log(keys);
  }
  return (
    <>
    <li className={`grid grid-flow-row grid-rows-[1fr] md:grid-flow-col gap-4 md:gap-0 md:auto-cols-[1fr] border-t p-2`}>
      {keys.map((key) => {
        return data[key] ? (
            <div className="max-w-25 overflow-hidden pl-4 flex gap-2">
<span className="block md:hidden font-bold">{formatString(key)}:</span>
              <p className={`text-ellipsis `}>
            {data[key]}{" "}
          </p>
            </div>
            
          
          
        ) : null;
      })}
      <div className="flex justify-center items-center h-full gap-2">
        <button title="delete" className="btn h-8 w-1/3 rounded-full" onClick={handleBtnDel}><img alt="supprimer" className="w-5 h-5" src="/bin.svg"></img><span className=" hidden sm:block md:hidden">Supprimer</span></button>
      <button title='edit' className="btn h-8 w-1/3 rounded-full" onClick={handleBtnEdit}><img alt="modifier" className="w-5 h-5" src="/edit.svg"></img><span className="hidden sm:block md:hidden">Modifier</span></button>
      <button title="details" className="btn h-8 w-1/3 rounded-full" onClick={handleBtnDetails}><img alt="détails" className="w-5 h-5" src="/infos.svg"></img><span className="hidden sm:block md:hidden">Détails</span></button>
      </div></li>
      
    </>
  );
}

export default LigneArticle;
