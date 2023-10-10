import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full h-20 navbar bg-[#000854]">
          <div className="flex-1 px-2 mx-2 text-white">Bayarin PH</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-white">
              {/* Navbar menu content here */}
              <li>
                <Link
                  to="/"
                  className="hover:border-b hover:text-white duration-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:border-b hover:text-white duration-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:border-b hover:text-white duration-100"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:border-b hover:text-white duration-100"
                >
                  Profile
                </Link>
              </li>
            </ul>
            <div className="join">
              <button className="btn btn-sm join-item btn-outline text-white">
                Login
              </button>
              <button className="btn btn-sm join-item">Register</button>
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <div>
            <h1 className="mb-[6rem] text-xl font-bold">Bayarin PH</h1>
          </div>

          {/* Sidebar content here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
