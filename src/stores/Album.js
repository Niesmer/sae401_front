import { Article } from "./Article";

export class Album extends Article {
    

    constructor({artiste, dateDeParution, ...article}) {
        super(article);
        this._artiste = artiste;
        this._dateDeParution = dateDeParution;
    }

    get artiste() {
        return this._artiste;
    }

    set artiste(artiste) {
        this._artiste = artiste;
        return this;
    }

    get dateDeParution() {
        return this._dateDeParution;
    }

    set dateDeParution(dateDeParution) {
        this._dateDeParution = dateDeParution;
        return this;
    }
}
