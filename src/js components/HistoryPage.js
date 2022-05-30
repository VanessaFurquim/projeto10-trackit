import styledComponent from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function HistoryPage () {

    return (
        <HistoryPageContainer>
            <Header />
            <Subtitle>Histórico</Subtitle>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </HistoryPageContainer>
    );
}

const HistoryPageContainer = styledComponent.div`
    width: 100%;
    height: 100vh;
background: #E5E5E5;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
`;

const Subtitle = styledComponent.h1`
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
`;