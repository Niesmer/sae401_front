import { makeAutoObservable, runInAction, values } from "mobx";
import { API_URL_GET_PRODUCTS } from "./config";
import { Article } from "./Article";

export default class ArticleStore {
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
                this._articles = articles.map((article) => new Article(article));
                this._loading = false;
            });
        } catch (error) {
            runInAction(()=> {
                this._error = error;
                this._loading = false;
            })
        }
    }

    get articles() {
        return this._articles;
    }

    get loading() {
        return this._loading;
    }

    get error() {
        return this._error;
    }

    set articles(articles) {
        this._articles = articles;
    }

    set loading(loading) {
        this._loading = loading;
    }

    set error(error) {
        this._error = error;
    }
}