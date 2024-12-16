
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/jobdetails/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: '/jobapply/:id',
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
           
        },
        {
            path: '/addjob',
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
           
        },
        {
            path: '/myapplication',
            element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
           
        },
        {
            path: '/mypostedjobs',
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
           
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);


  export default router