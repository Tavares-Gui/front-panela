import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
    background-color: #E7E7E7;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    padding: 2rem 2rem;
    background-color: #2D4D60;
    width: 100vw;
    height: 50px;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const ImgLogo = styled.img`
    width: 80px;
`;

export const H2 = styled.h2`
    color: white;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
`;

export const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;

export const H1 = styled.h1`
    margin-top: 20px;
`;

export const H4 = styled.h4`
    margin-top: 20px;
`;

export const ButtonAdd = styled.button`
    background-color: #E7E7E7;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    &:hover {
        scale: 1.05;
    }
`;

export const ButtonIcon = styled.img`
    height: 48px;
`;

export const DivCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Card = styled.div`
    flex-basis: calc(25% - 20px);
    margin: 20px;
    height: 180px;
    border-radius: 20px;
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardContent = styled.div`
    flex: 1;
`;

export const CardTittle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const H2Card = styled.h2``;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const ButtonIcons = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: 0.5s;

    &:hover {
        scale: 1.05;
    }
`;

export const CardIcons = styled.img`
    height: 32px;
    width: 32px;
`;

export const P = styled.p``;

export const CardButton = styled.button`
    border: 2px solid transparent;
    border-radius: 20px;
    transition: border-color 0.5s;
    padding: 10px;

    &:hover {
        border-color: gray;
    }
`;
