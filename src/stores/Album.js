import { Article } from "./Article";

export class Album extends Article {
    _artiste;
    _dateDeParution;

    constructor({artiste, dateDeParution, ...article}) {
        super(article);
        this._artiste = artiste;
        this._dateDeParution = dateDeParution;
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
