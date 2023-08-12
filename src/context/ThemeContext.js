import { createContext } from "react";

const ThemeContext = createContext();     // return a new context object and it is now stored in ThemeContext

// on that context object is context provider component

// <ThemeContext.Provider > -> this is the provider component that would wraps any parts of component tree to provide it with the value of this context 



export default ThemeContext