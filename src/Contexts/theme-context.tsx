"use client";

import {createContext} from "react";

export type Theme = "light" | "dark";

interface InitialState {
    theme: Theme;
    changeTheme: () => void;
}

export const ThemeContext = createContext<InitialState>({
    theme: "light",
    changeTheme: () => {
    },
});