import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Home from "./component/Home";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Service from "./component/service/Service";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    }else{
        setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
  })

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "A propos", path: "about" },
    { link: "Services", path: "service" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <div className="md:px-14 max-w-screen-2xl mx-auto">
        <div className=" dark:bg-blue-300 mx-14 bg-gray-900 px-5 py-2 md:mt-3 mt-5 fixed top-0 right-0 left-0 shadow-md">
          <div className="text-lg  container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-10 ">
              <a href="#">
                <span className="  dark:text-slate-900 text-3xl font-extrabold font-jost text-blue-300">
                  R.
                </span>
              </a>
              <ul className=" md:flex space-x-10 hidden">
                {navItems.map(({ link, path }) => (
                  <Link
                    className=" block dark:text-slate-900 dark:hover:border-white dark:hover:pb-2 dark:hover:text-white d text-blue-300 hover:border-b-4 hover:border-white hover:pb-2 hover:text-white font-semibold cursor-pointer "
                    onactiveclass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    key={link}
                    to={path}
                  >
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
            <div className=" space-x-12 hidden md:flex items-center">
              <button
                type="button"
                className=" hover:bg-slate-300 hover:rounded-full hover:p-2"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <BsMoonStarsFill className=" text-Slate-900 text-2xl " />
                ) : (
                  <LuSunMoon className=" text-blue-300 text-2xl" />
                )}
              </button>
            </div>
            <div className="md:hidden space-x-2">
              <button
                type="button"
                className=" hover:bg-slate-300 hover:rounded-full hover:p-2"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <BsMoonStarsFill className=" text-Slate-900 text-2xl " />
                ) : (
                  <LuSunMoon className=" text-blue-300 text-2xl" />
                )}
              </button>

              <button
                onClick={toggleMenu}
                className=" text-white focus:outline-none focus:text-[#feff5b]"
              >
                {showMenu ? (
                  <HiOutlineXMark className=" h-8 w-8 text-blue-300 dark:text-slate-900 transition-all duration-300" />
                ) : (
                  <div className="flex space-x-2">
                    <BiMenuAltRight className=" h-10 w-10 transition-all duration-300 text-blue-300 dark:text-slate-900" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="left-11 right-11">
        <div
          className={` space-y-4 mt-16 w-[400] justify-center px-6 py-3 pb-5 mx-14 dark:bg-blue-300 bg-slate-900 ${
            showMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              key={link}
              to={path}
              className=" block dark:text-slate-900 text-blue-300 hover:text-white dark:hover:text-white dark:hover:bg-[#1203541c] hover:py-2 cursor-pointer font-semibold text-xl text-center"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className=" font-jost bg:white dark:bg-slate-900">
        <Home />
        <Service />
      </div>
    </>
  );
}

export default App