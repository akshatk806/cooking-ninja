import { createContext, useReducer } from "react";

const ThemeContext = createContext();     // return a new context object and it is now stored in ThemeContext

// on that context object is context provider component

// <ThemeContext.Provider > -> this is the provider component that would wraps any parts of component tree to provide it with the value of this context 

const themeReducer = (state, action) => {
    switch(action.type) 
    {
        case 'CHANGE_COLOR': return { ...state, color: action.payload }    // return an updated state object, the color property override the value because javasciprt object has unique key

        default: return state
    }
}

// ThemeProiver is just a custom react component, and this componenet has a template in which we render the ThemeContext provider component and inside that theme contect provider we pass any children component that this ThemeProvider component wraps and that means all the children component get access to the ThemeProvider context value 
// any component in the application could access the value provided as prop in line 13 below by our Theme context provider
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c'    // default color
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })   // dispatch function triggers to themeReducer(reducer funtion)
    }
    // using type we can manage multiple state  

    // we gonna return a template, and the template is context provider component that just wraps our childer
    return (
        <ThemeContext.Provider value={{...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext