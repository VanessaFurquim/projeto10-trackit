import { useContext } from "react";
import axios from "axios";
import { confirm } from "react-confirm-box";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";

export default function HabitCardTemplate ( { habit, reloadData } ) {

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const {user} = useContext(UserContext);

    function deleteHabitCard() {
 
        if (confirm("Deseja excluir este hábito permanentemente?")) {

            const config = {headers: {"Authorization": `Bearer ${user.token}`}};

            const deleteRequest = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config);

            deleteRequest.then(APIResponse => {
                reloadData();
            });

            deleteRequest.catch(error => {
                alert("Algo deu errado, tente novamente.");    
            });
        }
    }

    return (
        <HabitContainer>
            <HabitCardHeader>
                <HabitName>{habit.name}</HabitName>
                <DeleteImage>
                    <img src = "../../assets/trashcan.png" onClick = {deleteHabitCard} />
                </DeleteImage>
            </HabitCardHeader>
            <Weekdays>
                    {
                        weekDays.map((weekDay, index) => (
                            <EachWeekDay
                                key = {index}
                                index = {index}
                                isSelected = {habit.days.includes(index)}
                            >
                                {weekDay}
                            </EachWeekDay>
                        ))
                    }
                </Weekdays>
        </HabitContainer>
    );
}

const HabitContainer = styledComponent.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const HabitCardHeader = styledComponent.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HabitName = styledComponent.p`
    font-size: 20px;
    color: #666666;
    line-height: 25px;
`;

const DeleteImage = styledComponent.div`
    width: 13px;
    height: 25px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 13px;
        height: 15px;
        color: #666666;
    }
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