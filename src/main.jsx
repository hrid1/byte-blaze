import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {  RouterProvider } from "react-router-dom";

import { router } from "./Routes/Routes.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/blogs",
//         element: <Blogs></Blogs>,
//         loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
//       },
//       {
//         path: "/bookmarks",
//         element: <Bookmarks></Bookmarks>,
//       },
//       {
//         path: "/blog/:id",
//         element: <Blog></Blog>,
//         loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
        
//       }
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
