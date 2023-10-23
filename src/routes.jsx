import Home from "./views/Home/Home";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";

export const navRoutes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/services",
    element: <Services />,
    name: "Services",
  },
  {
    path: "/profile",
    element: <Profile />,
    name: "Profile",
  },
];

export const authRoutes = [
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },
];

const routes = [...authRoutes, ...navRoutes];

export default routes;
