import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styledComponent from "styled-components";

import Isologotype from "./Isologotype";
import { LOGIN_USER_API } from "./API";

export default function LogInPage () {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function LoggingInUser (event) {

        const logInUser = axios.post(LOGIN_USER_API, {email, password});

        logInUser.then(APIresponse => {
            navigate("/hoje");
        });

        logInUser.catch(error => {
            alert("Login ou senha incorretos. Tente novamente.")
        });

        event.preventDefault();
    }

    return (
        <Container>
            <Isologotype />
            <Form onSubmit = {LoggingInUser}>
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
                <LoginButton type = "submit">
                    Entrar
                </LoginButton>
            </Form>
            <Link to = "/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}

const Container = styledComponent.div`
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

const LoginButton = styledComponent.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-weight: 400;
    font-size: 21px;
    color: #FFFFFF;
    line-height: 26px;
`;

// const Link = styledComponent.p`
//     font-size: 14px;
//     font-weight: 400;
//     color: #52B6FF;
//     line-height: 17px;
//     text-decoration-line: underline;
// `;