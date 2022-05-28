import styledComponent from "styled-components";
import logo from "../assets/Group 8.png";

export default function Isologotype () {
    return (
        <Container>
            <img src = {logo} alt = "logo" />
        </Container>
    );
}

const Container = styledComponent.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        object-fit: cover;
    }
`;