import { createBrowserRouter } from "react-router-dom";
import Productos from "../pages/Productos/Productos";
import Contacto from "../components/Contacto/Contacto";
import Instalacion from '../components/Instalacion/Instalacion';
import Nosotros from '../components/Nosotros/Nosotros';
import Home from "../pages/Home/Home";
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts";
import MainLayout from '../Layouts/MainLayouts/MainLayouts';
import NotFound from "../pages/NotFound/NotFound";



export const router= createBrowserRouter([
  {
    path: '/',
    element: <IndexLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '*', element: <NotFound /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'Productos', element: <Productos /> },
      { path: 'Contacto', element: <Contacto /> },
      { path: 'Instalacion', element: <Instalacion /> },
      { path: 'Nosotros', element: <Nosotros /> },
      
      
      
      { path: '*', element: <NotFound /> }
    ]
  },
  { path: '*', element: <NotFound /> }
]);
