import { Link } from "react-router-dom";

const Nav = () => {
  const menu1 = (
    <>
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
      <li>
        <Link to="/admission">ADMISSION</Link>
      </li>
      <li>
        <Link to="/gallery">GALLERY</Link>
      </li>
      <li>
        <Link to="/mujib">MUJIB CORNER</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabindex="0" className="relative">
              <a className="justify-between">
                HOME
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 shadow bg-base-100 rounded-box w-52 absolute top-0 left-16 z-50">
                <li>
                  <a>submenu 1</a>
                </li>
                <li>
                  <a>submenu2</a>
                </li>
              </ul>
            </li>
            <li tabindex="0" className="relative">
              <a className="justify-between">
                ABOUT
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 shadow bg-base-100 rounded-box w-52 top-0 left-16 z-50">
                <li>
                  <Link to='/about'>submenu 1</Link>
                </li>
                <li>
                  <a>submenu2</a>
                </li>
              </ul>
            </li>
            {menu1}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Website Logo
        </Link>
      </div>
      {/* ------------------------ DESKTOP -------------------------- */}
      <div className="navbar-center hidden lg:flex -px-10">
        <ul className="menu menu-horizontal p-0 z-[100]">
          {/* WITH SUBMENU */}
          <li tabindex="0">
            <a>
              HOME
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 shadow bg-base-100 rounded-box">
              <li>
                <a>BANI 1</a>
              </li>
              <li>
                <a>BANI 2</a>
              </li>
            </ul>
          </li>
          {/* WITH SUBMENU */}
          <li tabindex="0">
            <a>
              ABOUT
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 shadow bg-base-100 rounded-box">
              <li>
                <Link to='/about'>ABOUT 1</Link>
              </li>
              <li>
                <a>ABOUT 2</a>
              </li>
            </ul>
          </li>
          {menu1}
        </ul>
        {/*----------------------- Search  -----------------------------*/}
        {/* <div className="">
          
          <div className=" form-control flex flex-row-reverse gap-2">
          <button className="button btn btn-ghost btn-circle border-2 hover:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
  
        </div> */}
        {/* search end */}
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
            </div>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><Link to="/setting">Settings</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
