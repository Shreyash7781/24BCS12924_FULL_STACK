import ThemeContext from "./context/ThemeContext";
import React,{useState} from "react";
function Header(){
    const {theme, setTheme} = useContext(ThemeContext);
    return(
        <div>
            <h2>
                Current Theme: {theme}
            </h2>
            <button onClick={()=>setTheme (Theme==="dark"?"light":"dark")}>
            </button>
        </div>
    )
}
export default Header;