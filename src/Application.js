import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import UserContext from "./contexts/UserContext";

import LoginPage from "./js components/LogInPage";
import SignUpPage from "./js components/SignUpPage";
import HabitsPage from "./js components/Habits/HabitsPage";
import TodayPage from "./js components/TodayPage";

export default function Application () {

    const [user, setUser] = useState(
        localStorage.length !== 0 ?
            JSON.parse(localStorage.getItem("list")) :
            {}
        );

    return (
        <UserContext.Provider value = {{user, setUser}}>
            <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path = "/" element = {<LoginPage />} />
                    <Route path = "/cadastro" element = {<SignUpPage />} />
                    <Route path = "/habitos" element = {<HabitsPage />} />
                    <Route path = "/hoje" element = {<TodayPage />} />
                    {/* <Route path = "/historico" element = {<HistoryPage />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

const GlobalStyle = createGlobalStyle`
    * {
        width: 100%;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    button {
        border: none;
    }
`;