import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from "@mui/material";
import { Home, AccountCircle, MedicalServices } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { CustomStyles } from "../../CustomStyles/Styles";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import AccountModal from "../AccountModal";
import TestFooter from "../TestFooter";
import Logo from "../../assets/Logo.png";
import DocAccountModal from "../../DoctorPannel/DoctorComponents/DocAccountModal";
import { MobileActionBar } from "./NavBarStyles";

const NewNavBar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const forScreenWidth = useMediaQuery(theme.breakpoints.down("md"));
  const [active, setActive] = useState(location.pathname);
  const [open, setOpen] = useState(false);

  const [dcopen, setDcopen] = useState(false);

  const forNavChange = (e) => {
    setActive(e);
  };

  const forOpen = () => setOpen(true);
  const forClose = () => setOpen(false);

  const forDocOpen = () => setDcopen(true);
  const forDocClose = () => setDcopen(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Box>
        <div className="shadow">
          <Toolbar className=" flex  max-w-8xl mx-auto justify-between mt-4 h-[38px] md:h-[100px]">
            <div
              className="md:block hidden cursor-pointer pl-4 "
              onClick={() => navigate("/")}
            >
              <span className="text-[#133682] text-2xl font-medium text-center font-dm-sans">
                Health
              </span>
              <span className="text-[#FD2621] text-2xl font-medium font-dm-sans">
                Mudraa
              </span>
            </div>

            <div className="mx-auto md:hidden flex justify-center items-center ">
              <div
                className=" text-center  cursor-pointer"
                onClick={() => navigate("/")}
              >
                <span className="text-[#133682] text-2xl font-medium font-dm-sans">
                  Health
                </span>
                <span className="text-[#FD2621] text-2xl font-medium font-dm-sans">
                  Mudraa
                </span>
              </div>
            </div>
            <div className="md:hidden flex">
              <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                <IconButton size="large" onClick={forOpen} color="inherit">
                  <AccountCircle />
                </IconButton>
              </Box>
            </div>

            {/* <Box sx={{ flexGrow: 3 }} /> */}
            <div className="">
              {!forScreenWidth && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="text-decoration-none new text-[#454545] opacity-45 text-[16px]"
                    component={NavLink}
                    to={"/"}
                    sx={{ ...CustomStyles.navLink }}
                  >
                    Home
                  </Typography>
                  <Typography
                    className="text-decoration-none new text-[#454545] opacity-45 text-[16px] "
                    component={NavLink}
                    to={"/videos"}
                    sx={{ ...CustomStyles.navLink }}
                  >
                    Videos
                  </Typography>

                  {/* <Typography
                    className="text-decoration-none new text-[#454545] opacity-45 text-[16px] "
                    component={NavLink}
                    to={"/service"}
                    sx={{ ...CustomStyles.navLink }}
                  >
                    Services
                  </Typography> */}

                  <Typography
                    className="text-decoration-none new text-[#454545] opacity-45 text-[16px]"
                    component={NavLink}
                    to={"/plans"}
                    sx={{ ...CustomStyles.navLink }}
                  >
                    Plans
                  </Typography>
                  <Typography
                    className="text-decoration-none new text-[#454545] opacity-45 text-[16px]"
                    component={NavLink}
                    to={"/about"}
                    sx={{ ...CustomStyles.navLink }}
                  >
                    About
                  </Typography>
                </Box>
              )}
            </div>
            {/* <Box sx={{ flexGrow: 1 }} /> */}

            {/* <Button
            onClick={forDocOpen}
            variant="outlined"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              color: "#FFFF",
              textTransform: "inherit",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              backgroundColor: "#133680",
              width: 116,
              borderRadius: 8,
              border: "1px solid #133680",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#040D12",
                border: "1px solid #133680",
              },
            }}
          >
            <Typography
              className="mx-2"
              variant="p"
              component={"p"}
              sx={{ fontSize: 13 }}
            >
              Doctors
            </Typography>
            <Sethscope
              isHovered={isHovered}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </Button> */}
            <div className="md:block hidden">
              <Box sx={{ display: { xs: "flex", md: "flex" } }}>
                <IconButton size="large" onClick={forOpen} color="inherit">
                  <AccountCircle />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </div>
      </Box>
      {open && (
        <AccountModal forClose={forClose} forOpen={forOpen} open={open} />
      )}

      {dcopen && (
        <DocAccountModal
          forDocClose={forDocClose}
          forDocOpen={forDocOpen}
          dcopen={dcopen}
        />
      )}

      {/* Mobile Size */}
      {forScreenWidth ? (
        <MobileActionBar>
          <BottomNavigation
            onChange={forNavChange}
            showLabels
            sx={{
              position: "fixed",
              bottom: -1,
              width: "100%",
              backgroundColor: "#FFFF",
            }}
          >
            <BottomNavigationAction
              className="value"
              label={
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "Montserrat", fontSize: 11 }}
                >
                  Home
                </Typography>
              }
              icon={<Home />}
              component={NavLink}
              to="/"
            />

            <BottomNavigationAction
              className="value"
              label={
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "Montserrat", fontSize: 11 }}
                >
                  Videos
                </Typography>
              }
              icon={<MedicalServices />}
              component={NavLink}
              to="/videos"
            />

            {/* <BottomNavigationAction
              className="value"
              label={
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "Montserrat", fontSize: 11 }}
                >
                  Services
                </Typography>
              }
              icon={<MedicalServices />}
              component={NavLink}
              to="/service"
            />  */}
            <BottomNavigationAction
              className="value"
              label={
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "Montserrat", fontSize: 11 }}
                >
                  Plans
                </Typography>
              }
              icon={<CurrencyRupeeIcon />}
              component={NavLink}
              to="/plans"
            />
            <BottomNavigationAction
              className="value"
              label={
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "Montserrat", fontSize: 11 }}
                >
                  About
                </Typography>
              }
              icon={<InfoIcon />}
              component={NavLink}
              to="/about"
            />
          </BottomNavigation>
        </MobileActionBar>
      ) : null}
      <Outlet />
      {/* {active === "/signup" || active === "/login" ? "" : <TestFooter />} */}
    </React.Fragment>
  );
};

export default NewNavBar;
