import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styledComponent from "styled-components";

import UserContext from "../contexts/UserContext";

import { HABITS_HISTORY_API } from "./API";
import Header from "./Header";
import Footer from "./Footer";

export default function HistoryPage () {

    const {user} = useContext(UserContext);

    const [historyOfHabits, setHistoryOfHabits] = useState([]);

    const config = {headers: {Authorization: `Bearer ${user.token}`}};


    useEffect(() => {
        
        loadHabits();

    }, []);

    function loadHabits () {

        const listOfHabits = axios.get(HABITS_HISTORY_API, config);

        listOfHabits.then(APIResponse => {
            setHistoryOfHabits(APIResponse.data);
        });
    }

    return (
        <>
            <Header />
            <HistoryPageContainer>
                <Subtitle>Histórico</Subtitle>
                {
                historyOfHabits.length === 0 ?
                (
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                ) : (
                    historyOfHabits.map((habit) => (
                            <HistoryHabitsTemplate
                                key = {habit.habits.id}
                                habitName = {habit.name}
                                date = {habit.habits.date}
                                weekday = {habit.habits.weekDay}
                                historyId = {habit.habits.historyId}
                                habitStatus = {habit.habits.done}
                            />
                        )) 
                    )
            }
            </HistoryPageContainer>
            <Footer />
        </>
    );
}

const HistoryPageContainer = styledComponent.div`
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: 17.976px;
        color: #666666;
        line-height: 22px;
    }
`;

const Subtitle = styledComponent.h1`
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
`;

const HistoryHabitsTemplate = styledComponent.div`
    width: 340px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;