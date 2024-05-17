import React, { useState } from 'react';

import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

import { api } from '../../services/api.jsx'
import { useNavigate } from "react-router-dom";

export default function DeleteConfirmationModal({ open, handleClose, props }) {
    const navigate = useNavigate();

    function handleDelete()
    {
        console.log(props)
        api.delete("/recipe/delete", {"_id": props}).then((res) => {
            console.log(res)
            // alert(res)
            handleClose()
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    return (
        <Modal
            aria-labelledby="delete-confirmation-modal-title"
            aria-describedby="delete-confirmation-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={{ ...style }}>
                    <Typography variant="h4" id="delete-confirmation-modal-title" gutterBottom>
                        Tem certeza que gostaria de excluir esta receita?
                    </Typography>
                    <Button variant="contained" color="error" onClick={handleDelete}>
                        Excluir Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
