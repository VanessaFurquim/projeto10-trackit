import styledComponent from "styled-components";

export default function ShowSubtitleCompletingHabits () {
    return (
        <SubtitleCompletingHabits>
            {"completed habits percentage"} dos hábitos concluídos
        </SubtitleCompletingHabits>
    );
}

const SubtitleCompletingHabits = styledComponent.p`
    font-size: 18px;
    color: #8FC549;
    line-height: 22px;
    margin-left: 18px;
`;