import React, { useEffect, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import {GiSunflower} from 'react-icons/gi'
import classes from "./ThemeComponent.module.css";

const ThemeComponent = () => {
  const [lightMode, setLightMode] = useState(true);
  const changeThemeHandler = (): void => {
    setLightMode((prev: boolean): boolean => !prev);
  };

  useEffect(() => {
    const bodyElement = document.body;
    if (lightMode) {
      bodyElement.classList.remove("active");
    } else {
      bodyElement.classList.add("active");
    }
  }, [lightMode]);

  return (
    <div className={classes.theme} onClick={changeThemeHandler}>
      {lightMode && <BsFillMoonFill />}
      {!lightMode && <GiSunflower />}
    </div>
  );
};

export default ThemeComponent;
