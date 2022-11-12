import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./drawer.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { usenavigate } from "react-router-dom";
import { logOut } from "../../Store/Action";


export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const navigate = usenavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
   const userName = useSelector((state) => state.Auth.userName);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logOut());
  }

  // const gotoSignUp =()=>{
  //   // /signUp
  //   navigate("/signUp");
  // }

  return (
    <div id='SigninPopup'>
      <div id="popoverid1" aria-describedby={id} variant="contained" onClick={handleClick}>
        {/* Logout/ */}
        Sign in
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

      >
        <div id="signinPopover">
          <div className='SignInLinks' id="userProfile">
            <div id="signinHeader-2" >Members can access discounts and special features</div>
            <Button fullWidth={true} style={{ backgroundColor: '#0A438B', color: "white", marginTop:"15px" }}> <Link style={{ color: "white" }} to="/signIn">{(userName === "") ? "Sign In" : userName}</Link></Button>
            <Link to="/signUp" style={{marginTop:"15px", textAlign:"center"}} id="createAcc"> Create a free account</Link>
          </div>
          <div id="favrt">List of favorites1</div>
          <div  id="feedback">feedback</div>
        </div>
      </Popover>
    </div>
  );

}

