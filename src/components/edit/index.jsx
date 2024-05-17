import React, { useState } from 'react';

import { Backdrop, Box, Modal, Fade, Typography, Button } from '@mui/material';

import BtnAdd from '../../assets/icon/botao-adicionar.png'

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
    justifyContent: 'space-between'
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

export default function EditModal({ open, handleClose }) {
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
                    <input type='text' style={{ ...styleInput }}></input>
                    <Typography variant="h6" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <textarea style={{ ...styleTextDesc }}></textarea>
                    <div style={{ ...styleDiv }}>
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Qtd.
                            </Typography>
                            <input type='number' style={{ ...styleInputQtd }}></input>
                        </div>
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Ingrediente
                            </Typography>
                            <input type='text' style={{ ...styleInput }}></input>
                        </div>
                        <div>
                            <Typography variant="h6" id="transition-modal-description" gutterBottom>
                                Modo de Preparo
                            </Typography>
                            <input type='text' style={{ ...styleInput }}></input>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <button
                                style={styleBtn.button}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img src={BtnAdd} alt="Botão Adicionar" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                        <div>
                            <button
                                style={styleBtn.button}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img src={BtnAdd} alt="Botão Adicionar" style={{ height: '100%', width: '100%' }} />
                            </button>
                        </div>
                    </div>

                    <Button variant="contained" color="success">
                        Salvar Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
