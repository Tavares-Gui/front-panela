import React, { useState } from 'react';

import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material';

const style = {
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
    '@media (min-width:600px)': {
        width: 600,
    },
    overflowY: 'auto',
    maxHeight: '90vh',
};

export default function ViewModal({ open, handleClose }) {
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
                        Nome
                    </Typography>
                    <Typography variant="h5" id="transition-modal-description" gutterBottom>
                        Descrição
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Ingredientes
                    </Typography>
                    <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
                        <li>Ingrediente 1</li>
                    </ul>
                    <Typography variant="h5" gutterBottom>
                        Modo de Preparo
                    </Typography>
                    <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
                        <li>Passo 1</li>
                    </ul>
                </Box>
            </Fade>
        </Modal>
    );
}
