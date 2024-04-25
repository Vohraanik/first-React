import { createContext, useReducer } from "react"
import { ThemmeReducer } from "./Reducer/Theme.reducer";
import { TOGGLE_THEME } from "./ActionType";



const initialState = {
    theme:'light',
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [state,dispatch] = useReducer(ThemmeReducer,initialState);
    const toggletheme = (val) =>{
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        console.log(newTheme);

        dispatch({type:TOGGLE_THEME,payload:newTheme})
    }

    return (
    <ThemeContext.Provider value={{...state,toggletheme}}>
        {children}
    </ThemeContext.Provider>
    )
}