import React, { Fragment } from 'react';
//Material components
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import { withStyles } from '@material-ui/core/styles';

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    '.MuiFormControl-root': {
      margin: '0 2%',
      width: '46%',
    },
    '.text-group .MuiFormControl-root': {
      width: '96%',
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '25px',
    },
    '.MuiButtonBase-root': {
      background: 'linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)',
      borderRadius: '25px',
      width: '125px',
    },
  },
})(() => null);

const Form = () => {
  return (
    <Fragment>
      <GlobalCss />
      <form className="form-contact">
        <Box className="form-group">
          <TextField
            label="Nombre"
            placeholder="Ingrese nombre"
            variant="outlined"
          />
          <TextField
            label="Teléfono"
            placeholder="Ingrese teléfono"
            variant="outlined"
          />
        </Box>
        <Box className="form-group">
          <TextField
            label="Email"
            placeholder="Ingrese email"
            variant="outlined"
          />
          <TextField
            label="Asunto"
            placeholder="Ingrese asunto"
            variant="outlined"
          />
        </Box>
        <Box className="form-group text-group">
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
        <Box className="from-group" display="flex" justifyContent="center">
          <Button variant="contained" size="large" color="primary">
            Enviar
          </Button>
        </Box>
      </ form>
    </Fragment>
  )
}

export default Form