import { createBrowserRouter } from "react-router-dom";
import Productos from "../pages/Productos/Productos";
import Home from "../pages/Home/Home";
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts";
import MainLayout from '../Layouts/MainLayouts/MainLayouts';

export const router= createBrowserRouter([
  {
    path: '/',
    element: <IndexLayout />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'Productos', element: <Productos /> },
      // { path: '*', element: <NotFound /> }
    ]
  },
  // { path: '*', element: <NotFound /> }
]);
