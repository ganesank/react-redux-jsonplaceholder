import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import album from "../static/album.svg";
import comment from "../static/comment.svg";
import photo from "../static/photo.svg";
import post from "../static/post.svg";
import todo from "../static/todo.svg";
import user from "../static/user.svg";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  AppLogo: {
    height: "20vmin",
    pointerEvents: "none",
  },
  AppHeader: {
    background: `url("../static/home.svg") no-repeat center center fixed`,
    backgroundSize: "cover",
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },

  AppLink: {
    color: "#61dafb",
  },
  card: {
    padding: theme.spacing(2),
  },
}));
const Fixes = [
  { title: "Albums", src: album, text: "Check Memories made" },
  { title: "Comments", src: comment, text: "What do you think?" },
  { title: "Photos", src: photo, text: "Let's take more" },
  { title: "Posts", src: post, text: "Writing clears the mind" },
  { title: "Todos", src: todo, text: "Check your checklist" },
  { title: "Users", src: user, text: "Who's on the platform" },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.AppHeader}>
        <Grid container justify={"center"} alignItems={"center"} spacing={4}>
          {Fixes.map((item) => (
            <Grid
              item
              xs={10}
              md={4}
              component={RouterLink}
              to={`/${item.title.toLowerCase()}`}
              key={item.title}
              className={classes.AppLink}
            >
              <Paper elevation={10} className={classes.card}>
                <Typography variant={"h4"} component={"h1"}>
                  {item.title}
                </Typography>
                <img src={item.src} className={classes.AppLogo} alt="logo" />
                <Typography variant={"subtitle1"} component={"p"}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;