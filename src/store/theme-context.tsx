import React, { useState } from "react";

type themeType = {
  lightTheme: boolean;
  changeTheme: () => void;
};

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
});

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  const changeThemeHandler = () => {
    setLightTheme((prev: boolean): boolean => !prev);
  };

  const store: themeType = {
    lightTheme,
    changeTheme: changeThemeHandler,
  };

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
