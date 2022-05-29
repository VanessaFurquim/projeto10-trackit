import { useState, useContext } from "react";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";

import Header from "../Header";
import CreateNewHabitCard from "./CreateNewHabitCard";
import HabitCard from "./HabitCard";
import Footer from "../Footer";

export default function HabitsPage () {

    const [habits, setHabits] = useState([]);
    const [exibitCreatingModule, setExibitCreatingModule] = useState(false);

    return (
        <HabitsPageContainer>
            <Header />
            <HabitsSubtitle>
                <HabitsSubtitleText>Meus hábitos</HabitsSubtitleText>
                <AddHabitButton onClick = {() => setExibitCreatingModule(!exibitCreatingModule)}>+</AddHabitButton>
            </HabitsSubtitle>
            {exibitCreatingModule && <CreateNewHabitCard />}
            {habits.legth === 0 ?
                (
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                ) : (
                        habits.map((habit) => (
                            <HabitCard
                                key = {habit.id}
                                habit = {habit}
                            />
                        ))
                    )
            }
            <Footer />
        </HabitsPageContainer>
    );

}

const HabitsPageContainer = styledComponent.section`
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HabitsSubtitle = styledComponent.div`
    margin-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HabitsSubtitleText = styledComponent.p`
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
`;

const AddHabitButton = styledComponent.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 26.976px;
    color: #FFFFFF;
    line-height: 34px;
`;