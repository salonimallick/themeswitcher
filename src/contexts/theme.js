import { createContext, useContext } from "react";

//define and all the values in the context here only
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

//makes all the components aware that context exists
export const ThemeProvider = ThemeContext.Provider;

//every component can directly use the context(store)
export default function useTheme() {
    return useContext(ThemeContext);
}