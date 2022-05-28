import styledComponent from "styled-components";

export default function Footer () {
    return (
        <Container>
            <HabitsButton>Hábitos</HabitsButton>
            <HistoryButton>Histórico</HistoryButton>
        </Container>
    );
}

const Container = styledComponent.footer`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const HabitsButton = styledComponent.button`
    width: 187.5px;
    height: 70px;
    font-size: 18px;
    color: #52B6FF;
    line-height: 22px;
    text-align: center;
    background: none;
    border: none;
`;

const HistoryButton = styledComponent.button`
    width: 187.5px;
    height: 70px;
    font-size: 18px;
    color: #52B6FF;
    line-height: 22px;
    text-align: center;
    background: none;
    border: none;
`;