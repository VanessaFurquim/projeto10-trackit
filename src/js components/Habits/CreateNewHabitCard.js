import { useState } from "react";
import styledComponent from "styled-components";

import EachWeekDay from "./EachWeekDay";

export default function CreateNewHabitCard () {

    const [habitName, setHabitName] = useState("");

    return (
        <CreateNewHabitCardContainer>
            <form>
                <HabitInput placeholder = "nome do hábito" onChange = {(event) => setHabitName(event.target.value)} value = {habitName} />
                <Weekdays>

                </Weekdays>
                <Buttons>
                    <CancelButton />
                    <SaveButton />
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

    p {
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
`;

const HabitInput = styledComponent.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    color: #DBDBDB;
    line-height: 25px;
`;

const Weekdays = styledComponent.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Buttons = styledComponent.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const CancelButton = styledComponent.button`
    font-size: 15.976px;
    color: #52B6FF;
    line-height: 20px;
    text-align: center;
    border: none;
`;

const SaveButton = styledComponent.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 20px;
    text-align: center;
    margin-left: 20px;s
`;