import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Background

export const ImgBg = styled.img `
    display: flex;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    height: 100vh;
    width: 100vw;
`;

// Animation of slide between login and sign-up

const slideAnimation = keyframes `
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

// Container for login and sign up

export const ContainerLogin = styled.div `
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 50vw;
    background-color: #2D4D60;
    margin-left: ${({ isSignUp }) => (isSignUp ? "0" : "50vw")};
    animation: ${({ isSignUp }) => (isSignUp ? slideAnimation : "")} 0.8s forwards;
`;
    
export const ContainerSignUp = styled.div `
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 50vw;
    background-color: #2D4D60;
    margin-right: ${({ isSignUp }) => (isSignUp ? "50vw" : "0")};
    animation: ${({ isSignUp }) => (isSignUp ? "" : slideAnimation)} 0.8s forwards;
`;

// Divs of login and sign up

export const DivLogin = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const DivSignUp = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

// Img of login and sign up

export const ImgLogin = styled.img `
    margin-top: 0;
    margin-right: 78px;
    margin-bottom: 0;
    margin-left: 78px;
    width: 280px;
    height: 300px;
`;

export const ImgSignUp = styled.img `
    margin-top: 0;
    margin-right: 78px;
    margin-bottom: 0;
    margin-left: 78px;
    width: 280px;
    height: 300px;
`;

// Img of login and sign up

export const H2Login = styled.h2 `
    color: white;
`;

export const H2SignUp = styled.h2 `
    color: white;
`;

// Form of login and sign up

export const FormLogin = styled.form `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const FormSignUp = styled.form `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

// Labels of login and sign up

export const LabelsLogin = styled.label `
    display: flex;
    width: 75%;
    justify-content: flex-start;
    color: white;
    margin-top: 20px;
`;

export const LabelsSignUp = styled.label `
    display: flex;
    width: 75%;
    justify-content: flex-start;
    color: white;
    margin-top: 20px;
`;

// Inputs for login and sign up

export const InputLogin = styled.input `
    height: 30px;
    border-radius: 20px;
    border: none;
    width: 75%;
`;

export const InputSignUp = styled.input `
    height: 30px;
    border-radius: 20px;
    border: none;
    width: 75%;
`;

// Inputs for login and sign up

export const HrLogin = styled.hr `
    margin-top: 30px;
    margin-bottom: 0;
    width: 100%;
    width: 75%;
`;

export const HrSignUp = styled.hr `
    margin-top: 30px;
    margin-bottom: 0;
    width: 100%;
    width: 75%;
`;

// Inputs for login and sign up

export const PLogin = styled.p `
    color: white;
`;

export const PSignUp = styled.p `
    color: white;
`;

// Inputs for login and sign up

export const ALogin = styled.a `
    cursor: pointer;
`;

export const ASignUp = styled.a `
    cursor: pointer;
`;

// Inputs for login and sign up

export const ButtonLogin = styled.button `
    width: 50%;
    border-radius: 20px;
    border: none;
`;

export const ButtonSignUp = styled.button `
    width: 50%;
    border-radius: 20px;
    border: none;
`;