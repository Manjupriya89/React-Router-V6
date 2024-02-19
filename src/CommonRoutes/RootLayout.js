import { Route,Routes, createBrowserRouter } from "react-router-dom";
import About from '../components/About'
import Career from "../components/Career";
import Course from "../components/Course";
import NavBar from "../components/NavBar";
import ErrorPageNotFound from "./ErrorPageNotFound";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<NavBar/>,
        errorElement:<ErrorPageNotFound/>,
        children:[{
            path:'/about',
            element:<About/>
        },{
            path:'/career',
            element:<Career/>,
            loader : async ()=>{
                const jsonRes = await fetch('http://localhost:3002/jobs')
                const res = await jsonRes.json()
                return res

            }
        },{
            path:'/course',
            element:<Course/>,
            loader : async ()=>{
                const res = await fetch('http://localhost:3002/courses')
                const courseRes = await res.json()
                return courseRes
            }
        },{
           
        }]
    }
])

