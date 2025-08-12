import { useContext } from "react"
import ThemeProvider from "../provider/ThemeProvider" 

export const getTheme = ()=>{
    const getData = useContext(ThemeProvider)
    return getData;
}