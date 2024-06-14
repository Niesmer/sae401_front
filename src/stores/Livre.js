import { Article } from "./Article";

export class Livre extends Article {
    constructor({auteur, ISBN, nbPages, dateDeParution,...article}) {
        super(article);
        this.Auteur = auteur;
        this.ISBN = ISBN;
        this.NbPages = nbPages;
        this.DateDeParution = dateDeParution;
    }

    getAuteur() {
        return this.Auteur;
    }

    setAuteur(auteur) {
        this.Auteur = auteur;
        return this;
    }

    getISBN() {
        return this.ISBN;
    }

    setISBN(ISBN) {
        this.ISBN = ISBN;
        return this;
    }

    getNbPages() {
        return this.NbPages;
    }

    setNbPages(nbPages) {
        this.NbPages = nbPages;
        return this;
    }

    getDateDeParution() {
        return this.DateDeParution;
    }

    setDateDeParution(dateDeParution) {
        this.DateDeParution = dateDeParution;
        return this;
    }
}
