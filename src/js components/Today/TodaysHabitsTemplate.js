import styledComponent from "styled-components";

export default function TodaysHabitsTemplate ({habit, checked}) {

    return (
        <TemplateContainer>
            <Text>
                <p>{habit.name}</p>
                <div>
                    Sequência atual: <Sequence
                        highlight = {habit.done}
                    >
                        {habit.currentSequence} dia(s)
                    </Sequence>
                </div>
                <div>
                    Seu recorde: 
                    <Sequence
                        highlight = {habit.done}
                    >
                        {habit.highestSequence} dia(s)
                    </Sequence>
                </div>
            </Text>
            <Checkmark checked = {habit.done} onClick = {checked}>
                <ion-icon name = "checkbox"></ion-icon>
            </Checkmark>
        </TemplateContainer>
    );
}

const TemplateContainer = styledComponent.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styledComponent.div`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        font-size: 20px;
        color: #666666;
        line-height: 25px;
    }

    div {
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }
`;

const Sequence = styledComponent.span`
    color: ${(props) => (props.highlight ? "#8FC549" : "#666666")};
`;

const Checkmark = styledComponent.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon {
        width: 75px;
        height: 75px;
        color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
    }
`;