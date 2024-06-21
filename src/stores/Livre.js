import { Article } from "./Article";

export class Livre extends Article {
    constructor({ auteur, ISBN, nbPages, dateDeParution, ...article }) {
        super(article);
        this.Auteur = auteur;
        this.ISBN = ISBN;
        this.NbPages = nbPages;
        this.DateDeParution = dateDeParution;
    }

    getAuteur() {
        return this._auteur;
    }

    setAuteur(auteur) {
        this._auteur = auteur;
        return this;
    }

    getISBN() {
        return this._ISBN;
    }

    setISBN(ISBN) {
        this._ISBN = ISBN;
        return this;
    }

    getNbPages() {
        return this._nbPages;
    }

    setNbPages(nbPages) {
        this._nbPages = nbPages;
        return this;
    }

    getDateDeParution() {
        return this._dateDeParution;
    }

    setDateDeParution(dateDeParution) {
        this.DateDeParution = dateDeParution;
        return this;
    }
}
