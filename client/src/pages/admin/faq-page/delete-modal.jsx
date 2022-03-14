import React from 'react';
import { Box, Button } from '@mui/material';
import BasicModal from '../../../components/modal';


const DeleteModal = ({ open, onClose, onSubmit }) => {

  return (
    <BasicModal open={open} onClose={onClose} title="Are you sure you want to delete this item?">
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        <Button variant="contained" color="lightBlue" size="large" onClick={onSubmit}>Delete</Button>
        <Button variant="contained" color="neutral" size="large" onClick={onClose}>Cancel</Button>
      </Box>
    </BasicModal>
  )
}

export default DeleteModal;
