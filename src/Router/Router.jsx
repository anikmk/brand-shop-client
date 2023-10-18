import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AddToProduct from "../Components/AddToProduct/AddToProduct";
import MyCart from "../Components/MyCart/MyCart";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import Login from "../Components/Login/Login";

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
                element:<SingleProduct></SingleProduct>,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/addtoproduct',
                element:<AddToProduct></AddToProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
   
])
export default router