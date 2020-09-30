import React, { Fragment } from "react";
import ApoloImage from "../../Assets/Image/apolo.png";
//Material components
import Box from '@material-ui/core/Box/Box';
import Button from "@material-ui/core/Button/Button";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";
//App components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const useStyle = makeStyles({
  h1: {
    fontSize: "15rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)",
    lineHeight: "0.89",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  button: {
    background:
      "linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)",
    borderRadius: "25px",
    marginTop: "15px",
    width: "225px",
  },
  media: {
    backgroundSize: "contain",
    height: "400px",
  },
})

const NoMatch = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Header />
      <Box className="main">
        <Container className="main">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item sm={12} md={4}>
              <Typography variant="h3">Lo sentimos</Typography>
              <Typography variant="h1" className={classes.h1}>404</Typography>
              <Typography variant="h6">La página que buscas no la encontramos</Typography>
              <Button variant="contained" size="large" color="primary" className={classes.button}>
                Volver al inicio
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <CardMedia
                className={classes.media}
                image={ApoloImage}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default NoMatch;
