import { useEffect, useState } from "react";
import MoonSvg from "./MoonSvg";
import SunSvg from "./SunSvg";

const DarkMode = () => {
  const [mode, setMode] = useState(true);
  useEffect(() => {
    const theming = async () => {
      if (mode) document.documentElement.classList.remove("dark");
      else document.documentElement.classList.add("dark");
    };
    theming();
  }, [mode]);
  return (
    <div className="mt-4 sm:inline-block sm:ml-2 md:mt-0">
      <span className="cursor-pointer" onClick={() => setMode((prev) => !prev)}>
        {mode ? <MoonSvg /> : <SunSvg />}
      </span>
    </div>
  );
};

export default DarkMode;
