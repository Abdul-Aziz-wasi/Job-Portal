import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../pages/layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn";
import JobDetail from "../pages/Job Details/JobDetail";
import JobApplay from "../pages/jobApplay/JobApplay";
import PrivateRoutes from "../Routes/PrivateRoutes";
import MyApplications from "../pages/MyApplications/MyApplications";

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
            path:'/Job/:id',
            loader:({params})=>fetch(`http://localhost:3000/Job/${params.id}`),
            Component:JobDetail
        },
        {
            path:"/jobApplay/:id",
            element:<PrivateRoutes><JobApplay></JobApplay></PrivateRoutes> 
        },
        {
            path:'/myApplications',
            element:<PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
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