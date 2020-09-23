import React, { Fragment } from 'react';
import './ContactSection.css';
import ContactImg from '../../Assets/Image/contact-img.png';
//Material components
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
//App components
import Title from './Components/Title/Title';
import Form from './Components/Form/Form';


const ContactSection = () => {

  return (
    <Fragment>
      <Box className="contact-section">
        <Container>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Box className="contact-box">
                <Title title="Escríbenos para más información" />
                <Form />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box display="flex" justifyContent="center">
                <figure className="contact-img">
                  <img src={ContactImg} alt="Contact img" className="img-fluid"/>
                </figure>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Fragment>
  );
}

export default ContactSection;