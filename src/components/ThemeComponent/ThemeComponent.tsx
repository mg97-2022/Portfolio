import React, { useEffect, useState, useContext } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import {GiSunflower} from 'react-icons/gi'
import ThemeContext from "../../store/theme-context";
import classes from "./ThemeComponent.module.css";

const ThemeComponent = () => {
  const theme = useContext(ThemeContext)
  const changeThemeHandler = (): void => {
    theme.changeTheme()
  };

  useEffect(() => {
    const bodyElement = document.body;
    if (theme.lightTheme) {
      bodyElement.classList.remove("active");
    } else {
      bodyElement.classList.add("active");
    }
  }, [theme.lightTheme]);

  return (
    <div className={classes.theme} onClick={changeThemeHandler}>
      {theme.lightTheme && <BsFillMoonFill />}
      {!theme.lightTheme && <GiSunflower />}
    </div>
  );
};

export default ThemeComponent;
