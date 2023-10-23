import { useState, useEffect } from "react";
import { NavLink, Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icon.svg";
import http from "../../lib/http";

const Header = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    window.addEventListener("authenticated", checkToken);
    return () => {
      window.removeEventListener("authenticated", () => {});
    };
  }, []);

  function checkToken() {
    setToken(localStorage.getItem("token"));
  }

  function logout() {
    const api = http({
      Authorization: `Bearer ${isLoggedIn}`,
    });
    api.post("/logout");
    localStorage.clear();
    window.dispatchEvent(new Event("authenticated"));
  }

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full h-24 navbar bg-[#000854]">
            <div className="flex-1 px-2 mx-2 text-white">
              <object className="w-48" data={Logo}></object>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-white">
                {/* Navbar menu content here */}
                <li>
                  <NavLink to="/" className="link link-hover hover:text-white">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="link link-hover hover:text-white"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <LinkScroll
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={5}
                    duration={500}
                    className="link link-hover hover:text-white"
                  >
                    Services
                  </LinkScroll>
                </li>
              </ul>
              <div className="join">
                {token ? (
                  <>
                    <button className="btn btn-sm">
                      <LinkRouter to="/profile">Profile</LinkRouter>
                    </button>
                    <button className="btn btn-sm bg-red-300">
                      <LinkRouter onClick={logout} to="/login">
                        Logout
                      </LinkRouter>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-sm join-item btn-outline text-white">
                      <LinkRouter to="/login">Login</LinkRouter>
                    </button>
                    <button className="btn btn-sm join-item">
                      <LinkRouter to="/register">Register</LinkRouter>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#000854]">
            <div>
              <object className="w-32 mb-10" data={Icon}></object>
            </div>

            {/* Sidebar content here */}
            <li>
              <NavLink
                className="text-white hover:text-white hover:bg-[#DD3E3E]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-white hover:bg-[#DD3E3E]"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <LinkScroll
                to="services"
                spy={true}
                smooth={true}
                offset={5}
                duration={500}
                className="text-white hover:text-white hover:bg-[#DD3E3E]"
              >
                Services
              </LinkScroll>
            </li>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-1 card bg-base-300 rounded-box place-items-center my-5"></div>
            </div>
            <li>
              <div className="join bg-[#000854] hover:bg-[#000854]">
                <button className="btn btn-sm join-item btn-outline text-white">
                  <LinkRouter to="/login">Login</LinkRouter>
                </button>
                <button className="btn btn-sm join-item btn-outline text-white">
                  <LinkRouter to="/register">Register</LinkRouter>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
