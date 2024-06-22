import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faPenToSquare,
  faCircleInfo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { IMG_URL } from "../stores/config";

function LigneArticle({
  data = {},
  keys = null,
  setPopupType,
  setPopupArticle,
}) {
  const [isVisible, setIsVisible] = useState(false);

  console.log(data);

  if (!keys) {
    keys = Object.keys(data);
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleButtons = (e) => {
    setPopupType(e.currentTarget.name);
    setPopupArticle(data);
  };

  return (
    <>
      <li
        onClick={toggleVisibility}
        className="md:hidden active:bg-indigo-100 py-4 bg-indigo-50 flex justify-between gap-3 items-center"
      >
        <p className="ml-2 w-2/3">{data.titre}</p>
        <button title="toggle" className="w-1/3 text-right pr-4 rounded-full">
          {isVisible ? (
            <FontAwesomeIcon icon={faCaretUp} className="z-0" />
          ) : (
            <FontAwesomeIcon
              icon={faCaretUp}
              className="rotate-180 z-0 transition-all"
            />
          )}
        </button>
      </li>
      <li
        className={`${
          isVisible ? "max-h-96 p-2" : "max-h-0 p-0"
        } transition-all md:py-3 md:max-h-none 
      overflow-hidden md:h-auto grid grid-flow-row md:grid-flow-col md:auto-cols-[1fr] gap-4 border-t md:p-2`}
      >
        {keys.map((key) =>
          key === "image" ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            data[key] ? (
              <img
                src={
                  data[key]?.startsWith("https")
                    ? data[key]
                    : IMG_URL + data[key]
                }
              ></img>
            ) : (
              <p></p>
            )
          ) : (
            <div
              key={key}
              className={` w-full md:w-auto max-w-25 overflow-hidden pl-4 flex gap-2`}
            >
              <span className="block md:hidden font-bold">{key}:</span>
              <p className="text-ellipsis overflow-hidden">{data[key]} </p>
            </div>
          )
        )}
        <div
          className={` flex md:flex justify-center items-center gap-2 w-full md:w-auto mt-2 md:mt-0`}
        >
          <button
            type="button"
            name="delete"
            aria-label="Supprimer"
            className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full"
            onClick={handleButtons}
          >
            <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
            <span className="hidden sm:block md:hidden">Supprimer</span>
          </button>
          <button
            type="button"
            name="edit"
            aria-label="Modifier"
            className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full"
            onClick={handleButtons}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#ffffff" }}
            />
            <span className="hidden sm:block md:hidden">Modifier</span>
          </button>
          <button
            type="button"
            name="details"
            aria-label="Détails"
            className="btn md:h-8 py-3 w-1/3 md:w-auto rounded-full"
            onClick={handleButtons}
          >
            <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#ffffff" }} />
            <span className="hidden sm:block md:hidden">Détails</span>
          </button>
        </div>
      </li>
    </>
  );
}

export default LigneArticle;
