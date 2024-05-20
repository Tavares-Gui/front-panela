import {
    PageWrapper,
    Navbar, LogoContainer, ImgLogo, H2, NavLinks, NavLink,
    DivTitle, H1, H4, ButtonAdd, ButtonIcon,
    DivCards, CardContent, Card, CardTittle, ButtonGroup, H2Card, ButtonIcons, CardIcons, P, CardButton,
} from './styled.js'

import Logo from '../../assets/img/logo.png'
import Trash from '../../assets/icon/trash.png'
import Edit from '../../assets/icon/botao-editar.png'
import Add from '../../assets/icon/botao-adicionar.png'

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AddModal from '../../components/add/index.jsx'
import EditModal from '../../components/edit/index.jsx'
import ViewModal from '../../components/view/index.jsx'
import DeleteConfirmationModal from '../../components/delete/index.jsx'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function Home() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);

    const handleOpenEditModal = () => setOpenEditModal(true);
    const handleCloseEditModal = () => setOpenEditModal(false);

    const handleOpenViewModal = () => setOpenViewModal(true);
    const handleCloseViewModal = () => setOpenViewModal(false);

    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);


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
                    <ButtonAdd onClick={handleOpenAddModal}>
                        <ButtonIcon src={Add}></ButtonIcon>
                    </ButtonAdd>
                </DivTitle>

                <DivCards>
                    <Card>
                        <CardTittle>
                            <H2Card>Nome</H2Card>
                            <ButtonGroup>
                                <ButtonIcons onClick={handleOpenEditModal}>
                                    <CardIcons src={Edit}></CardIcons>
                                </ButtonIcons>
                                <ButtonIcons onClick={handleOpenDeleteModal}>
                                    <CardIcons src={Trash}></CardIcons>
                                </ButtonIcons>
                            </ButtonGroup>
                        </CardTittle>

                        <P>
                            Descrição
                        </P>

                        <CardButton onClick={handleOpenViewModal}>
                            Ver Receita
                        </CardButton>
                    </Card>
                </DivCards>
            </PageWrapper>

            <AddModal open={openAddModal} handleClose={handleCloseAddModal} />
            <EditModal open={openEditModal} handleClose={handleCloseEditModal} />
            <ViewModal open={openViewModal} handleClose={handleCloseViewModal} />
            <DeleteConfirmationModal open={openDeleteModal} handleClose={handleCloseDeleteModal} />
        </>
    );
}
