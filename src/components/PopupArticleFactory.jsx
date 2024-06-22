import { useEffect } from "react";
import Popup from "./Popup";
import PopupDelete from "./popups/PopupArticleDelete";
import PopupArticleEdit from "./popups/PopupArticleEdit";
import PopupArticleDetails from "./popups/PopupArticleDetails";
import PopupArticleAdd from "./popups/PopupArticleAdd";

function PopupArticleFactory({
  error,
  popupType,
  article,
  onConfirm,
  onSubmit,
  onCancel,
  loading,
}) {
  useEffect(() => {}, [popupType]);
  switch (popupType) {
    case "delete":
      return (
        <PopupDelete
          error={error}
          loading={loading}
          article={article}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      );
    case "edit":
      return (
        <PopupArticleEdit
          error={error}
          loading={loading}
          article={article}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      );
    case "details":
      return (
        <PopupArticleDetails
          error={error}
          loading={loading}
          article={article}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      );
    case "add":
      return (
        <PopupArticleAdd
          error={error}
          loading={loading}
          onCancel={onCancel}
          onSubmit={onSubmit}
        />
      );
    default:
      return <></>;
  }
}

export default PopupArticleFactory;
