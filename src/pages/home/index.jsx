import {
    Navbar, LogoContainer, ImgLogo, NavLinks, NavLink,
    DivTitle, H1, H4, ButtonAdd, ButtonIcon,
    DivCards, Card, H2Card, CardIcons, CardButton,
} from './styled.js'

import Logo from '../../assets/img/logo.png'

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar>
                <LogoContainer>
                    <ImgLogo src={Logo} alt="Logo" />
                    <h2>Panela de Ideias</h2>
                </LogoContainer>
                <NavLinks>
                </NavLinks>
            </Navbar>
        </>
    );
}
