import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { PATH } from "./constants/path.js";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  AddBookPage,
  DeletePage,
  DetailPage,
  EditBookPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./pages/Index.js";

const router = createBrowserRouter([
  {
    path: PATH.register,
    element: <RegisterPage />,
  },
  {
    path: PATH.login,
    element: <LoginPage />,
  },
  {
    path: PATH.addBook,
    element: <AddBookPage />,
  },
  {
    path: PATH.home,
    element: <HomePage />,
  },
  {
    path: PATH.editBook,
    element: <EditBookPage />,
  },
  {
    path: PATH.delete,
    element: <DeletePage />,
  },
  {
    path: PATH.detail,
    element: <DetailPage />,
  },
  {
    path: "/*",
    element: <Navigate to={PATH.home} />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
