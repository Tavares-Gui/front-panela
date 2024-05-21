import React, { useEffect, useState } from 'react';

import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material';

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

export default function ViewModal({ open, handleClose, props }) {
    console.log(props)
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
                <Box sx={{ ...style, textAlign: 'center', overflowY: 'auto', maxHeight: '90vh' }}>
                    <Typography variant="h3" id="transition-modal-title" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="h5" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {props.description}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Ingredientes
                    </Typography>
                    <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
                        {props.ingredients.map((item, index) => {
                            return(
                                    <li key={index}>{item.qtd} {item.ingredient}</li>
                            )
                        })}
                    </ul>
                    <Typography variant="h5" gutterBottom>
                        Modo de Preparo
                    </Typography>
                    <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
                        {props.prepare.map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </Box>
            </Fade>
        </Modal>
    );
}
