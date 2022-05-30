import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import Isologotype from "./Isologotype";
import { REGISTER_USER_API } from "./API";

export default function SignUpPage () {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function RegisteringUser (event) {

        event.preventDefault();

        const registerUser = axios.post(REGISTER_USER_API, {email, password, name, image});
        
        registerUser.then(APIresponse => {
            navigate("/");
        });
        
        registerUser.catch(error => {
            alert("Algo deu errado com o seu cadastro. Tente novamente, por favor.");
        });
    }

    return (
        <SignUpPageContainer>
            <Isologotype />
            <Form onSubmit = {RegisteringUser}>
                <EmailInput
                    type = "email"
                    placeholder = "email"
                    onChange = {(event) => setEmail(event.target.value)}
                    value = {email}
                />
                <PasswordInput
                    type = "password"
                    placeholder = "senha"
                    onChange = {(event) => setPassword(event.target.value)}
                    value = {password}
                />
                <NameInput
                    type = "name"
                    placeholder = "nome"
                    onChange = {(event) => setName(event.target.value)}
                    value = {name}
                />
                <ProfilePictureInput
                    type = "url"
                    placeholder = "foto"
                    onChange = {(event) => setImage(event.target.value)}
                    value = {image}
                />
                <SignUpButton type = "submit">
                    Cadastrar
                </SignUpButton>
            </Form>
            <Link to = "/">
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </SignUpPageContainer>
    );
}

const SignUpPageContainer = styledComponent.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 14px;
        font-weight: 400;
        color: #52B6FF;
        line-height: 17px;
        text-decoration-line: underline;
    }
`;

const Form = styledComponent.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EmailInput = styledComponent.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
    line-height: 25px;
`;

const PasswordInput = styledComponent.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
    line-height: 25px;
`;

const NameInput = styledComponent.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-size: 20px;
color: #DBDBDB;
line-height: 25px;
`;

const ProfilePictureInput = styledComponent.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-size: 20px;
color: #DBDBDB;
line-height: 25px;
`;

const SignUpButton = styledComponent.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-weight: 400;
    font-size: 21px;
    color: #FFFFFF;
    line-height: 26px;
`;