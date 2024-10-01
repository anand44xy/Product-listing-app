import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/:slug?', 
      element: <Home /> // slug is an optional parameter (:slug?)
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
