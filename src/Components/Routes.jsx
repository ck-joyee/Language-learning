import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./Login";


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
                  // element: <SignUp></SignUp>
               
              },
    
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
  ]);