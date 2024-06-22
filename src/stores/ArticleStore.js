import { makeAutoObservable, runInAction } from "mobx";
import { API_URL_GET_PRODUCTS } from "./config";
import { Article } from "./Article";
import { Album } from "./Album";
import { Livre } from "./Livre";

export default class ArticleStore {
    _loading; _error; _articles;

    constructor() {
        this._articles = [];
        this._loading = true;
        this._error = null;
        makeAutoObservable(this);
        this.loadArticles();
    }

    async loadArticles() {
        try {
            let articles = await fetch(API_URL_GET_PRODUCTS).then((value) => value.json());
            runInAction(() => {
                this._articles = articles.map((article) => {
                    switch (article.article_type) {
                        case 'livre':
                            return new Livre(article);
                        case 'musique':
                            return new Album(article);
                        default:
                            return new Article(article);
                    }
                });
                this._loading = false;
            });
        } catch (error) {
            runInAction(() => {
                this._error = error;
                this._loading = false;
            });
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

    getArticle(id) {
        return this._articles.find((article) => article.id == id);
    }

    async addArticle(article) {
        try {
            let response = await fetch(`${API_URL_GET_PRODUCTS}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(article),
            });
            if (!response.ok) {
                let { message } = await response.json();
                let errors = Object.entries(message).map(([, value]) => `${value}`);
                return runInAction(() => {
                    this._error = errors;
                });
            }
            let newArticle = await response.json();
            runInAction(() => {
                
            });
        } catch (error) {
            runInAction(() => {
                this._error = error;
            });
        }
    }

    async deleteArticle(id) {
        try {
            let response = await fetch(`${API_URL_GET_PRODUCTS}/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                runInAction(() => {
                    this._articles = this._articles.filter((article) => article.id !== id);
                });
            } else {
                throw new Error('Failed to delete the article');
            }
        } catch (error) {
            runInAction(() => {
                this._error = error;
            });
        }
    }

    async updateArticle(data) {
        let article = this.getArticle(data.id);
        if (!article) {
            runInAction(() => {
                this._error = new Error('Article inexistant');
            });
        } else {
            try {
                let response = await fetch(`${API_URL_GET_PRODUCTS}/${data.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    let { message } = await response.json();
                    let errors = Object.entries(message).map(([, value]) => `${value}`);
                    return runInAction(() => {
                        this._error = errors;
                    });
                }
                let updatedArticle = await response.json();

                runInAction(() => {
                    const index = this._articles.findIndex((art) => art.id === updatedArticle.id);
                    if (index !== -1) {
                        this._articles[index] = updatedArticle;
                    }
                });
            } catch (error) {
                runInAction(() => {
                    this._error = error;
                });
            }
        }
    }
}
