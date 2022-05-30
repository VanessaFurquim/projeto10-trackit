import styledComponent from "styled-components";

export default function TodaysHabitsTemplate ({habit, changeColor}) {

    return (
        <TemplateContainer>
            <Text>
                <p>{habit.name}</p>
                <div>
                    Sequência atual: <Sequence
                        highlight = {false}
                    >
                        {habit.currentSequence} dia(s)
                    </Sequence>
                </div>
                <div>
                    Seu recorde: 
                    <Sequence
                        highlight = {false}
                    >
                        {habit.highestSequence} dia(s)
                    </Sequence>
                </div>
            </Text>
            <Checkmark checked = {habit.done} onClick = {changeColor}>
                <img src = "../../assets/checkmark.png" />
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
    background: ${(props) => (props.highlight ? "#8FC549" : "#EBEBEB")};
    border: 1px solid #E7E7E7;
    border-radius: 5px;

    img {
        width: 35px;
        height: auto;
    }
`;