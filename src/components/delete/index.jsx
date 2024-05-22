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

    function handleDelete(batata)
    {
        api.delete("/recipe/delete", { data: { "_id": batata } }).then((res) => {
            // alert(res)
            handleClose()
            window.location.reload()
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
                    <Button variant="contained" color="error" onClick={() => handleDelete(props._id)}>
                        Excluir Receita
                    </Button>
                </Box>
            </Fade>
        </Modal>
    );
}
