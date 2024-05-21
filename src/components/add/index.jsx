import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material';
import BtnAdd from '../../assets/icon/botao-adicionar.png';

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
    flexWrap: 'wrap',
    gap: '10px'
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

import { api } from '../../services/api.jsx';

export default function AddModal({ open, handleClose, props }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingred, setIngred] = useState("");
    const [prep, setPrep] = useState("");
    const [qtd, setQtd] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepare, setPrepare] = useState([]);

    function handleAdd() {
        let body = {
            title,
            description,
            ingredients,
            prepare,
            "user": props
        };
        api.post("/recipe/create", body).then((res) => {
            console.log(res);
            handleClose();
            window.location.reload();
        }).catch((error) => {
            console.log(body);
            console.log(error);
            alert(error.response.data.message);
        });
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
                        Adicionar Receita
                    </Typography>
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Nome
                    </Typography>
                    <input type='text' style={{ ...styleInput }} value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <textarea style={{ ...styleTextDesc }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div style={{ ...styleDiv }}>
                        {ingredients.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div>
                                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                        Qtd.
                                    </Typography>
                                    <input type='number' style={{ ...styleInputQtd }} value={item.qtd} onChange={(e) => handleIngredientChange(index, 'qtd', e.target.value)}></input>
                                </div>
                                <div>
                                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                        Ingrediente
                                    </Typography>
                                    <input type='text' style={{ ...styleInput }} value={item.ingredient} onChange={(e) => handleIngredientChange(index, 'ingredient', e.target.value)}></input>
                                </div>
                            </div>
                        ))}
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Qtd.
                            </Typography>
                            <input type='number' style={{ ...styleInputQtd }} value={qtd} onChange={(e) => setQtd(e.target.value)}></input>
                        </div>
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Ingrediente
                            </Typography>
                            <input type='text' style={{ ...styleInput }} value={ingred} onChange={(e) => setIngred(e.target.value)}></input>
                        </div>
                        {prepare.map((item, index) => (
                            <div key={index}>
                                <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                    Modo de Preparo
                                </Typography>
                                <input type='text' style={{ ...styleInput }} value={item} onChange={(e) => handlePrepareChange(index, e.target.value)}></input>
                            </div>
                        ))}
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Modo de Preparo
                            </Typography>
                            <input type='text' style={{ ...styleInput }} value={prep} onChange={(e) => setPrep(e.target.value)}></input>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <button
                                style={styleBtn.button}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                onClick={handleAddIng}
                            >
                                <img src={BtnAdd} alt="Adicionar ingrediente" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                        <div>
                            <button
                                style={styleBtn.button}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                onClick={handleAddPrep}
                            >
                                <img src={BtnAdd} alt="Adicionar preparo" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                    </div>
                    
                    <Button variant="contained" color="success" onClick={handleAdd}>
                        Adicionar Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
