import { useState } from "react";
import axios from "axios";
import styledComponent from "styled-components";

import { TODAYS_HABITS_API } from "./API";
import Header from "./Header";
import Footer from "./Footer";
import SubtitleNoHabits from "./Habits/SubtitleNoHabits";
import SubtitleCompletingHabits from "./Habits/SubtitleCompletingHabits";

export default function TodayPage () {

    const [completedHabitsPercentage, setCompletedHabitsPercentage] = useState(0);

    function ShowTodaysHabits () {
        
        const TodaysHabits = axios.get(TODAYS_HABITS_API);
    
        TodaysHabits.then(APIResponse => {
            setCompletedHabitsPercentage(APIResponse.data);
        });
    };

    return (
        <TodayPageContainer>
            <Header />
            <Date />
            <Subtitle>
            {
                (completedHabitsPercentage === 0) ?
                    <SubtitleNoHabits />
                    :
                    <SubtitleCompletingHabits />
                }
            </Subtitle>
            {/* <HabitCard /> */}
            {/* <Footer /> */}
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