import { Box, Card, Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  slider: {
    //minWidth: 275,
    width: 450,
    color: "#F2811E",

    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginLeft: 20,
  },

  rating: {
    margin: 20,
    padding: 20,
  },

  title: {
    marginTop: "0.4em",
    marginBottom: "0.5em",
    fontSize: 70,
    color: "#F2811E",
  },

  body: {
    backgroundColor: "lightgray",
    marginTop: 80,
    height: "50%",
  },
}));

function valuetext(value) {
  return { value };
}

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main" className={classes.body}>
        <div className={classes.rating}>
          <Typography
            id="discrete-slider"
            component="p"
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            Please rate me 1(bad) to 10(execellent)
          </Typography>

          <div className={classes.sliderContainer}>
            <Slider
              className={classes.slider}
              defaultValue={10}
              aria-labelledby="discrete-slider"
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
          </div>
        </div>

        <Typography component="p" variant="h5" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis
          excepturi ratione expedita vel, sint aliquid voluptatum ea quaerat
          aliquam laborum fuga omnis, ut delectus necessitatibus minima nesciunt
          eos praesentium?
        </Typography>
      </Container>
    </React.Fragment>
  );
}
