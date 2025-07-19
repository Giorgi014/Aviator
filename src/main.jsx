import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'

const Home = React.lazy(() => import("./components/Main/Home/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{ index: true, element: <Home /> }],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
