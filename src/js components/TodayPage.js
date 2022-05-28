import { useState } from "react";
import styledComponent from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function TodayPage () {

    const [completedHabitsPercentage, setCompletedHabitsPercentage] = useState(0);

    function ShowTodaysHabits () {
        
        const TodaysHabits = axios.get(TODAYS_HABITS_API);
    
        TodaysHabits.then(APIResponse => {
            setCompletedHabitsPercentage(APIResponse.data);
        });
    };

    return (
        <Container>
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
            <HabitCard />
            <Footer />
        </Container>
    );
}

const Container = styledComponent.section`
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