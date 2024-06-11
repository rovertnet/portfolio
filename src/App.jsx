import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Home from "./component/Home";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Service from "./component/service/Service";
import Work from "./component/works/Work";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";
import ProgressScroll from "./component/ProgressScroll";
import Teams from "./component/teams/Teams";
import Skills from "./component/skills/Skills";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "A propos", path: "about" },
    { link: "Services", path: "service" },
    { link: "Projets", path: "projet" },
    { link: "Stack", path: "skills" },
  ];

  return (
    <>
      <div className=" block">
        <ProgressScroll />
        <div className="md:px-14 px-12 max-w-screen-2xl">
          <div className=" rounded-tl-md rounded-tr-md md:mx-16 mx-6 px-5 py-4 md:mt-8 mt-6 fixed top-0 right-0 left-0">
            <div className="text-lg  container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-10 ">
                <a href="#">
                  <span className="  dark:text-white text-4xl font-extrabold font-jost text-slate-950">
                    R.
                  </span>
                </a>
                <ul className=" md:flex space-x-10 hidden">
                  {navItems.map(({ link, path }) => (
                    <Link
                      className=" block dark:text-slate-900 dark:hover:border-white dark:hover:pb-2 dark:hover:text-white d text-white opacity-0 hover:border-b-4 hover:border-white hover:pb-2 hover:text-white font-semibold cursor-pointer "
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
                <button type="button" className="" onClick={handleThemeSwitch}>
                  {theme === "dark" ? (
                    <BsMoonStarsFill className=" text-white text-4xl " />
                  ) : (
                    <LuSunMoon className=" text-slate-900 text-4xl" />
                  )}
                </button>
              </div>
              <div className="md:hidden space-x-2">
                <button type="button" className="" onClick={handleThemeSwitch}>
                  {theme === "dark" ? (
                    <BsMoonStarsFill className=" text-white text-3xl " />
                  ) : (
                    <LuSunMoon className=" text-black text-3xl" />
                  )}
                </button>

                <button
                  onClick={toggleMenu}
                  className=" text-white focus:outline-none focus:text-[#feff5b]"
                >
                  {showMenu ? (
                    <HiOutlineXMark className=" h-8 w-8 text-black dark:text-white transition-all duration-300 text-3xl" />
                  ) : (
                    <div className="flex space-x-2">
                      <BiMenuAltRight className=" h-10 w-10 transition-all text-3xl duration-300 text-black dark:text-white" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="left-11 right-11">
          <div
            className={` space-y-4 mt-24 w-[400] rounded-br-md rounded-bl-md justify-center px-6 py-3 pb-5 mx-11 dark:bg-white/20 bg-slate-900/10 backdrop-blur-md ${
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
                className=" block dark:text-slate-200 hover:text-slate-400 dark:hover:text-white dark:hover:bg-[#1203541c] hover:py-2 cursor-pointer font-semibold text-xl text-center"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="bg:white dark:bg-slate-900 block">
          <Home />
          <About />
          <Service />
          <Work />
          <Skills />
          <Teams />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
