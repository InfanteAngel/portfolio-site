import React from 'react'
import ReactDOM from 'react-dom/client'
import DetailsPage from './pages/DetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/DetailsPage",
    element: <DetailsPage />
  },
  {
    path: "/AboutPage",
    element: <AboutPage/>
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)


