// creating our custom hook

// hook for accesing a context value in this component
import { useContext } from 'react'

// importing the context(name of the context is ThemeContext)
import ThemeContext from '../context/ThemeContext'

const useTheme = () => {
    const context = useContext(ThemeContext);     // this function returns the value prop

    if(context === undefined) {
        // the context is undefined when we trying to use our context outside the scope of it
        // context provider either wrap entire application or it just wrap the part of it
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }

    return context;
}

export default useTheme