import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
              {
               
              },
    
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
  ]);