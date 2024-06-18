import { Article } from "./Article";

export class Album extends Article {
    _artiste;
    _dateDeParution;

    constructor(id, titre, prix, disponibilite, image, articleType, artiste, dateDeParution) {
        super(id, titre, prix, disponibilite, image, articleType);
        this._artiste = artiste;
        this._dateDeParution = dateDeParution;
    }

    static keys(){
        return ['id', 'titre', 'prix', 'disponibilite', 'image', 'articleType','artiste','dateDeParution'];
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
