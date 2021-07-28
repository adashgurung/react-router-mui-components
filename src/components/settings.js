import {
  Avatar,
  Container,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  },

  pos: {
    marginBottom: 12,
  },

  body: {
    marginTop: 20,
  },

  profileButton: {
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 12,
    border: "1px solid #F2811E",

    color: "#F2811E",
  },
  changeButton: {
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: "bold",
    color: "#F2811E",
    width: 150,
    border: "1px solid lightgray",
    backgroundColor: "white",
    marginTop: 20,
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },

  avatarContainer: {
    //backgroundColor: "red",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    //alignSelf: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",

    //alignContent: "flex-start",

    width: "30%",
  },

  form: {
    display: "flex",
    margin: 20,
    flexDirection: "column",

    marginRight: 10,
  },

  formContainer: {
    width: "80%",
    // display: "flex",
    margin: 20,
  },

  textfield: {
    width: "80%",
    marginBottom: 12,
  },

  bottomContainer: {
    display: "flex",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Container maxWidth="md" component="main" className={classes.body}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                variant="h2"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Account Setting
              </Typography>

              <Button className={classes.profileButton}>PROFILE</Button>

              <Divider></Divider>

              <Container className={classes.bottomContainer}>
                <Container className={classes.avatarContainer}>
                  <Avatar className={classes.large} atl="A Gurung"></Avatar>
                  <Button className={classes.changeButton}>Change</Button>
                </Container>

                <Container className={classes.formContainer}>
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                      className={classes.textfield}
                      id="filled-basic"
                      label="Name"
                      variant="filled"
                    />
                    <TextField
                      className={classes.textfield}
                      id="filled-basic"
                      label="Email"
                      variant="filled"
                    />
                    {/*  <FormHelperText id="my-helper-text">
                      We'll never share your email.
                    </FormHelperText> */}
                    <TextField
                      className={classes.textfield}
                      id="filled-basic"
                      label="Password"
                      type="password"
                      variant="filled"
                    />

                    <Button className={classes.changeButton}>save</Button>
                  </form>
                </Container>
              </Container>
            </CardContent>

            {/*    <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </Container>
      </React.Fragment>
    </div>
  );
}
