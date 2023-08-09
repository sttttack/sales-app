import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import CarCollection from "./pages/CarCollection";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/carcollection",
          element: <CarCollection />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/location",
          element: <Location />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
