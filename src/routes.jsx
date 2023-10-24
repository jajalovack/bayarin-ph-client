import Home from "./views/Home/Home";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Profile from "./views/Profile/Profile";
import Electric from "./views/Bills/Electric";
import Water from "./views/Bills/Water";
import Cable from "./views/Bills/Cable";
import Credit from "./views/Bills/Credit";
import Prepaid from "./views/Bills/Prepaid";
import Misc from "./views/Bills/Misc";

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

export const billsRoutes = [
  {
    path: "/electric",
    element: <Electric />,
    name: "Electric",
  },
  {
    path: "/water",
    element: <Water />,
    name: "Water",
  },
  {
    path: "/cable",
    element: <Cable />,
    name: "Cable",
  },
  {
    path: "/credit",
    element: <Credit />,
    name: "Credit",
  },
  {
    path: "/prepaid",
    element: <Prepaid />,
    name: "Prepaid",
  },
  {
    path: "/misc",
    element: <Misc />,
    name: "Misc",
  },
];

const routes = [...authRoutes, ...navRoutes, ...billsRoutes];

export default routes;
