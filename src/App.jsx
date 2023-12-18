import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Home from "./component/Home";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";

function App() {
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


  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "A propos", path: "about" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      {/* <button
          type="button"
          className="fixed z-10 right-2 top-2 text-lg p-3 rounded-md mt-1"
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <BsMoonStarsFill className=" text-white text-2xl" />
          ) : (
            <LuSunMoon className=" text-black text-2xl" />
          )}
        </button> */}
      <div className="md:px-14 max-w-screen-2xl mx-auto">
        <div className=" dark:bg-blue-300 bg-gray-900 px-7 py-2 md:mt-3 mt-2 rounded-md fixed top-0 right-0 left-0 shadow-md">
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
                    className=" block dark:text-slate-900 text-blue-300 hover:border-b-4 hover:border-white hover:pb-2 hover:text-white font-semibold cursor-pointer "
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
          </div>
        </div>
      </div>
      <div className=" font-jost bg:white dark:bg-slate-900">
        <Home />
      </div>
    </>
  );
}

export default App