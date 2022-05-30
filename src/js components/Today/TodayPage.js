import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useState, useEffect, useContext } from "react";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";
import ProgressContext from "../../contexts/ProgressContext"

import { TODAYS_HABITS_API } from "../API";
import Header from "../Header";
import Footer from "../Footer";
import TodaysHabitsTemplate from "./TodaysHabitsTemplate";

export default function TodayPage ({habits}) {

    const {user} = useContext(UserContext);
    const { completedHabitsPercentage, setCompletedHabitsPercentage } = useContext(ProgressContext);

    const [todaysHabits, setTodaysHabits] = useState([]);

    const config = {headers: {Authorization: `Bearer ${user.token}`}};


    useEffect(() => {
        
        loadHabits();

    }, []);

    function loadHabits () {
        const config = {headers: {Authorization: `Bearer ${user.token}`}};

        console.log(config)

        const listOfTodaysHabits = axios.get(TODAYS_HABITS_API, config);

        console.log(listOfTodaysHabits)

        listOfTodaysHabits.then(APIResponse => {
            setTodaysHabits(APIResponse.data);
            calculatePercentage(APIResponse.data);
        });
    }

    function changeColor (habit) {

        let checkmarkAPI = "";

        {
            habit.done ? 
            (
                checkmarkAPI = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, config)
            ) : (
                axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, config)
                )
        }

        checkmarkAPI.then(APIResponse => {
            loadHabits();
        })
    }

    function calculatePercentage (todaysHabits ) {
        const calculatedPercentage = todaysHabits.filter(habit => habit.done).length / todaysHabits.length * 100;
        setCompletedHabitsPercentage(calculatedPercentage);
    }

    return (
        <TodayPageContainer>
            <Header />
            <Date>
                {
                    dayjs().locale("pt-br").format("dddd, DD/MM")
                }
            </Date>
            <Subtitle status = {completedHabitsPercentage > 0}>
            {
                completedHabitsPercentage > 0 ?
                    <SubtitleCompletingHabits>
                        {Math.ceil(completedHabitsPercentage)} % dos hábitos concluídos
                    </SubtitleCompletingHabits>
                    :
                    <SubtitleNoHabits>
                        Nenhum hábito concluído ainda
                    </SubtitleNoHabits>
                }
            </Subtitle>
            {
                todaysHabits.length !==0 ?
                (
                    todaysHabits.map((habit) => (
                        <TodaysHabitsTemplate
                            key = {habit.id}
                            habit = {habit}
                            checked = {() => changeColor(habit)}
                        />
                    )) 
                ) : (
                        console.log("talvez um ternário não seja a melhor opção.")
                    )
            }
            <Footer />
        </TodayPageContainer>
    );
}

const TodayPageContainer = styledComponent.section`
    width: 375px;
    height: auto;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Date = styledComponent.div`
    width: 375px;
    height: auto;
    font-size: 22.976px;
    color: #126BA5;
    line-height: 29px;
    padding-left: 17px;
    margin-top: 100px;
    text-align: flex-start;
`;

const Subtitle = styledComponent.div`
    width: 375px;
    height: auto:
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubtitleCompletingHabits = styledComponent.p`
    font-size: 18px;
    color: #8FC549;
    line-height: 22px;
    margin-left: 18px;
`;

const SubtitleNoHabits = styledComponent.p`
    font-size: 18px;
    color: #BABABA;
    line-height: 22px;
    margin-left: 18px;
`;