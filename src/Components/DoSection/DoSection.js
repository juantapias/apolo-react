import React from "react";
import "./DoSection.css";
import DoImage from "../../Assets/Image/what-we-do.png";
//Materials components
import Box from "@material-ui/core/Box/Box";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";

const useStyle = makeStyles({
  media: {
    backgroundSize: "contain",
    height: "400px",
  },
  box: {
    marginTop: "50px",
  },
  icon: {
    alignItems: "center",
    border: "2px solid #6543a8",
    borderRadius: "10px",
    color: "#6543a8",
    display: "flex",
    height: "45px",
    justifyContent: "center",
    padding: "8px",
    width: "45px",
  },
});

const DoSection = () => {
  const classes = useStyle();

  return (
    <div className="do-section">
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6}>
            <Typography variant="h2">Lo que hacemos</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque a tristique tellus, cursus pellentesque nulla. Sed
              venenatis bibendum pellentesque.
            </Typography>
            <Box className={classes.box}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <FilterDramaIcon className={classes.icon} />
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <FilterDramaIcon className={classes.icon} />
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <FilterDramaIcon className={classes.icon} />
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <FilterDramaIcon className={classes.icon} />
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet
                </Typography>
              </Grid>
            </Grid>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <CardMedia className={classes.media} image={DoImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DoSection;
