import React, { Fragment } from 'react';
//Material components
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  TextField: {
    margin: '0 2%',
    width: '46%',
  },
  TextArea: {
    width: '96%',
    margin: '0 2%',
  },
  button: {
    background: 'linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)',
    borderRadius: '25px',
    width: '125px',
  }
});

const Form = () => {
  const classes = useStyle();

  return (
    <Fragment>
      
      <form className="form-contact">
        <Box className="form-group">
          <TextField
            label="Nombre"
            placeholder="Ingrese nombre"
            variant="outlined"
            className={classes.TextField}
          />
          <TextField
            label="Teléfono"
            placeholder="Ingrese teléfono"
            variant="outlined"
            className={classes.TextField}
          />
        </Box>
        <Box className="form-group">
          <TextField
            label="Email"
            placeholder="Ingrese email"
            variant="outlined"
            className={classes.TextField}
          />
          <TextField
            label="Asunto"
            placeholder="Ingrese asunto"
            variant="outlined"
            className={classes.TextField}
          />
        </Box>
        <Box className="form-group text-group">
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            className={classes.TextArea}
          />
        </Box>
        <Box className="from-group" display="flex" justifyContent="center">
          <Button variant="contained" size="large" color="primary" className={classes.button}>
            Enviar
          </Button>
        </Box>
      </ form>
    </Fragment>
  )
}

export default Form