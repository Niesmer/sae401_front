import FormArticle from "./forms/FormArticle";
import FormLivre from "./forms/FormLivre";
import FormMusique from "./forms/FormMusique";

function FormFactory({
  loading,
  article,
  onCancel = () => {},
  handleSubmit = () => {},
}) {
  switch (article.article_type) {
    case "livre":
      return (
        <FormLivre
          loading={loading}
          livre={article}
          handleSubmit={handleSubmit}
          onCancel={onCancel}
        />
      );
    case "musique":
      return (
        <FormMusique
          loading={loading}
          musique={article}
          handleSubmit={handleSubmit}
          onCancel={onCancel}
        />
      );
    default:
      return (
        <FormArticle
          loading={loading}
          article={article}
          handleSubmit={handleSubmit}
          onCancel={onCancel}
        />
      );
  }
}

export default FormFactory;
