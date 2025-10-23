import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Calender from "../../pages/Calendar/Calender";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {index:true, Component:Home},
        {path:"/calendar", Component:Calender}
      ]
    },
  ]);