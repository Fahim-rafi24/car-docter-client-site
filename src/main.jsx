import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import ServiceDetails from './components/ServiceDetails/ServiceDetails.jsx';
import PrivateRoot from './PrivateRoot/PrivateRoot.jsx';
import AddNewService from './components/AddNewService/AddNewService.jsx';
import UserAuthContext from './UserAuthContext/UserAuthContext.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      // private route
      {
        path: '/service_details/:id',
        element: <PrivateRoot> <ServiceDetails></ServiceDetails> </PrivateRoot>,
      },
      {
        path: '/add_service',
        // element: <PrivateRoot> <AddNewService></AddNewService> </PrivateRoot>,
        element: <AddNewService></AddNewService>,
      },
    ],
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAuthContext>
    <RouterProvider router={router} />
    </UserAuthContext>
  </StrictMode>,
)