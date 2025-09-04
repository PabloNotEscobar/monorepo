import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {LazyAbout} from "@/pages/about/About.lazy";
import React from "react";

const routes = [
    {
        path: "/admin",
        element: <App/>,
        children: [
            {
                path: '/admin/about',
                element: <LazyAbout/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes