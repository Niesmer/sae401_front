import {
    makeAutoObservable,
    runInAction,
    values
} from "mobx";
import {
    API_URL_GET_PRODUCTS
} from "./config";
import {
    Article
} from "./Article";
import {
    Livre
} from "./Livre";
import {
    Album
} from "./Album";

export default class ArticleStore {
    _loading;
    _error;
    _articles;

    constructor() {
        this._articles = [];
        this._loading = true;
        this._error = null;
        makeAutoObservable(this);
        this.loadArticles();
    }

    async loadArticles() {
        try {
            let articles = await fetch(API_URL_GET_PRODUCTS).then((value) => value.json())
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
            })
        }
    }


    async deleteArticle(id) {
        try {
            let response = await fetch(API_URL_GET_PRODUCTS + '/' + id, {
                method: 'DELETE'
            });
            if (response.ok) {
                runInAction(() => {
                    this._articles = this._articles.filter((article) => article.id !== id);
                });
            }
        } catch (error) {
            runInAction(() => {
                this._error = error;
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

    async addArticle(article) {
        try {
            const response = await fetch(`${API_URL_GET_PRODUCTS}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article),
            });

            if (response.ok) {
                const data = await response.json();
                runInAction(() => {
                    this.articles.push(data); // Assuming the API returns the created article
                });
                return {
                    success: true,
                    message: "Article Ajouté"
                };
            } else {
                return {
                    success: false,
                    message: `Request failed with status ${response.status}`
                }
            }

        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }


    getArticle(id) {
        return this._articles.find((article) => article.id === id);
    }


    async updateArticle(data) {
        let article = this.article(data.id);
        if (!article) {
            return {
                success: false,
                message: "Article inexistant"
            };
        } else {
            try {
                const response = await fetch(`${API_URL_GET_PRODUCTS}/${article.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    let {
                        id,
                        ...updatedData
                    } = data;
                    runInAction(() => {
                        Object.assign(article, updatedData);
                    });
                    return {
                        success: true,
                        message: "Article modifié"
                    };
                } else {
                    return {
                        success: false,
                        message: `Request failed with status ${response.status}`
                    };
                }
            } catch (error) {
                return {
                    success: false,
                    message: `${error}`
                };
            }
        }
    }
}