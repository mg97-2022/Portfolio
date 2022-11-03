import React from "react";
import { GoThreeBars } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import classes from "./NavButton.module.css";

const NavButton: React.FC<{ onShowNav: () => void; showNav: boolean }> = ({
  onShowNav,
  showNav,
}) => {
  const showSideNavHandler = (): void => {
    onShowNav();
  };
  return (
    <div onClick={showSideNavHandler} className={classes.menu_btn}>
      {showNav && <IoClose />}
      {!showNav && <GoThreeBars />}
    </div>
  );
};

export default NavButton;
