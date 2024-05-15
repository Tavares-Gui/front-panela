import {
    PageWrapper,
    Navbar, LogoContainer, ImgLogo, H2, NavLinks, NavLink,
    DivTitle, H1, H4, ButtonAdd, ButtonIcon,
    DivCards, Card, CardTittle, H2Card, ButtonIcons, CardIcons, P, CardButton,
} from './styled.js'

import Logo from '../../assets/img/logo.png'
import Add from '../../assets/icon/botao-adicionar.png'
import Edit from '../../assets/icon/botao-editar.png'
import Trash from '../../assets/icon/trash.png'

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <>
            <PageWrapper>
                <Navbar>
                    <LogoContainer>
                        <ImgLogo src={Logo} alt="Logo" />
                        <H2>Panela de Ideias</H2>
                    </LogoContainer>
                    <NavLinks>
                    </NavLinks>
                </Navbar>

                <DivTitle>
                    <H1>Receitas</H1>
                    <H4>Adicionar Receita</H4>
                    <ButtonAdd>
                        <ButtonIcon src={Add}></ButtonIcon>
                    </ButtonAdd>
                </DivTitle>

                <DivCards>
                    <Card>
                        <CardTittle>
                            <H2Card>Nome</H2Card>
                            <ButtonIcons>
                                <CardIcons src={Edit}></CardIcons>
                            </ButtonIcons>
                            <ButtonIcons>
                                <CardIcons src={Trash}></CardIcons>
                            </ButtonIcons>
                        </CardTittle>

                        <P>
                            Descrição
                        </P>

                        <CardButton>
                            Ver Receita
                        </CardButton>
                    </Card> 
                </DivCards>
            </PageWrapper>
        </>
    );
}
