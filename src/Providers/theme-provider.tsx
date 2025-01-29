import React, {FC, useState, createContext, ReactNode} from 'react';

type Theme = "light" | "dark";

interface Props {
    children: ReactNode;
}

interface InitialState {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<InitialState>({
    theme: "light",
    changeTheme: () => {
    },
});

export const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const changeTheme = () => {
        setTheme((prevState: Theme) => {
            return prevState === "light" ? "dark" : "light";
        })
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
