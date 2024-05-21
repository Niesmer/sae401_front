class Article {
    _id;
    _titre;
    _prix;
    _disponibilite;
    _image;
    _articleType;

    constructor({id, titre, prix, disponibilite, image, articleType}) {
        this._id = id;
        this._titre = titre;
        this._prix = prix;
        this._disponibilite = disponibilite;
        this._image = image;
        this._articleType = articleType;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
        return this;
    }

    getTitre() {
        return this._titre;
    }

    setTitre(titre) {
        this._titre = titre;
        return this;
    }

    getPrix() {
        return this._prix;
    }

    setPrix(prix) {
        this._prix = prix;
        return this;
    }

    getDisponibilite() {
        return this._disponibilite;
    }

    setDisponibilite(disponibilite) {
        this._disponibilite = disponibilite;
        return this;
    }

    getImage() {
        return this._image;
    }

    setImage(image) {
        this._image = image;
        return this;
    }

    getArticleType() {
        return this._articleType;
    }

    setArticleType(articleType) {
        this._articleType = articleType;
        return this;
    }
}
