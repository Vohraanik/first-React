import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/Theme.context";
import { TOGGLE_THEME } from "../../context/ActionType";


function Counter(props) {
    const [AddCounter, CountAddState] = useState(0);

    const theme = useContext(ThemeContext);
    console.log(theme);

    const handleTheme = () => {
        theme.toggletheme(ThemeContext.theme)
    }

    const AddState = () => {
        CountAddState(AddCounter + 1)
    }
    const SubState = () => {
        CountAddState(AddCounter - 1)
    }


    return (
        <div className={theme.theme}>
            <h1>This is Counter Component</h1>
            <h1>Add Counter Value is {AddCounter}</h1>

            <button onClick={AddState} disabled={AddCounter < 5 ? false : true}>+</button>
            <button onClick={SubState} disabled={AddCounter > 0 ? false : true}>-</button>

            <button onClick={handleTheme}>Theme</button>

        </div>
    );
}

export default Counter;