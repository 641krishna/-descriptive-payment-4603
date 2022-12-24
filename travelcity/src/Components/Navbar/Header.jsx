import React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Store/Action";
import "./drawer.scss";
import DrawerComp from "./Drawer";
import Popover1 from "./PopoverSignIn";
import PopoverSignOut from "./PopoverSignOut"

import TravelPopover1 from "./TravelPopover";
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {

   const userName = useSelector((state) => state.Auth.userName);
   const login = useSelector((state) => state.Auth.login);
  const dispatch = useDispatch();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleSignOut = () => {
    dispatch(logOut());
  }

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const logo = "https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2";

  return (
    <React.Fragment >
      <AppBar sx={{ background: "#3f51b5", marginLeft: "auto" }} style={{ padding: "8px" }}>
        <Toolbar id="NavbarSection">
          <div id="NavLeftSection">
            <Link to="/"><img style={{ marginRight: '2vh' }} src={logo} alt="" /></Link>
            <TravelPopover1 />
          </div>
          <div id="NavRightSection">
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <div id="rightbar">
                  <div> Español</div>
                  <div>List your property</div>
                  <div>Support</div>
                  <div>Trips</div>

                  <div>
                    { isAuthenticated || login
                      ? (
                        <div>
                          <PopoverSignOut/>
                        </div>
                      )

                      : <Popover1 />   /*Pop-up for Login & SignUp */}
                    {/* <Link style={{ display: `${(userName === "") ? "none" : "inline"}` }} to="#" onClick={handleSignOut}>Sign out</Link> */}
                  </div>
                </div>

              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment >
  );
};

export default Header;
