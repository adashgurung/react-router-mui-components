import { Container, Typography } from "@material-ui/core";

import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import "./home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    maxWidth: 400,
    justifyContent: "space-around",
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },

  content: {
    flex: "1 0 auto",
  },

  cover: {
    width: 151,
    height: 161,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },

  body: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  secondTypography: {
    marginTop: "1em",
  },

  title: {
    marginTop: "0.4em",
    marginBottom: "0.5em",
    fontSize: 70,
    color: "#F2811E",
    // color: "white",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Container maxWidth="sm" component="main" className={classes.body}>
        <Typography
          className={classes.title}
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Music Shop
        </Typography>

        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Hello
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Adele
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png"
            title="Live from space album cover"
          />
        </Card>

        <Typography
          className={classes.secondTypography}
          component="p"
          variant="h5"
          align="center"
          color="textSecondary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis
          excepturi ratione expedita vel, sint aliquid voluptatum ea quaerat
          aliquam laborum fuga omnis, ut delectus necessitatibus minima nesciunt
          eos praesentium?
        </Typography>
      </Container>
    </React.Fragment>
  );
}
