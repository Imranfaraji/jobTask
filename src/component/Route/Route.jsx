import {
    createBrowserRouter,
    
  } from "react-router";
import Root from "../Root/Root";
import Home from "../../pages/Home/Home";
import Calender from "../../pages/Calendar/Calender";
import OrgChartDirectory from "../OrgChartDirectory/OrgChartDirectory";
import Error from "../../pages/Error/Error";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {index:true, Component:Home},
        {path:"/calendar", Component:Calender},
        {path:"/employees", Component:OrgChartDirectory}
      ]
    },
  ]);