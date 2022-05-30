import { useContext } from "react";
import axios from "axios";
import { confirm } from "react-confirm-box";
import styledComponent from "styled-components";

import UserContext from "../../contexts/UserContext";

export default function HabitCardTemplate ( { habit, reloadData,  Weekdays, EachWeekDay } ) {

    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const {user} = useContext(UserContext);

    function deleteHabitCard({user}) {
        
        // function confirmDeletion() {

        //     const onClick = async () => {
        //         const result = await confirm("Are you sure?");
        //         if (result) {
        //           console.log("You click yes!");
        //           return;
        //         }
        //         console.log("You click No!");
        //       };

        //     const confirmationWindow = window.confirm("Deseja excluir este hábito permanentemente?") ? onConfirm("Sim") : onCancel("Cancelar");
        // }

        // confirmationWindow = "Sim"

        if (confirm("Deseja excluir este hábito permanentemente?")) {

            const config = {headers: {Authorization: `Bearer ${user.token}`}};

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
                    <img src = "../../assets/trashcan.png" onClick = {deleteHabitCard}/>
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

const DeleteImage = styledComponent.img`
    width: 13px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 13px;
        height: 15px;
    }
`;