import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  logo: {
    height: "50px",
    width: "auto",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <img
            className={classes.logo}
            alt="logo"
            src="/assets/images/logo.png"
          />
          <div className={classes.toolbarButtons}>
            <Button component={Link} to={"/"} color="inherit">
              Home
            </Button>
            <Button component={Link} to={"/about"} color="inherit">
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
