import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import LoginPage from "./js components/LogInPage";
import SignUpPage from "./js components/SignUpPage";
import TodayPage from "./js components/TodayPage";
import HabitsPage from "./js components/Habits/HabitsPage";

export default function Application () {
    return (
        <>
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
        </>
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