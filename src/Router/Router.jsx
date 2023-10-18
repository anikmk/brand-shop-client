import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AddToProduct from "../Components/AddToProduct/AddToProduct";
import MyCart from "../Components/MyCart/MyCart";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Details from "../Components/SingleProduct/Details";
import Update from "../Components/SingleProduct/Update";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/products')
            },
            {
                path:'/singleproduct/:id',
                element:
                <SingleProduct></SingleProduct>
                ,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            // tanim
            // {
            //     path:'/singleproduct',
            //     element:<SingleProduct></SingleProduct>
            // },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/addtoproduct',
                element:<PrivetRoute>
                <AddToProduct></AddToProduct>
                </PrivetRoute>
            },
            {
                path:'/mycart',
                element:<PrivetRoute>
                    <MyCart></MyCart>
                    </PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
   
])
export default router