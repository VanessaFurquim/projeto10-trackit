import { useContext } from "react";
import { Link } from "react-router-dom";
import styledComponent from "styled-components";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ProgressContext from '../contexts/ProgressContext';

export default function Footer () {

    const { completedHabitsPercentage } = useContext(ProgressContext);

    return (
        <FooterContainer>
            <Link to = "/habitos">
                <HabitsButton>Hábitos</HabitsButton>
            </Link>
            <CircularProgressbar 
                background
                backgroundPadding = {6}
                value = {Math.ceil(completedHabitsPercentage)}
                text = "Hoje"
                styles = {buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#FFFFFF",
                    pathColor: "#FFFFFF",
                    trailColor: "transparent"
                })}
            />
            <Link to = "/historico">
            <HistoryButton>Histórico</HistoryButton>
            </Link>
        </FooterContainer>
    );
}

const FooterContainer = styledComponent.footer`
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
`;

const HistoryButton = styledComponent.button`
    width: 187.5px;
    height: 70px;
    font-size: 18px;
    color: #52B6FF;
    line-height: 22px;
    text-align: center;
    background: none;
`;