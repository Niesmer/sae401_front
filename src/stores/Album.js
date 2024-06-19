import { Article } from "./Article";

export class Album extends Article {
    

    constructor({artiste, dateDeParution, ...article}) {
        super(article);
        this._artiste = artiste;
        this._dateDeParution = dateDeParution;
    }

    static keys(){
        return ['id', 'titre', 'prix', 'disponibilite', 'image', 'article_type','artiste','dateDeParution'];
    }

    getArtiste() {
        return this._artiste;
    }

    setArtiste(artiste) {
        this._artiste = artiste;
        return this;
    }

    getDateDeParution() {
        return this._dateDeParution;
    }

    setDateDeParution(dateDeParution) {
        this._dateDeParution = dateDeParution;
        return this;
    }
}
