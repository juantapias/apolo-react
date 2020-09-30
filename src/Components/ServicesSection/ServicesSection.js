import React, { Fragment } from "react";
import "./ServicesSection.css";
//Material components
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  button: {
    background:
      "linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)",
    borderRadius: "25px",
    width: "125px",
  },
});

const ServicesSection = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Box display="flex" justifyContent="center" className="services-section">
        <Container className="p-section">
          <Grid container className="grid-container">
            <Grid item xs={8}>
              <Typography variant="h4" align="center">
                Conoce un poco más de nuestro trabajo
              </Typography>
              <Box className="box-typography">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque a tristique tellus, cursus pellentesque nulla.
                  Sed venenatis bibendum pellentesque.
                </Typography>
              </Box>
              <Box className="box-button">
                <Button variant="contained" size="large" color="primary" className={classes.button}>
                  Ver más
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ServicesSection;
