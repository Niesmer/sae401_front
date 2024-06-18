export class Article {
    constructor({id, titre, prix, disponibilite, image, article_type}) {
        this.id = id;
        this.titre = titre;
        this.prix = prix;
        this.disponibilite = disponibilite;
        this.image = image;
        this.articleType = article_type;
    }

    static keys(){
        return ['id', 'titre', 'prix', 'disponibilite', 'image', 'article_type'];
    }

    get id() {
        return this._id;
    }

    static keys(){
        return ['id', 'titre', 'prix', 'disponibilite', 'image', 'articleType'];
    }
    set id(id) {
        this._id = id;
        return this;
    }

    get titre() {
        return this._titre;
    }

    set titre(titre) {
        this._titre = titre;
        return this;
    }

    get prix() {
        return this._prix;
    }

    set prix(prix) {
        this._prix = prix;
        return this;
    }

    get disponibilite() {
        return this._disponibilite;
    }

    set disponibilite(disponibilite) {
        this._disponibilite = disponibilite;
        return this;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
        return this;
    }

    get articleType() {
        return this._articleType;
    }

    set articleType(articleType) {
        this._articleType = articleType;
        return this;
    }
}
