import { createContext } from "react";
import { useContext } from "react";
import ArticleStore from "./ArticleStore";


const stores = {
    articleStore: new ArticleStore()
}
const GlobalContext = createContext();
export const StoreProvider = ({ children }) => (
    <GlobalContext.Provider value={stores}>
        {children}
    </GlobalContext.Provider>)

export const useArticleStore = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useArticleStore must be within a StoreProvider");
    }
    return context.articleStore;
};


