import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { useState } from "react";
import axios from "axios";
// import swal from "sweetalert";
import "./SignUp.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.div`
  width: 80%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 2.5%;
  background: white;
  padding: 10px;
  .messege {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: #616161;
  }
`;

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: "#0a438b",
    },
    option: {
        display: "flex",
        flexDirection: "column",
        marginTop: "70px",
    },

    SocialBtn: {
        width: "50%",
        padding: "10px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-around",
    },

    icon: {
        width: "15px",
        marginRight: "5px",
    },
}));

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

export const SignUp = () => {
    const classes = useStyles();
    const [state, setState] = useState(initState);
    const navigate = useNavigate();
    const {loginWithRedirect} = useAuth0();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post("https://travelocity.onrender.com/users", state)
            .then((response) => {
                alert("Registered Successfully");
                navigate("/signIn")
            })
            .catch((err) => alert("Something went wrong !"))
    };

    return (
        <Wrapper id="mainContainer">
            <Container id="container" className={classes.option}>
                <h3>Sign in With : </h3>
                <Button
                    className={classes.SocialBtn}
                    variant="outlined"
                    color="default"
                    onClick={() => loginWithRedirect()}
                >
                    <GoogleIcon /> <FacebookIcon />  <LinkedInIcon />  <GitHubIcon />
                </Button>

                <div className="messege">
                    <span>
                        <VpnKeyIcon className={classes.icon} />
                    </span>
                    We keep it private
                </div>
                <div className="messege">
                    <VerifiedUserRoundedIcon className={classes.icon} />
                    Share only with permission
                </div>
                <div className="messege">
                    <WatchLaterIcon className={classes.icon} />
                    Quick sign-in no passwords
                </div>
            </Container>
            <Container component="main">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        or Sign up with your email
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate={false}
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleChange}
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="confirm Password"
                                    type="password"
                                    id="confirm-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    name="terms"
                                    control={
                                        <Checkbox
                                            value="allowExtraEmails"
                                            color="primary"
                                            required
                                        />
                                    }
                                    label="Agree to terms and conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                             <Link to="/signUp" style={{color:"white", fontSize:"15px", textDecoration:"none"}}>Sign Up</Link>
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/signIn" style={{color:"blue", fontSize:"15px", textDecoration:"none"}}>Already have an account? Sign in</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        </Wrapper>
    );
};
