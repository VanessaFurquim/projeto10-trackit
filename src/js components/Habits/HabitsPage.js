import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";

import { LIST_OF_HABITS_API } from "../API";
import Header from "../Header";
import CreateNewHabitCard from "./CreateNewHabitCard";
import HabitCard from "./HabitCard";
import Footer from "../Footer";

export default function HabitsPage () {

    const {user} = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [exibitCreatingModule, setExibitCreatingModule] = useState(false);

    useEffect(() => {
        if(user.token) loadHabits();
    }, []);

    function loadHabits () {

        const config = {headers: {"Authorization": `Bearer ${user.token}`}};
        
        if (user.token) {
            const listOfHabits = axios.get(LIST_OF_HABITS_API, config);
            
            listOfHabits.then(APIResponse => setHabits(APIResponse.data));
        }
    }

    function cancelNewHabitCard () {
        setExibitCreatingModule(false);
    }

    return (
        <HabitsPageContainer>
            <Header />
            <HabitsSubtitle>
                <HabitsSubtitleText>
                    Meus hábitos
                </HabitsSubtitleText>
                <AddHabitButton 
                    onClick = {() => setExibitCreatingModule(!exibitCreatingModule)}
                >
                +
                </AddHabitButton>
            </HabitsSubtitle>
            {
                exibitCreatingModule ?
                    (
                    <CreateNewHabitCard
                        canceledNewHabitCard = {cancelNewHabitCard}
                        reloadData = {loadHabits}
                    />
                    ) : (
                        habits.legth === 0 ?
                            (
                                <NoHabitsMessage>
                                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                                </NoHabitsMessage>
                            ) : (
                                    habits.map((habit) => (
                                        <HabitCard
                                            key = {habit.id}
                                            habit = {habit}
                                            reloadData = {loadHabits}
                                        />
                                    ))
                                )
                        )
            }
            <Footer />
        </HabitsPageContainer>
    );

}

const HabitsPageContainer = styledComponent.section`
    background: #E5E5E5;
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

const NoHabitsMessage = styledComponent.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
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