import React from 'react';
import { Modal, Typography, Paper, styled } from '@mui/material';

const ModalBg = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: theme.spacing(4),
  width: '50%',

  [theme.breakpoints.down("md")]: {
    width: '85%',
  },
}));

const BasicModal = ({ open, onClose, title, children, }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <ModalBg>
        <Typography variant='h5' component={"h5"} sx={{ textAlign: 'center', mb: 4, color: 'neutral.dark' }}>{title}</Typography>
        {children}
      </ModalBg>
    </Modal>
  );
};

export default BasicModal;
