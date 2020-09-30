import React from "react";
import "./BannerSection.css";
import ApoloImage from "../../Assets/Image/apolo.png";
//Material components
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box/Box";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    alignItems: "center",
    display: "flex",
    marginTop: "49px",
    height: "100vh",
  },
  p: {
    margin: "15px 0 !important",
  },
  media: {
    backgroundSize: "contain",
    height: "400px",
  },
  button: {
    background:
      "linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)",
    borderRadius: "25px",
    marginTop: "15px",
    width: "250px",
  },
});

const BannerMain = () => {
  const classes = useStyle();

  return (
    <div className="banner-section">
      <Box className="banner-assets-section">
        <Container className={classes.root}>
          <Grid container alignItems="center">
            <Grid item sm={12} md={6}>
              <Typography variant="h2">
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography className={classes.p}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Cotiza con nosotros
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <CardMedia className={classes.media} image={ApoloImage} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default BannerMain;
