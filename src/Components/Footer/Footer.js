import React, { Fragment } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
//Material components
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
//App components
import AboutUsMenu from './Components/AboutUsMenu/AboutUsMenu';
import ContactMenu from './Components/ContactMenu/ContactMenu';
import SocialMediaMenu from './Components/SocialMediaMenu/SocialMediaMenu'

const Footer = () => {
  return (
    <Fragment>
      <Box className="footer">
        <Container>
          <Grid container>
            <Grid item xs={12} lg={4}>
              <Typography variant="h6" className="head-column">
                Nosotros
              </Typography>
              <AboutUsMenu />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h6" className="head-column">
                Contacto
              </Typography>
              <ContactMenu />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography variant="h6" className="head-column">
                Siguenos
              </Typography>
              <SocialMediaMenu />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}

export default Footer;