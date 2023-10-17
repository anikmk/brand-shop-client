import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AddToProduct from "../Components/AddToProduct/AddToProduct";
import MyCart from "../Components/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addtoproduct',
                element:<AddToProduct></AddToProduct>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>
            }
        ]
    },
   
])
export default router