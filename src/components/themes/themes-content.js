import { createContext, useState } from "react";


// export const themes = { 
//     dark: {
//         backgroundColor: 'black',
//         color: 'white'
//     },
//     light: {
//         backgroundColor: 'white',
//         color: 'black'
//     }
// };

export const ThemeContext = createContext({isDark: false});

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false);
    // const theme = isDark ? themes.dark : themes.light;
    
    const toggleTheme = () => {
        setIsDark(!isDark)
    } 
    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeContext;