export class Article {
    constructor({id, titre, prix, disponibilite, image, article_type}) {
        this._id = id;
        this._titre = titre;
        this._prix = prix;
        this._disponibilite = disponibilite;
        this._image = image;
        this._article_type = article_type;
    }

    static keys(){
        return ['id', 'titre', 'prix', 'disponibilite', 'image', 'article_type'];
    }

    get id() {
        return this._id;
    }

    
    set id(id) {
        this.id = id;
        return this;
    }

    get titre() {
        return this._titre;
    }

    set titre(titre) {
        this.titre = titre;
        return this;
    }

    get prix() {
        return this._prix;
    }

    set prix(prix) {
        this.prix = prix;
        return this;
    }

    get disponibilite() {
        return this._disponibilite;
    }

    set disponibilite(disponibilite) {
        this.disponibilite = disponibilite;
        return this;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this.image = image;
        return this;
    }

    get article_type() {
        return this._article_type;
    }

    set article_type(articleType) {
        this._article_type = articleType;
        return this;
    }
}
