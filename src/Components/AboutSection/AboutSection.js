import React from "react";
import "./AboutSection.css";
import AboutUsImage from "../../Assets/Image/about-us.png"
//Material components
import Button from "@material-ui/core/Button/Button";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles({
  media: {
    backgroundSize: "contain",
    height: "400px",
  },
  p: {
    margin: "15px 0 !important",
  },
  button: {
    background:
      "linear-gradient(90deg, rgba(104,61,170,1) 0%, rgba(122,159,234,1) 100%)",
    borderRadius: "25px",
    marginTop: "15px",
    width: "250px",
  },
})

const AboutSection = () => {
  const classes = useStyle();

  return (
    <div className="about-section">
      <Container maxWidth="lg" className="p-section">
        <Grid container spacing={2} alignItems="center">
          <Grid item sm={12} md={6}>
            <CardMedia
              className={classes.media}
              image={AboutUsImage}
            />
          </Grid>
          <Grid item sm={12} md={6}>
          <Typography variant="h2">
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography className={classes.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
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
        </Grid>
      </Container>
    </div>
  )
}

export default AboutSection;