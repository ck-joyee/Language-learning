import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Allinstructor from "./Allinstructor";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import MyStudent from "./Dashboarts/MyStudent";

import AddCourse from "./Dashboarts/AddCourse/AddCourse";
import ManageItems from "./Dashboarts/ManageItems/ManageItems";
import Payment from "./Dashboarts/Payment/Payment";
import Clsasses from "./Clsasses";
import PaymentHistory from "./Dashboarts/PaymentHistory/PaymentHistory";
import AllUsers from "./Dashboarts/AllUsers/AllUsers";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
              {
                
                  path: '/',
                  element: <Home></Home>
                },
                {
                  path: '/login',
                  element: <Login></Login>
                },
                {
                  path: '/signup',
                  element: <SignUp></SignUp>
                },
                {
                  path:"/instructor",
                  element:<Allinstructor></Allinstructor>
                },
                {
                  path:"/classes",
                  element:<Clsasses></Clsasses>
                }
    
      ]
    },
    {
      path:'Dashborart',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
         {
          path:'mystudent',
          element:<MyStudent></MyStudent>
         },
         {
          path:'allusers',
          element:<AllUsers></AllUsers>
         },
         {
          path:'addsport',
          element:<AddCourse></AddCourse>
         },
         {
          path:"menagesports",
          element:<ManageItems></ManageItems>
         },
         {
          path:"payment",
          element:<Payment></Payment>
         },
         {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
         }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
  ]);