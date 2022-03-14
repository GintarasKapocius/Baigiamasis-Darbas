import React, { useState } from 'react';
import { IconButton, Divider, Typography, Box } from '@mui/material';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import DeleteModal from './delete-modal';
import UpdateModal from './update-modal'

const FaqItem = ({
  id,
  title,
  details,
  divider,
  onDelete,
  onEdit,
  edited,
  onUpdate
}) => {

  const [openDelete, setOpenDelete] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);


  const handleDelete = () => {
    onDelete(id);
    setOpenDelete(false)
  }

  const handleDeleteChange = () => {
    onEdit({ id });
    setOpenDelete(true);
  };

  const handleUpdateChange = () => {
    onEdit({ id });
    setOpenUpdate(true);
  };
  const handleUpdate = ({ title, details }) => {
    onUpdate({ title, details, id });
    setOpenUpdate(false)
  }

  return (
    <>
      <DeleteModal open={openDelete} onClose={() => setOpenDelete(false)} onSubmit={handleDelete}></DeleteModal>
      <UpdateModal
        title={title}
        details={details}
        open={openUpdate} onClose={() => setOpenUpdate(false)} onSubmit={handleUpdate}></UpdateModal>
      <Box
        sx={{
          bgcolor: edited ? 'grey.200' : 'none',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 2,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Typography variant='h6' color='neutral.dark'>{title}</Typography>
          <Typography variant='body' color='black.main'>{details}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton onClick={handleUpdateChange}>
            <ModeEditOutlineRoundedIcon color="action" />
          </IconButton>
          <IconButton onClick={handleDeleteChange}>
            <HighlightOffRoundedIcon color="action" />
          </IconButton>
        </Box>
      </Box>
      {divider ? <Divider /> : null}
    </>
  );
};

export default FaqItem;
