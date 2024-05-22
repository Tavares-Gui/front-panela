import React, { useEffect, useState } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material';

import BtnAdd from '../../assets/icon/botao-adicionar.png';
import BtnRemove from '../../assets/icon/sinal-de-menos.png';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    overflowY: 'auto',
    maxHeight: '90vh',
    '@media (min-width:600px)': {
        width: 600,
    },
};

const styleInput = {
    width: '100%',
    maxWidth: 200,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#D9D9D9'
};

const styleInputQtd = {
    height: 30,
    width: 60,
    paddingLeft: 10,
    paddingRight: 10,
    border: 'none',
    borderRadius: '50px',
    backgroundColor: '#D9D9D9',
};

const styleTextDesc = {
    height: 80,
    width: '100%',
    maxWidth: 400,
    paddingLeft: 10,
    paddingRight: 10,
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#D9D9D9',
};

const styleDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '10px'
};

const styleBtn = {
    button: {
        marginTop: 10,
        height: '48px',
        width: '48px',
        border: 'none',
        background: 'none',
        padding: 0,
        transition: 'transform 0.8s',
        cursor: 'pointer',
    },
    buttonHover: {
        transform: 'scale(1.1)',
    }
};

const styleBtnRemove = {
    button: {
        height: '16px',
        width: '16px',
        border: 'none',
        background: 'none',
        padding: 0,
        transition: 'transform 0.8s',
        cursor: 'pointer',
    },
    buttonHover: {
        transform: 'scale(1.1)',
    }
};

import { api } from '../../services/api.jsx';

export default function EditModal({ open, handleClose, id }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingred, setIngred] = useState("");
    const [prep, setPrep] = useState("");
    const [qtd, setQtd] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepare, setPrepare] = useState([]);

    useEffect(() => {
        api.get(`/recipe/get?id=${id}`).then((res) => {
            setTitle(res.data.title)
            setDescription(res.data.description)
            setIngredients(res.data.ingredients)
            setPrepare(res.data.prepare)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    function handleEdit(batata)
    {
        const body =
        {
            "_id": batata,
            title,
            description,
            ingredients,
            prepare
        }
        console.log(batata)
        console.log(body, "BBBBBBBBBBBBBBBB")
        api.put("/recipe/update", body).then((res) => {
            console.log(body, "AAAAAAAAAAAAAA")
            console.log(res)
            // alert(res)
            handleClose()
            window.location.reload()
        }).catch((error) => {
            console.log(error)
            console.log("Morreu aqui")
            alert(error.response.data.data)
        })
    }

    function handleAddIng() {
        setIngredients([...ingredients, { qtd, ingredient: ingred }]);
        setQtd('');
        setIngred('');
    }

    function handleAddPrep() {
        setPrepare([...prepare, prep]);
        setPrep('');
    }

    function handleIngredientChange(index, field, value) {
        const newIngredients = ingredients.map((item, i) => (
            i === index ? { ...item, [field]: value } : item
        ));
        setIngredients(newIngredients);
    }

    function handlePrepareChange(index, value) {
        const newPrepare = prepare.map((item, i) => (
            i === index ? value : item
        ));
        setPrepare(newPrepare);
    }

    function handleRemoveIng(index) {
        setIngredients(ingredients.filter((_, i) => i !== index));
    }

    function handleRemovePrep(index) {
        setPrepare(prepare.filter((_, i) => i !== index));
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={{ ...styleModal }}>
                    <Typography variant="h4" id="transition-modal-title" gutterBottom>
                        Editar Receita
                    </Typography>
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Nome
                    </Typography>
                    <input type='text' style={{ ...styleInput }} value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <textarea style={{ ...styleTextDesc }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Ingredientes
                    </Typography>
                    {ingredients.map((item, index) => (
                        <div key={index} style={{ ...styleDiv, alignItems: 'center', marginBottom: '10px' }}>
                                <input
                                    type='number'
                                    placeholder='Qtd.'
                                    style={{ ...styleInputQtd }}
                                    value={item.qtd}
                                    onChange={(e) => handleIngredientChange(index, 'qtd', e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Ingrediente'
                                    style={{ ...styleInput }}
                                    value={item.ingredient}
                                    onChange={(e) => handleIngredientChange(index, 'ingredient', e.target.value)}
                                />
                                <button
                                    style={styleBtnRemove.button}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    onClick={() => handleRemoveIng(index)}
                                >
                                    <img src={BtnRemove} alt="Remover Ingrediente" style={{ height: '100%', width: '100%' }} />
                                </button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button
                            style={styleBtn.button}
                            onClick={handleAddIng}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={BtnAdd} alt="Adicionar Ingrediente" style={{ height: '100%', width: '100%' }} />
                        </button>
                    </div>
                    
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Modos de Preparo
                    </Typography>
                    {prepare.map((item, index) => (
                        <div key={index} style={{ ...styleDiv, alignItems: 'center', marginBottom: '10px' }}>
                            <input
                                type='text'
                                placeholder='Modo de Preparo'
                                style={{ ...styleInput }}
                                value={item} onChange={(e) => handlePrepareChange(index, e.target.value)}
                            />
                            <button
                                style={styleBtnRemove.button}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                onClick={() => handleRemovePrep(index)}
                            >
                                <img src={BtnRemove} alt="Remover Modo de Preparo" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button
                            style={styleBtn.button}
                            onClick={handleAddPrep}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={BtnAdd} alt="Adicionar Modo de Preparo" style={{ height: '100%', width: '100%' }} />
                        </button>
                    </div>

                    <Button variant="contained" color="success" onClick={() => handleEdit(id)}>
                        Salvar Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
