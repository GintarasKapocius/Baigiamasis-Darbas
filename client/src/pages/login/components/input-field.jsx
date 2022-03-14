import React from 'react';
import { TextField } from '@mui/material';
import { styled, alpha } from '@mui/system';


const StyledTextField = styled(TextField)(({ theme }) => ({
'label': {
      color: alpha(theme.palette.common.white, 1)
    },
    '& label.Mui-focused': {
      color: alpha(theme.palette.common.white, 1)
    },
    "& label.Mui-disabled": {
      color: alpha(theme.palette.common.white, 0.5)
    },
 
   

    'input': {
    color: alpha(theme.palette.common.white, 1)
    },
    '& input.Mui-focused': {
      color: alpha(theme.palette.common.white, 1)
    },
    '& input.Mui-disabled': {
      WebkitTextFillColor: alpha(theme.palette.common.white, 0.5),
      opacity:0.5
    },
    
    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: alpha(theme.palette.common.white,1)
      },
      '&:hover fieldset': {
        borderColor: alpha(theme.palette.common.white, 0.5)
      },
      '&.Mui-focused fieldset': {
        borderColor: alpha(theme.palette.common.white, 1)
      },
      '&.Mui-disabled fieldset': {
        borderColor: alpha(theme.palette.common.white, 0.5),
      },
    },
  }));


const InputField = ({label, id, name, value,onChange,disabled,error, helperText,onBlur}) => {
  return(
      <StyledTextField
      label={label}
      id={id}
      fullWidth
      variant="outlined"
      autoComplete='off'
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      disabled={disabled}
      />
  )
};

export default InputField;
