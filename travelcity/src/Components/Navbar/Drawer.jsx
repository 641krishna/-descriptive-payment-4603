import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Popover,
  Button,
} from "@mui/material";
import CardTravelIcon from '@mui/icons-material/CardTravel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./drawer.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Store/Action";


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    if (userName.login) {
      dispatch(logOut());
    }
    navigate("/signIn")
  }

  const handleSignOutClick = () => {
    if (!userName.login) {
      navigate("/signUp")
    }
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{ margin: "0 auto", textAlign: "center", padding: "20px", lineHeight: "40px", fontSize: '20px', fontWeight: "700" }}>
          <div style={{ color: "blue" }}>
            Welcome to Travelocity
          </div>
          <div style={{ color: "green" }} onClick={handleSignOutClick}>
            {
              userName.login ?
                `Hello, ${userName.userName}` :
                <button
                  style={{
                    fontWeight: "800", fontSize: "18px", border: "none", borderRadius: "5px",
                    backgroundColor: "blue", color: "white", padding: "8px", width: "132px", marginTop: "30px"
                  }}
                  onClick={() => setOpenDrawer(false)}>
                  Sign-Up
                </button>
            }
          </div>
          <div style={{ color: "red" }} onClick={handleSignOut}>
            {
              userName.login ?
                <button
                  style={{
                    fontWeight: "800", fontSize: "18px", border: "none", borderRadius: "5px",
                    backgroundColor: "red", color: "white", padding: "8px", width: "100px", marginTop: "10px"
                  }}
                  onClick={() => setOpenDrawer(false)}>
                  Logout
                </button> :
                <button
                  style={{
                    fontWeight: "800", fontSize: "18px", border: "none", borderRadius: "5px",
                    backgroundColor: "blue", color: "white", padding: "8px", width: "132px", marginTop: "10px"
                  }}
                  onClick={() => setOpenDrawer(false)}>
                  Login
                </button>
            }
          </div>
        </div>
      </Drawer>
      <div className="navRightSmlScreen">
        <i className="fa fa-search" style={{ "fontSize": "22px" }}></i>
        <div>
          <CardTravelIcon color="white" aria-describedby={id} variant="contained" onClick={handleClick} />
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
              <div id="userProfile">
                <div id="signinHeader" >Members can access discounts and special features</div>
                <Button id="signBtn" variant="contained" fullWidth={true} onClick={() => navigate("/signIn")}>Sign in</Button>
                <div onClick={() => navigate("/signUp")} className="registerLink" id="createAcc">Create a free account</div>
              </div>
              <div id="favrt">List of favorites</div>
              <div id="feedback">feedback</div>
            </div>
          </Popover>
        </div>
        <IconButton
          sx={{ color: "white", marginLeft: 0 }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <AccountCircleIcon sx={{ color: "white", marginLeft: 1 }} />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default DrawerComp;
