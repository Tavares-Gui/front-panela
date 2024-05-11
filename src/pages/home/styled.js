import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #2D4D60;
    width: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const ImgLogo = styled.img`
    width: 80px;
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
    
`;

export const H1 = styled.h1`
    
`;

export const H4 = styled.h4`
    
`;

export const ButtonAdd = styled.button`
    
`;

export const ButtonIcon = styled.img`
    
`;

export const DivCards = styled.div`
    
`;

export const Card = styled.div`
    
`;

export const H2Card = styled.h2`
    
`;

export const CardIcons = styled.img`
    
`;

export const CardButton = styled.button`
    
`;
