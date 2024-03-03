import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CallForParticipation} from "./pages/CallForParticipation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CallForParticipation />
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
