import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material';

import BtnAdd from '../../assets/icon/botao-adicionar.png';
import BtnRemove from '../../assets/icon/sinal-de-menos.png';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    overflowY: 'auto',
    maxHeight: '90vh'
};

const styleInput = {
    width: 200,
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
    width: 400,
    paddingLeft: 10,
    paddingRight: 10,
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#D9D9D9',
};

const styleDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center'
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
        marginTop: 0,
        marginBottom: 0,
        marginRight: 5,
        marginLeft: 5,
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

export default function EditModal({ open, handleClose, props }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingred, setIngred] = useState("");
    const [prep, setPrep] = useState("");
    const [qtd, setQtd] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepare, setPrepare] = useState([]);

    function handleEdit(batata)
    {
        console.log(batata)
        api.put("/recipe/update", { data: { "_id": batata } }).then((res) => {
            console.log(res)
            // alert(res)
            handleClose()
            window.location.reload()
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { quantity: '', name: '' }]);
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleAddPreparation = () => {
        setPreparations([...preparations, '']);
    };

    const handleRemovePreparation = (index) => {
        const newPreparations = preparations.filter((_, i) => i !== index);
        setPreparations(newPreparations);
    };

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
                    <input type='text' style={{ ...styleInput }} />
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <textarea style={{ ...styleTextDesc }}></textarea>
                    
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Ingredientes
                    </Typography>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} style={{ ...styleDiv, alignItems: 'center', marginBottom: '10px' }}>
                            <input
                                type='number'
                                placeholder='Qtd.'
                                style={{ ...styleInputQtd }}
                                value={ingredient.quantity}
                                onChange={(e) => {
                                    const newIngredients = [...ingredients];
                                    newIngredients[index].quantity = e.target.value;
                                    setIngredients(newIngredients);
                                }}
                            />
                            <input
                                type='text'
                                placeholder='Ingrediente'
                                style={{ ...styleInput }}
                                value={ingredient.name}
                                onChange={(e) => {
                                    const newIngredients = [...ingredients];
                                    newIngredients[index].name = e.target.value;
                                    setIngredients(newIngredients);
                                }}
                            />
                            <button
                                style={styleBtnRemove.button}
                                onClick={() => handleRemoveIngredient(index)}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img src={BtnRemove} alt="Remover Ingrediente" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button
                            style={styleBtn.button}
                            onClick={handleAddIngredient}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={BtnAdd} alt="Adicionar Ingrediente" style={{ height: '100%', width: '100%' }} />
                        </button>
                    </div>
                    
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Modos de Preparo
                    </Typography>
                    {preparations.map((preparation, index) => (
                        <div key={index} style={{ ...styleDiv, alignItems: 'center', marginBottom: '10px' }}>
                            <input
                                type='text'
                                placeholder='Modo de Preparo'
                                style={{ ...styleInput }}
                                value={preparation}
                                onChange={(e) => {
                                    const newPreparations = [...preparations];
                                    newPreparations[index] = e.target.value;
                                    setPreparations(newPreparations);
                                }}
                            />
                            <button
                                style={styleBtnRemove.button}
                                onClick={() => handleRemovePreparation(index)}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img src={BtnRemove} alt="Remover Modo de Preparo" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                        <button
                            style={styleBtn.button}
                            onClick={handleAddPreparation}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={BtnAdd} alt="Adicionar Modo de Preparo" style={{ height: '100%', width: '100%' }} />
                        </button>
                    </div>

                    <Button variant="contained" color="success">
                        Salvar Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
