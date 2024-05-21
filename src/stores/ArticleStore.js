import { makeAutoObservable, runInAction, values } from "mobx";
import { API_URL_GET_PRODUCTS } from "./config";

class ArticleStore {
    _loading;_error;_articles;

    constructor(){
        this._articles = [];
        this._loading = true;
        this._error = null;
        makeAutoObservable(this);
        this.loadArticles();
    }

    async loadArticles(){
        try {
            let articles = await fetch(API_URL_GET_PRODUCTS).then((value)=> value.json())
            runInAction(() => {
                this._articles = articles.map((article) => new Student(article));
                this._students = this._students.sort((a, b) => a.fullName.localeCompare(b.fullName));
                this._loading = false;
            });
        } catch (error) {
            runInAction(()=> {
                this._error = error;
                this._loading = false;
            })
        }
    }
}