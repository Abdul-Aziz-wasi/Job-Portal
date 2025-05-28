import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../pages/layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/register",
            Component:Register
        },
        {
            path:'/signin',
            Component:SignIn
        }
    ]
  },
]);

export default router;