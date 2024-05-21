import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <page404/>,
        children: [
            {
                path: "/admin",
                element: <pageAdmin/>
            },
        ]
    }
])