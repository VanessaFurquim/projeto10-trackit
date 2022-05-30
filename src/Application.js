import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import UserContext from "./contexts/UserContext";

import LoginPage from "./js components/LogInPage";
import SignUpPage from "./js components/SignUpPage";
import HabitsPage from "./js components/Habits/HabitsPage";
import TodayPage from "./js components/Today/TodayPage";
import HistoryPage from "./js components/HistoryPage";
import ProgressContext from "./contexts/ProgressContext";

export default function Application () {

    const [user, setUser] = useState(
        localStorage.length !== 0 ?
            JSON.parse(localStorage.getItem("list")) :
            {}
        );

    const [completedHabitsPercentage, setCompletedHabitsPercentage] = useState(0);

    return (
        <UserContext.Provider value = {{user, setUser}}>
            <ProgressContext.Provider value = {{completedHabitsPercentage, setCompletedHabitsPercentage}}>
                <BrowserRouter>
                <GlobalStyle />
                    <Routes>
                        <Route path = "/" element = {<LoginPage />} />
                        <Route path = "/cadastro" element = {<SignUpPage />} />
                        <Route path = "/habitos" element = {<HabitsPage />} />
                        <Route path = "/hoje" element = {<TodayPage />} />
                        <Route path = "/historico" element = {<HistoryPage />} />
                    </Routes>
                </BrowserRouter>
            </ProgressContext.Provider>
        </UserContext.Provider>
    );
}

const GlobalStyle = createGlobalStyle`
    * {
        width: 100%;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-weight: 400;
    }

    button {
        border: none;
    }
`;