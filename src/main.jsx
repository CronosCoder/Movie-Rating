import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContextApi from "./Context/ContextApi";

import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllMovie from './Pages/Home/All Movies/AllMovie';
import AddMovie from './Pages/Home/Add Movie/AddMovie';
import LogOut from './Pages/Home/Logout/LogOut';
import MovieDetails from './Pages/Home/Movie Details/MovieDetails';
import Protected from './components/ProtectedRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: "",
        element: <Protected><AllMovie /></Protected>
      },
      {
        path: "/movie/:id",
        element: <Protected><MovieDetails /></Protected>
      },
      {
        path: "/add-movie",
        element: <Protected><AddMovie /></Protected>
      },
      {
        path: "/logout",
        element: <Protected><LogOut /></Protected>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>,
)
