import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Index} from "./pages/Index";
import {CallForPapers} from "./pages/CallForPapers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/call-for-participation",
        element: <CallForPapers />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
