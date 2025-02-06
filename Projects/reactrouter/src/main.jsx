import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1 setting router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3- error page
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5- nested routes - unique id - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7- non existent pages navigate
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
