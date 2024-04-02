import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllMovie from './Pages/Home/All Movies/AllMovie';
import AddMovie from './Pages/Home/Add Movie/AddMovie';
import LogOut from './Pages/Home/Logout/LogOut';
import MovieDetails from './Pages/Home/Movie Details/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: "",
        element: <AllMovie/>
      },
      {
        path: "/movie/:id",
        element: <MovieDetails/>
      },
      {
        path: "/add-movie",
        element: <AddMovie/>
      },
      {
        path: "/logout",
        element: <LogOut/>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
