import styledComponent from "styled-components";

export default function ShowSubtitleNoHabits () {
    return (
        <SubtitleNoHabits>
            Nenhum hábito concluído ainda
        </SubtitleNoHabits>
    );
}

const SubtitleNoHabits = styledComponent.p`
    font-size: 18px;
    color: #BABABA;
    line-height: 22px;
    margin-left: 18px;
`;