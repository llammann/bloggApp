import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home";
import Add from "../pages/user/add";
import Login from "../pages/user/login";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
