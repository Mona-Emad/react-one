import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Porfolio from './Component/Porfolio/Porfolio'
import Contect from './Component/Contect/Contect'


let routers=createBrowserRouter([
  {path:"", element:<Layout/>, children:[
    {path:"/",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portpholio",element:<Porfolio/>},
    {path:"contect",element:<Contect/>},
    ``
  ]}
])

export default function App() {
  return <RouterProvider router={routers}> </RouterProvider>

}