import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageAdmin from "./pages/PageAdmin";
import Page404 from "./pages/Page404";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home>
            },
            {
                path: "/admin",
                element: <PageAdmin />
            },
            {
                path: "*",
                element: <Page404 />
            }
        ]
    }
])