import { createBrowserRouter, RouterProvider, Router, Link } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { BusketPage } from "./BusketPage/BusketPage";
import { ContactPage } from "./ContactPage/ContactPage";
import { ShopPage } from "./ShopPage/ShopPage";
import { ProductPage } from "./ProductPage/ProductPage";
import { App } from "../components/App";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "busket", element: <BusketPage />},
            { path: "contact", element: <ContactPage />},
            { path: "shop", element: <ShopPage />},
            { path: "product/:productId", element: <ProductPage />},
        ] 
    },
    /* {path: "busket", element: <BusketPage />} */
])