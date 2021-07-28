import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//MUI COMPONENTS
import { makeStyles, alpha } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Container,
  Divider,
  Drawer,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

//COMPONENTS
import HomePage from "./components/home";
import ProfilePage from "./components/profile";
import SettingsPage from "./components/settings";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    backgroundColor: "#F4F4F4 ",
  },

  eGuitarListDescription: {
    marginBottom: "5px",
  },

  eGuitarLinkDescription: {
    padding: "10px",

    maxWidth: "auto",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "#DDDDDD",
      color: "#F2811E",
    },
  },

  drawerIcons: {
    color: "#F2811E",
  },

  drawerList: {
    width: "15em",
    backgroundColor: "lightgray",
  },

  drawer: {
    backgroundColor: "lightgray",
  },

  /*  backgroundColor: "grey",
  "&:hover": {
    backgroundColor: "#F2811E",
    cursor: "pointer",
  }, */

  appBar: {
    backgroundColor: "#636569",
  },

  button: {
    "&:hover": {
      backgroundColor: "#F2811E",
    },
  },

  footer: {
    backgroundColor: "lightgray",
    paddingBottom: "20px",
    paddingTop: "20px",

    width: "100%",

    bottom: "0",
    //justifyContent: "center",

    //alignItems: "center",
    position: "fixed",
    display: "flex",
    //alignContent: "center",
    alignSelf: "center",
  },

  body: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
  },

  footerTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#F2811E",

    // textAlign: "center",
  },

  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    border: "2px solid #F2811E",
    borderRight: "hidden",
    "&:nth-child(6)": {
      borderRight: "2px solid #F2811E",
    },
    "&:nth-child(2)": {
      marginLeft: "10px",
    },
    backgroundColor: "lightgray",
    color: "gray",
    "&:hover": {
      backgroundColor: "#F2811E",
      color: "white",
      cursor: "pointer",
    },

    display: "flex",
    justifyContent: "center",
  },
  /* 
  "@global": {
    "title:nth-of-child(4)": {
      borderRight: "1px solid white",
    },
  }, */

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const electricGuitars = [
  {
    title: "Guitar Brands",
    description: ["Gibson", "Ibanez", "Yamaha", "Fender", "SubZero"],
  },
  {
    title: "Guitar Types",
    description: [
      "Starter Packs",
      "Kids",
      "Left Handed",
      "7 String",
      "8 String",
      "Double Neck",
    ],
  },
  {
    title: "Guitar Amps",
    description: [
      "Boss",
      "Marshall",
      "Yamaha",
      "Fender",
      "SubZero",
      "Roland",
      "Vox",
    ],
  },
  {
    title: "Guitar Accessories",
    description: [
      "Bags & Cases",
      "Cables",
      "Capos",
      "Ear protection",
      "Picks",
      "Slides",
      "Stands",
      "Strings",
      "Stands",
      "Tuners",
    ],
  },
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random",
      "Team feature",
      "Developer stuff",
      "More more more",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another Resource",
      "Final Resource",
    ],
  },

  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

function App() {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.body}>
      <Router>
        <AppBar className={classes.appBar} color="secondary" position="static">
          <Drawer
            variant="temporary"
            open={drawerState}
            onClose={() => setDrawerState(false)}
          >
            <List
              className={classes.drawerList}
              onClick={() => setDrawerState(false)}
            >
              {/* close drawer upon clicking on list item*/}
              <ListItem component={Link} to="/home" key="home" button>
                <ListItemIcon>
                  <Home className={classes.drawerIcons} />
                </ListItemIcon>
                <ListItemText primary="Home"></ListItemText>
              </ListItem>

              <Divider></Divider>

              <ListItem component={Link} to="/profile" key="profile" button>
                <ListItemIcon>
                  <PersonIcon className={classes.drawerIcons} />
                </ListItemIcon>
                <ListItemText primary="My Profile"></ListItemText>
              </ListItem>

              <ListItem component={Link} to="/settings" key="settings" button>
                <ListItemIcon>
                  <SettingsIcon className={classes.drawerIcons} />
                </ListItemIcon>
                <ListItemText primary="Settings"></ListItemText>
              </ListItem>
            </List>
          </Drawer>

          <Toolbar>
            <IconButton
              onClick={() => setDrawerState(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            {/* POPOVER */}
            <Typography
              aria-describedby={id}
              onClick={handleClick}
              variant="h6"
              className={classes.title}
            >
              Electric Guitars
            </Typography>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Container
                className={classes.typography} /* className={classes.footer} */
              >
                <Grid
                  bgcolor="text.secondary"
                  container
                  spacing={4}
                  justifyContent="center"
                >
                  {electricGuitars.map((eGuitar) => (
                    <Grid
                      item
                      justifyContent="center"
                      xs={6}
                      sm={3}
                      key={eGuitar.title}
                    >
                      <Typography
                        className={classes.footerTitle}
                        variant="h6"
                        color="textPrimary"
                        gutterBottom
                      >
                        {eGuitar.title}
                      </Typography>

                      <ul>
                        {eGuitar.description.map((item) => (
                          <li
                            className={classes.eGuitarListDescription}
                            key={item}
                          >
                            <Link
                              className={classes.eGuitarLinkDescription}
                              href="#"
                              color="textSecondary"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Popover>

            {/* POPOVER END*/}

            <Typography variant="h6" className={classes.title}>
              Acoustic Guitars
            </Typography>

            <Typography variant="h6" className={classes.title}>
              Bass Guitars
            </Typography>

            <Typography variant="h6" className={classes.title}>
              Drums &amp; Percussion
            </Typography>

            <Typography variant="h6" className={classes.title}>
              Pianos &amp; Keyboards
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <Button className={classes.button} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/profile">
            <ProfilePage></ProfilePage>
          </Route>
          <Route path="/settings">
            <SettingsPage></SettingsPage>
          </Route>
        </Switch>

        {/* BODY */}

        {/* FOOTER CONTAINER */}
        <Container className={classes.footer}>
          <Grid
            bgcolor="text.secondary"
            container
            spacing={4}
            justifyContent="center"
          >
            {footers.map((footer) => (
              <Grid
                item
                justifyContent="center"
                xs={6}
                sm={3}
                key={footer.title}
              >
                <Typography
                  className={classes.footerTitle}
                  variant="h6"
                  color="textPrimary"
                  gutterBottom
                >
                  {footer.title}
                </Typography>

                <ul>
                  {footer.description.map((item) => (
                    <li className="list-description" key={item}>
                      <Link
                        className="link-description"
                        href="#"
                        variant="subtitle1"
                        color="textSecondary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Router>
    </div>
  );
}

export default App;
