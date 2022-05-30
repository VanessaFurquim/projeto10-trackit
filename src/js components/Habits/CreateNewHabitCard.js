import axios from "axios";
import { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.production.min";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";

import { NEW_HABIT_CARD_API } from "../API";

export default function CreateNewHabitCard ({canceledNewHabitCard, reloadData}) {

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const {user} = useContext(UserContext);
    const [habitName, setHabitName] = useState("");
    const [selectedWeekDays, setSelectedWeekDays] = useState([]);

    useEffect(() => (
        console.log(user.user.token)
    ), [user.user.token])

    function markWeekDays (index) {
        // excluindo dias já clicados da array dos selecionados. //
        if (selectedWeekDays.includes(index)) {
            const ArrayOfSelectedWeekDays = selectedWeekDays.filter(weekDaysIndex => weekDaysIndex !== index);
            setSelectedWeekDays(ArrayOfSelectedWeekDays);
        // criando uma array com os dias já selecionados (se algum) e o clicado. //
        } else {
            setSelectedWeekDays([...selectedWeekDays, index]);
        }
    }

    function saveNewHabitCard (event) {

        const config = {headers: {"Authorization": `Bearer ${user.user.token}`}};

        event.preventDefault();

        const saveNewHabitCard = axios.post(NEW_HABIT_CARD_API, {name: habitName, days: selectedWeekDays}, config);

        saveNewHabitCard.then(APIResponse => {
            reloadData();
            // cancelNewHabitCard();
        });
        saveNewHabitCard.catch(error => {
            alert("Não foi possível salvar novo hábito.")
        });
    }

    return (
        <CreateNewHabitCardContainer>
            <form onSubmit = {(event) => saveNewHabitCard(event)}>
                <HabitInput
                    placeholder = "nome do hábito"
                    onChange = {(event) => setHabitName(event.target.value)}
                    value = {habitName} />
                <Weekdays>
                    {
                        weekDays.map((weekDay, index) => (
                            <EachWeekDay
                                key = {index}
                                index = {index}
                                isSelected = {selectedWeekDays.includes(index)}
                                onClick = {() => markWeekDays(index)}
                            >
                                {weekDay}
                            </EachWeekDay>
                        ))
                    }
                </Weekdays>
                <Buttons>
                    <CancelButton
                        type = "button" 
                        onClick = {canceledNewHabitCard}
                    >
                        Cancelar
                    </CancelButton>
                    <SaveButton
                        type = "submit"
                        onClick = {saveNewHabitCard}
                    >
                        Salvar
                    </SaveButton>
                </Buttons>
            </form>
        </CreateNewHabitCardContainer>
    );
}

const CreateNewHabitCardContainer = styledComponent.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HabitInput = styledComponent.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #DBDBDB;
    line-height: 25px;
`;

const Weekdays = styledComponent.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const EachWeekDay = styledComponent.div`
    width: 30px;
    height: 30px;
    background: ${(props) => (props.isSelected ? "#CFCFCF" : "#FFFFFF")};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: ${(props) => (props.isSelected ? "#FFFFFF" : "#DBDBDB")};
    line-height: 25px;
    text-align: center;
`;

const Buttons = styledComponent.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CancelButton = styledComponent.button`
    font-size: 16px;
    color: #52B6FF;
    line-height: 20px;
    text-align: center;
`;

const SaveButton = styledComponent.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 20px;
    text-align: center;
    margin-left: 20px;
`;