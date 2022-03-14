import React, { useState, useEffect } from 'react';

import {
  Box,
  Paper,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddModal from './add-modal';

import FaqItem from './faq-item';

import APIService from '../../../services/pages-service';

const AdminFaqPage = () => {


  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState([]);
  const [editedFaqId, setEditedFaqId] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedFaq = await APIService.fetchFaq();
      setFaq(fetchedFaq);
    })();
  }, []);

  const handleAdd = async ({ title, details }) => {
    const id = await APIService.addFaq(title, details);

    const newFaq = {
      title,
      details,
      id,
    };
    setFaq((oldState) => [...oldState, newFaq]);
    setOpen(false);
  };

  const handleDelete = async (id) => {
    await APIService.deleteFaq(id);
    const filtered = faq.filter(item => item.id !== id);
    setFaq(filtered);
  };

  const handleUpdate = async ({ id, title, details }) => {
    await APIService.updateFaq(id, title, details);
    const updatedFaq = faq.map((item) => {
      if (item.id === id) item = { ...item, title, details }
      return item
    });
    setFaq(updatedFaq);
  };

  const editFaq = ({ id }) => {
    if (id === editedFaqId) {
      setEditedFaqId(null);
    } else {
      setEditedFaqId(id);
    }
  };

  return (
    <>
      <AddModal open={open} onClose={() => setOpen(false)} onSubmit={handleAdd}></AddModal>
      <Container sx={{ pt: 16 }}>
        <Box
          sx={{
            pb: 4,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h4' component='h1' color='black.main'>
            Faq
          </Typography>
          <IconButton
            color='lightBlue'
            size='large'
            onClick={() => setOpen(true)}
          >
            <AddCircleRoundedIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
        </Box>
        <Paper sx={{ width: '100%' }} elevation={2}>
          {faq.map(({ id, title, details }, i) => (
            <FaqItem
              key={i}
              id={id}
              title={title}
              details={details}
              onEdit={editFaq}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              edited={id === editedFaqId}
              divider={i < (faq.length - 1)}
            />
          ))}
        </Paper>
      </Container>
    </>
  );
};

export default AdminFaqPage;
