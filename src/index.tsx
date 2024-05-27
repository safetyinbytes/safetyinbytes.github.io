import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";
import {Speaker} from "./pages/Speaker";

const router = createHashRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/speaker",
        element: <Speaker />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
