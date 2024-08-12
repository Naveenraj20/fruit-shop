import { useEffect, useState } from "react";
import Login from "./Login";

// import SearchComponent from "../searchComponent/SearchComponent";
import { Link } from "react-router-dom";

export default function Navebar() {
  
  const [searchEle, setSearchEle] = useState("search");
  const [value, setValue] = useState(
    localStorage.getItem("serValue")
      ? localStorage.getItem("serValue")
      : searchEle
  );

  useEffect(() => {
    localStorage.setItem("serValue", searchEle);
    console.log(localStorage.getItem("serValue"));
  }, [searchEle]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a
          className="  dark:text-black md:dark:text-white dark:hover:text-black"
          href="/"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="dark:hover:bg-slate-100 dark:text-black md:dark:text-white dark:hover:text-black"
          href="/Fruits"
        >
          Fruits
        </a>
      </li>
      <li>
        <a
          className="dark:hover:bg-slate-100 dark:text-black md:dark:text-white dark:hover:text-black"
          href="/Vegetables"
        >
          Vegetables
        </a>
      </li>
      <li>
        <a
          className=" dark:hover:bg-slate-100 dark:text-black md:dark:text-white dark:hover:text-black"
          href=""
        >
          About
        </a>
      </li>
    </>
  );
  

  function handleClick(e) {
    setSearchEle(e);
  }

  return (
    <>
      <div
        className={`max-w-screen-2xl z-40 bg-slate-900 container mx-auto md:px-20 px-4 top-0 sticky shadow-sm ${
          sticky
            ? "sticky-navbar shadow-md bg-slate-700  transition-all duration-200 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
               
              </ul>
            </div>
            <a className="text-2xl">
              <span className="text-lime-500 text-4xl font-bold">Fruit</span>
              <span>Shop</span>
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>

            <div className="mx-1 hidden md:block ">
              <label className="order rounded-md input flex items-center gap-2 dark:bg-white">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="text"
                    className="grow dark:text-black "
                    placeholder="Search"
                    value={searchEle}
                    onClick={() => {
                      if (searchEle === "search") {
                        setSearchEle("");
                      }
                    }}
                    onChange={(e) => handleClick(e.target.value)}
                  />
                </form>

                <Link to="/SearchComponent" className="dark:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70 dark:text-black "
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </label>
            </div>


            <a
              className="btn bg-blue-400 text-white hover:bg-blue-600 duration-300"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
