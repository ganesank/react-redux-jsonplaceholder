import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addCommentStartAsync } from "../redux/comments-redux/comments.actions";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateOutlined from "@material-ui/icons/AddPhotoAlternateOutlined";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "250px",
  },
  add: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function AddCommentModal({ addCommentStartAsync }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    body: "",
    name: "",
    email: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handlePost = (event) => {
    const { name, email, body } = state;
    event.preventDefault();
    const data = { postId: 1, email, name, body };
    addCommentStartAsync(data);
    handleClose();
    setState({
      body: "",
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddPhotoAlternateOutlined
          color={"primary"}
          fontSize={"large"}
          className={classes.add}
        />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant={"h5"} component={"h6"}>
              Add New Comment
            </Typography>
            <form onSubmit={handlePost}>
              <TextField
                label={"Name"}
                name={"name"}
                value={state.name}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label={"Email"}
                name={"email"}
                value={state.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label={"Body"}
                name={"body"}
                value={state.body}
                onChange={handleChange}
                fullWidth
              />

              <Button
                onClick={handlePost}
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
              >
                Create
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCommentStartAsync: (data) => dispatch(addCommentStartAsync(data)),
});

export default connect(null, mapDispatchToProps)(AddCommentModal);