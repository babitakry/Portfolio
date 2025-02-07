import React from "react";
import useTheme from "../contexts/Theme";


export default function ThemeBtn(){
    const {themeMode, lightTheme, darkTheme } = useTheme();
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
    
}