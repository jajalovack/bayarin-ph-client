import Header from "./Header/Header";
import Services from "../views/Home/Components/Services";
import Footer from "./Footer/Footer";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";

const index = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      <Services />
      <Footer />
    </div>
  );
};

export default index;
