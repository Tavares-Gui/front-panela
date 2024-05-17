import {
    PageWrapper,
    Navbar, LogoContainer, ImgLogo, H2, NavLinks, NavLink,
    DivTitle, H1, H4, ButtonAdd, ButtonIcon,
    DivCards, Card, CardTittle, H2Card, ButtonIcons, CardIcons, P, CardButton,
} from './styled.js'

import Logo from '../../assets/img/logo.png'
import Trash from '../../assets/icon/trash.png'
import Edit from '../../assets/icon/botao-editar.png'
import Add from '../../assets/icon/botao-adicionar.png'

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import AddModal from '../../components/add/index.jsx'
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

import { api } from '../../services/api.jsx'

export default function Home() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setCloseAddModal(false);

    const handleOpenViewModal = () => setOpenViewModal(true);
    const handleCloseViewModal = () => setOpenViewModal(false);

    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);
    
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const userId = sessionStorage.getItem('userId')
        api.get(`/recipe?user=${userId}`).then((res) => {
            console.log(res.data)
            setRecipes(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    console.log(recipes, "1")
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
                    {recipes.map((item, index) => {
                        return(
                            <Card key={item._id}>
                                <CardTittle>
                                    <H2Card>{item.title}</H2Card>
                                    <ButtonIcons>
                                        <CardIcons src={Edit}></CardIcons>
                                    </ButtonIcons>
                                    <ButtonIcons onClick={handleOpenDeleteModal}>
                                        <CardIcons src={Trash}></CardIcons>
                                    </ButtonIcons>
                                </CardTittle>
    
                                <P>
                                    {item.description}
                                </P>
    
                                <CardButton onClick={handleOpenViewModal}>
                                    Ver Receita
                                </CardButton>
                                <ViewModal open={openViewModal} handleClose={handleCloseViewModal} props={item}/>
                                <DeleteConfirmationModal open={openDeleteModal} handleClose={handleCloseDeleteModal} props={item._id}/>
                            </Card>
                        )
                    })}
                </DivCards>
            </PageWrapper>

            <AddModal open={openAddModal} handleClose={handleCloseAddModal} />
        </>
    );
}
