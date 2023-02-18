import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CompanyDetails from "../../pages/CompanyDetails/CompanyDetails";
import FreshersJob from "../../pages/Home/FreshersJob";
import Home from "../../pages/Home/Home";
import SeniorsJob from "../../pages/Home/SeniorsJob";
import TopItComp from "../../pages/Home/TopItComp";
import JobApply from "../../pages/JobApply/JobApply";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader:() => fetch('https://job-hunt-server-faisal-al-fatha.vercel.app/job-data'),
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
            path: '/fresherJobs',
            element: <FreshersJob></FreshersJob>
        }, 
        {
            path: '/seniorJobs',
            element: <SeniorsJob></SeniorsJob>
        }, 
        {
            path: '/job/:id',
            element: <JobApply></JobApply>,
            loader: ({params}) => fetch(`https://job-hunt-server-faisal-al-fatha.vercel.app/fresher-job/${params.id}`)
        }, 
        {
            path: '/job/:id',
            element: <JobApply></JobApply>,
            loader: ({params}) => fetch(`https://job-hunt-server-faisal-al-fatha.vercel.app/fresher-job/${params.id}`)
        },
        {
            path: '/topItComp',
            element: <TopItComp></TopItComp>
        }, 
        {
            path: '/world-topIt/:id',
            element: <CompanyDetails></CompanyDetails>,
            loader: ({params}) => fetch(`https://job-hunt-server-faisal-al-fatha.vercel.app/world-topIt/${params.id}`)
        }, 
        {
            path: '/bd-topIt/:id',
            element: <CompanyDetails></CompanyDetails>,
            loader: ({params}) => fetch(`https://job-hunt-server-faisal-al-fatha.vercel.app/bd-topIt/${params.id}`)
        }, 
        
      ]
    }
  ])


  export default router;