import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import BasicModal from '../../../components/modal';

const validationSchema = yup.object({
  title: yup.string().min(8, 'At least 8 symbols').required('Is required'),
  details: yup.string().min(8, 'At least 8 symbols').required('Is required'),
});

const initialValues = {
  title: '',
  details: '',
};

const AddModal = ({ open, onClose, onSubmit }) => {

  const handleSubmiting = (data) => {
    onSubmit(data);
    handleReset();
  };

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmiting,
  });

  const buttonDisabled = !isValid || !dirty;

  return (
    <BasicModal open={open} onClose={onClose} title='Add Item'>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          type='text'
          label='Title'
          variant='outlined'
          fullWidth
          name='title'
          // Props provided by Formik
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />
        <TextField
          multiline
          name='details'
          type='text'
          label='Description'
          variant='outlined'
          fullWidth
          // Props provided by Formik
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.details && Boolean(errors.details)}
          helperText={touched.details && errors.details}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            color='lightBlue'
            variant='contained'
            type='submit'
            size='large'
            disabled={buttonDisabled}
            sx={{ mt: 2}}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </BasicModal>
  );
};
export default AddModal;
