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

import React, { useEffect, useState } from 'react';
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

import { api } from '../../services/api.jsx'

export default function Home() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openViewModal, setOpenViewModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);  
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([])
    const [modal, setModal] = useState()

    useEffect(() => {
        const userId = sessionStorage.getItem('userId')
        api.get(`/recipe?user=${userId}`).then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleOpenAddModal = () => setOpenAddModal(true);
    const handleCloseAddModal = () => setOpenAddModal(false);

    function handleOpenEditModal(index)
    {
        setOpenEditModal(true);
        setModal(index)
    }
    const handleCloseEditModal = () => setOpenEditModal(false);
    const handleEdit = (recipeId) => {
        const updatedRecipes = [...recipes].filter(recipe => recipe._id !== recipeId);
        setRecipes(updatedRecipes);
    };

    function handleOpenViewModal(index)
    {
        setOpenViewModal(true);
        setModal(index)
    }
    const handleCloseViewModal = () => setOpenViewModal(false);

    function handleOpenDeleteModal(index)
    {
        setOpenDeleteModal(true);
        setModal(index)
    }
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    return (
        <>
        {modal !== null && modal !== undefined &&
            <ViewModal open={openViewModal} handleClose={handleCloseViewModal} props={recipes[modal]} close={() => setModal()}/>}
        {modal !== null && modal !== undefined &&
            <DeleteConfirmationModal open={openDeleteModal} handleClose={handleCloseDeleteModal} props={recipes[modal]}/>}
        {modal !== null && modal !== undefined &&
            <EditModal open={openEditModal} handleClose={handleCloseEditModal} id={recipes[modal]._id} onEdit={handleEdit}/>}

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
                    {recipes.map((item, index) => (
                        <Card key={item._id}>
                            <CardTittle>
                                <H2Card>{item.title}</H2Card>
                                <ButtonGroup>
                                    <ButtonIcons onClick={() => handleOpenEditModal(index)}>
                                        <CardIcons src={Edit}></CardIcons>
                                    </ButtonIcons>
                                    <ButtonIcons onClick={() => handleOpenDeleteModal(index)}>
                                        <CardIcons src={Trash}></CardIcons>
                                    </ButtonIcons>
                                </ButtonGroup>
                            </CardTittle>
                            <P>
                                {item.description}
                            </P>

                            <CardButton onClick={() => handleOpenViewModal(index)}>
                                Ver Receita
                            </CardButton>   
                        </Card>
                        )
                    )}
                </DivCards>
            </PageWrapper>

            <AddModal open={openAddModal} handleClose={handleCloseAddModal} props={sessionStorage.getItem('userId')} />
        </>
    );
}
