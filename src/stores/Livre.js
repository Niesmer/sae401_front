import { Article } from "./Article";

export class Livre extends Article {
    _auteur;
    _ISBN;
    _nbPages;
    _dateDeParution;

    constructor(id, titre, prix, disponibilite, image, articleType, auteur, ISBN, nbPages, dateDeParution) {
        super(id, titre, prix, disponibilite, image, articleType);
        this._auteur = auteur;
        this._ISBN = ISBN;
        this._nbPages = nbPages;
        this._dateDeParution = dateDeParution;
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
        this._dateDeParution = dateDeParution;
        return this;
    }
}
