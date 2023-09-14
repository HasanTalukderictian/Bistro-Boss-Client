import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart";
import AllUsers from "../Layout/All users/AllUsers";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoutes";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import Payment from "../Pages/DashBoard/Payment/Payment";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
  
  
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path:"order/:category",
          element:<Order></Order>
        },
         {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        },
        {
         path:'secret',
         element:<PrivateRoutes> <Secret></Secret> </PrivateRoutes>
        }
      ],
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children: [
        {
          path:'userhome',
          element:<UserHome></UserHome>
        },

        {
          path:'mycart',
          element:<MyCart></MyCart>
        },

        {
          path:'payment',
          element:<Payment></Payment>
        },
        // admin routes,
        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);