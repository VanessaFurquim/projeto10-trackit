import { useContext } from "react";
import styledComponent from "styled-components";

import UserContext from "../contexts/UserContext";

import logotype from "../assets/TrackIt.png";

export default function Header () {

    const {user} = useContext(UserContext);

    return (
        <HeaderContainer>
            <Logotype src = {logotype} alt = "header logo" />
            <UserProfilePicture src = {user ? user.image : ""} alt = "user profile picture" />
        </HeaderContainer>
    );
}

const HeaderContainer = styledComponent.div`
    width: 375px;
    height: 70px;
    background: #126BA5;
    padding: 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;

const Logotype = styledComponent.img`
    width: 97px;
    height: auto;
`;

const UserProfilePicture = styledComponent.img`
    width: 51px;
    height: auto;
    border-radius: 100px;
`;