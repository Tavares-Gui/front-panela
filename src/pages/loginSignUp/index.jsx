import {
    ImgBg,
    ContainerLogin, ContainerSignUp,
    DivLogin, DivSignUp,
    ImgLogin, ImgSignUp,
    H2Login, H2SignUp,
    FormLogin, FormSignUp,
    LabelsLogin, LabelsSignUp,
    InputLogin, InputSignUp,
    HrLogin, HrSignUp,
    PLogin, PSignUp,
    ALogin, ASignUp,
    ButtonLogin, ButtonSignUp
} from './styled.js'

import Bg from '../../assets/img/bglogin.png'
import Logo from '../../assets/img/logo.png'

import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function LoginSignUp() {
    const navigate = useNavigate();
    const [cards, setCards] = useState(0);
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [confirmPassword, setConfirmPassword] = useState('');

    async function handleLogin(e)
    {
        e.preventDefault();
    
        const json =
        {
            email,
            password
        }

        try {
            var res = await axios.post('https://back-panela.vercel.app/', json)
            console.log(res.data)
            sessionStorage.setItem("userId", res.data.userId);
            // navigate('/home')
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    async function handleRegister(e)
    {
        e.preventDefault()

        const json = 
        {
            name,
            email,
            password,
            confirmPassword
        }

        try {
            var res = await axios.post('https://back-panela.vercel.app/register', json)
            alert(res.data.message)
            setCards(0)
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <ImgBg src={Bg} />
            {
                cards == 0 &&
                <ContainerLogin>
                    <DivLogin>
                        <ImgLogin src={Logo} alt="Logo" />
                        <H2Login>Login</H2Login>
                        <FormLogin action="">
                            <LabelsLogin htmlFor="email">Email</LabelsLogin>
                            <InputLogin name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <LabelsLogin htmlFor="senha">Senha</LabelsLogin>
                            <InputLogin name='senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                            <HrLogin />

                            <PLogin>Não possui login? <ALogin onClick={() => setCards(1)}>Cadastre-se</ALogin></PLogin>

                            <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                        </FormLogin>
                    </DivLogin>
                </ContainerLogin>
            }
            {
                cards == 1 &&
                <ContainerSignUp>
                    <DivSignUp>
                        <ImgSignUp src={Logo} alt="Logo" />
                        <H2SignUp>Cadastro</H2SignUp>
                        <FormSignUp action="">
                            <LabelsSignUp htmlFor="nome">Nome Completo</LabelsSignUp>
                            <InputSignUp name='nome' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <LabelsSignUp htmlFor="email">Email</LabelsSignUp>
                            <InputSignUp name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <LabelsSignUp htmlFor="senha">Senha</LabelsSignUp>
                            <InputSignUp name='senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <LabelsSignUp htmlFor="confirmarSenha">Confirmar Senha</LabelsSignUp>
                            <InputSignUp name='confirmarSenha' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                            <HrSignUp />

                            <PSignUp>Já possui login? <ASignUp onClick={() => setCards(0)}>Entrar</ASignUp></PSignUp>

                            <ButtonSignUp onClick={handleRegister}>Cadastrar</ButtonSignUp>
                        </FormSignUp>
                    </DivSignUp>
                </ContainerSignUp>
            }

        </>
    );
}
