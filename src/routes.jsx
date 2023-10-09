import Home from "./views/Home/Home";
import About from "./views/About/About";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";
import Services from "./views/Services/Services";

const routes = [
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
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    name: "Register",
  },
  {
    path: "/profile",
    element: <Profile />,
    name: "Profile",
  },
];

export default routes;
