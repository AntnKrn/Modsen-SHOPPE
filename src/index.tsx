import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router";

const root = document.getElementById('root');

if(!root) {
    throw new Error('root not found');
}

createRoot(root).render(<RouterProvider router={router} />)