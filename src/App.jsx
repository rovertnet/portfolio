import { useEffect, useState } from "react";
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

  return (
    <>
      <button
        type="button"
        className="fixed z-10 right-2 top-2 text-lg p-3 rounded-md"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <BsMoonStarsFill className=" text-white text-2xl" /> : <LuSunMoon className=" text-black text-2xl" />}
      </button>
      <div className=" font-jost bg:white dark:bg-slate-900">
        <Home />
      </div>
    </>
  );
}

export default App