import React from 'react'
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Content from './Content';
import { lightTheme, darkTheme,GlobalStyles} from './Themes';

const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor}; 
`;

export default function ThemeFunction() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
            <button onClick={() => themeToggler()} style={{float:'left'}}>Change Theme</button>
            <h1>Nature</h1>
            <Content/>
           
            </StyledApp>
        </ThemeProvider>
    
    )
}
