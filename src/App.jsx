import { useEffect, useState } from "react";
import Home from "./component/Home"

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
        document.documentElement.classList
    }
  })

  return (
    <>
      <div className=" font-jost bg:white dark:bg-slate-900">
        <Home />
      </div>
    </>
  );
}

export default App