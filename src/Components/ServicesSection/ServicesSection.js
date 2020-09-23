import React, { Fragment } from 'react';
import './ServicesSection.css';
//Material components
import Box from '@material-ui/core/Box/Box';
import Button from '@material-ui/core/Button/Button';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';

const ServicesSection = () => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" className="services-section">
        <Container>
          <Grid container className="grid-container">
            <Grid item xs={8}>
              <Typography variant="h4" align="center">
                Conoce un poco más de nuestro trabajo
              </Typography>
              <Box className="box-typography">
                <Typography variant="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tristique tellus, cursus pellentesque nulla. Sed venenatis bibendum pellentesque.
                </Typography>
              </Box>
              <Box className="box-button">
                <Button variant="contained" size="large" color="primary">
                  Ver más
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}

export default ServicesSection;