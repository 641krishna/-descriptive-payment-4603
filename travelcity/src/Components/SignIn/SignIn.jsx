import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../../Store/Action";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./SignIn.scss";


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
        marginTop: theme.spacing(1),
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
        padding : "10px",
        marginBottom: "20px",
        display: "flex",
        justifyContent : "space-around",
    },

    btnColor: {},

    icon: {
        width: "15px",
        marginRight: "5px",
    },
}));

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

const initState = {
    email: "",
    password: "",
};

export const SignIn = () => {
    const classes = useStyles();
    const [input, setInput] = useState(initState);
    const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();
    const userName = useSelector((state) => state.Auth.userName);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const  {data}  = await axios.get(
            
            `https://travelocity.onrender.com/users/?email=${input.email}`
        );
      

        if(data.email === input.email  && data.password === input.password) {

            dispatch(loginSuccess(data.firstName));
            swal("Logged in successfully");
            navigate("/");
           
        } else {    
            swal("Invalid Credentials!");
            dispatch(loginFailure());
        }
    };

    return (
        <Wrapper id="option">
            <Container id="GoogleLinks" className={classes.option}>
            <h3>Sign in With : </h3>
                <Button
                    className={classes.SocialBtn}
                    variant="outlined"
                    color="default"
                    onClick={() => loginWithRedirect()}
                >
                  <GoogleIcon /> <FacebookIcon />  <LinkedInIcon/>  <GitHubIcon />  
                </Button>
                <div className="messege">
                    <span>
                        <VpnKeyIcon className={classes.icon} />
                    </span>
                    We kepp it private
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        or Sign in with your email
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate={false}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            autoComplete="email"
                        />
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signUp">{"Don't have an account? Sign Up"}</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Wrapper>
    );
};