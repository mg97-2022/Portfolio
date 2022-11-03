import React, { useState } from "react";
import NavComponent from "../NavComponent/NavComponent";
import ThemeComponent from "../ThemeComponent/ThemeComponent";
import NavButton from "../NavComponent/NavButton/NavButton";
import classes from "./Layout.module.css";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const showSideNavHandler = (): void => {
    setShowNav((prev: boolean): boolean => !prev);
  };
  return (
    <div className={classes.layout}>
      <NavButton showNav={showNav} onShowNav={showSideNavHandler} />
      <ThemeComponent />
      <NavComponent showNav={showNav} />
      {children}
    </div>
  );
};

export default Layout;
