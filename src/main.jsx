import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import AllArts from './components/allArts.jsx'
import AddItem from './components/addItem.jsx'
import AuthProvider from './providers/authProvider.jsx'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/home.jsx'
import PrivateRoute from './providers/privateRoute.jsx'
import Errorpage from './components/errorpage.jsx'
import CraftItemDetails from './components/craftItemDetails.jsx'
import MyArts from './components/myArts.jsx'
import UpdateItem from './components/updateItem.jsx'
import SubcateogryCrafts from './components/subcateogryCrafts.jsx'

const router = createBrowserRouter([{
    path:'/',
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: '/',
        element:<Home/>,
        loader: ()=>{
            return fetch('https://blue-craft-sarver.vercel.app/craftitems')
        }
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <Register/>
      },
      
      {
        path:'/allArtsAndCrafts',
        element: <AllArts/>,
        loader: ()=>{
            return fetch('https://blue-craft-sarver.vercel.app/allcrafts')
        }
      },
      {
        path:'/craftDetails/:id',
        element: <PrivateRoute><CraftItemDetails/></PrivateRoute>,
        loader: ({params})=>{
            return fetch(`https://blue-craft-sarver.vercel.app/craftitem/${params.id}`)
        }
      },

      {
        path:'/addCraftItem',
        element: <PrivateRoute><AddItem/></PrivateRoute>
      },

      {
        path:'/updateCraftItem/:id',
        element: <PrivateRoute><UpdateItem/></PrivateRoute>,
        loader: ({params})=>{
            return fetch(`https://blue-craft-sarver.vercel.app/craftitem/${params.id}`)
        }
      },

      {
        path:'/myArtsAndCrafts/:userId/:customized',
        element: <PrivateRoute><MyArts/></PrivateRoute>,
        loader: ({params})=>{
            return fetch(`https://blue-craft-sarver.vercel.app/mycrafts/${params.userId}/${params.customized}`)
        }
      },
      {
        path:'/artsAndCrafts/:subcategory',
        element: <SubcateogryCrafts/>,
        loader: ({params})=>{
            return fetch(`https://blue-craft-sarver.vercel.app/artsAndCrafts/${params.subcategory}`)
        }
      },
      
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
