import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CallForParticipation} from "./pages/CallForParticipation";
import {Index} from "./pages/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "call-for-participation",
        element: <CallForParticipation />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
