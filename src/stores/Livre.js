import { Article } from "./Article";

export class Livre extends Article {
    constructor({ auteur, ISBN, nbPages, dateDeParution, ...article }) {
        super(article);
        this._auteur = auteur;
        this._ISBN = ISBN;
        this._nbPages = nbPages;
        this._dateDeParution = dateDeParution;
    }

    get auteur() {
        return this._auteur;
    }

    set auteur(auteur) {
        this._auteur = auteur;
    }
    get ISBN() {
        return this._ISBN;
    }

    set ISBN(ISBN) {
        this._ISBN = ISBN;
    }

    get nbPages() {
        return this._nbPages;
    }

    set nbPages(nbPages) {
        this._nbPages = nbPages;
    }

    get dateDeParution() {
        return this._dateDeParution;
    }

    set dateDeParution(dateDeParution) {
        this._dateDeParution = dateDeParution;
    }
}
