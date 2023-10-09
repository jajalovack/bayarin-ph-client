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
                <a className="hover:border-b hover:text-white duration-100">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:text-white duration-100">
                  About
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:text-white duration-100">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:border-b hover:text-white duration-100">
                  Profile
                </a>
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
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <div className="divider"></div>
          <li>
            <a>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
