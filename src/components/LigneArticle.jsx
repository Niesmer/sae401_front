import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faPenToSquare, faCircleInfo,faTrash } from '@fortawesome/free-solid-svg-icons';

function formatString(str) {
  let cleanedString = str.replace('_', '');
  let formattedString = cleanedString.charAt(0).toUpperCase() + cleanedString.slice(1);
  return formattedString;
}

function LigneArticle({ data = {}, keys = null, handleBtnDel = () => { }, handleBtnEdit = () => { }, handleBtnDetails = () => { } }) {
  const [isVisible, setIsVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 960) {
      setBtnVisible(false);
    } else {
      setBtnVisible(true);
    }
  }, []);

  if (!keys) {
    keys = Object.keys(data);
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>{btnVisible && (
          <li onClick={toggleVisibility} className="md:hidden active:bg-indigo-100 py-4 bg-indigo-50 flex justify-between gap-3 items-center">
            <p className="ml-2 w-2/3">{data.titre}</p>
            <button
              title="toggle"
              className="w-1/3 text-right pr-4 rounded-full"
              
            >
              {isVisible ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretUp} className="rotate-180 transition-all"/>}
            </button>
          </li>
        )}
      <li className={`${isVisible ? 'max-h-96 p-2' : 'max-h-0 p-0'} transition-all md:py-3 md:max-h-none overflow-hidden md:h-auto grid grid-flow-row md:grid-flow-col md:auto-cols-[1fr] gap-4 border-t md:p-2`}>
        


        {keys.map((key) => (
          <div key={key} className={` w-full md:w-auto max-w-25 overflow-hidden pl-4 flex gap-2`}>
            <span className="block md:hidden font-bold">{formatString(key)}:</span>
            <p className="text-ellipsis overflow-hidden">
              {data[key]}{" "}
            </p>
          </div>
        ))}
        <div className={` flex md:flex justify-center items-center gap-2 w-full md:w-auto mt-2 md:mt-0`}>
          <button title="delete" className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full" onClick={handleBtnDel}>
            <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} />
            <span className="hidden sm:block md:hidden">Supprimer</span>
          </button>
          <button title="edit" className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full" onClick={handleBtnEdit}>
            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff", }} />
            <span className="hidden sm:block md:hidden">Modifier</span>
          </button>
          <button title="details" className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full" onClick={handleBtnDetails}>
            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff", }} />
            <span className="hidden sm:block md:hidden">Détails</span>
          </button>
        </div>

      </li>
    </>
  );
}

export default LigneArticle;
