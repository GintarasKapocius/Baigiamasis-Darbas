import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import AuthService from '../../services/auth-service';
import routes from '../../routing/routes';

import { Box, Container, Typography, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputField from './components/input-field';
import LoginButton from './components/login-button';

import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().email('Is not valid email').required('Is required'),
  password: yup.string().required('Is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      await AuthService.login({ email, password });
      navigate(routes.AdminHomePage);
    } catch (error) {
      setErrorMsg(error.response.data.message)
    }
  };

  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <Box
      sx={{
        bgcolor: 'lightBlue.main',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: {sm:"65%", md:'45%', lg:'35%'},
        }}
      >
        <Typography
          variant='subtitle2'
          component={'h1'}
          sx={{ mb: 12, mt: -2, color: 'white' }}
        >
          Login
        </Typography>
        {errorMsg ? (
          <Alert sx={{mb:6, width:'100%'}}
            severity='error'
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => setErrorMsg(null)}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
          >
            {errorMsg}
          </Alert>
        ) : null}

        <Box
          component='form'
          onSubmit={handleSubmit}
          isValid={dirty && isValid}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            width: '1',
          }}
        >
          <InputField
            label='Email'
            id='email'
            // Props provided by Formik
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
          />
          <InputField
            label='Password'
            id='password'
            // Props provided by Formik
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
          />
          <LoginButton
            loading={isSubmitting}
            title='Login'
            disabled={!isValid}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
