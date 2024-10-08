
import React, { useEffect, useState } from "react";
import {
  doctorDetailsGet,
} from "../../Service/Services";
//aws_url,doctorDetailsUpdate,

import {
  Typography,
  Divider,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "../../assets/Logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
//import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LogoutIcon from "@mui/icons-material/Logout";
//import ChecklistIcon from "@mui/icons-material/Checklist";
import { NavLink, useNavigate, Link } from "react-router-dom";

const categories = [
  {
    children: [
      { id: "Profile", icon: <AccountBoxIcon />, link: "/doctor/profile" },
      // {
      //   id: "Treatments",
      //   icon: <TextSnippetIcon />,
      //   link: "/doctor/treatments",
      // },
      // {
      //   id: "Join Hospital",
      //   icon: <LocalHospitalIcon />,
      //   link: "/doctor/joinhospital",
      // },
      // {
      //   id: "Hospital Requests",
      //   icon: <ChecklistIcon />,
      //   link: "/doctor/requests",
      // },
      {
        id: "Hospital Profile",
        icon: <LocalHospitalIcon />,
        link: "/doctor/hospitalprofile",
      },
      {
        id: "Leads",
        icon: <LeaderboardIcon />,
        link: "/doctor/leads",
      },
      { id: "Videos", icon: <VideoLibraryIcon />, link: "/doctor/fetchvideo" },
    ],
  },
];

const item = {
  py: 1,
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

const Navigator = (props) => {
  const { ...other } = props;

  const navigate = useNavigate();

  const forLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/doctor/login");
  };

  const [form, setForm] = useState({ });

  const forDoctorGet = async () => {
    const response = await doctorDetailsGet();
    if (response?.data.status) {
      setForm(response.data?.data);
      console.log("------------------------");
      console.log(response.data);

    } else {
      console.log(response?.data.message);
    }
  };

  useEffect(() => {
    forDoctorGet();
  }, []);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <Link to="/">
          <div className="d-flex justify-content-center mt-3">
            <Box component={"img"} src={Logo} sx={{ width: 120 }} />
          </div>
        </Link>
        <Divider sx={{ mt: 2, backgroundColor: "black" }} />

        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemText className="text-center">
            <Typography
              component={"h2"}
              sx={{
                fontFamily: "Montserrat",
                fontSize: 22,
                fontWeight: "bold",
                cursor: "pointer",
                color:"black"
              }}
            >
              Doctor Panel
            </Typography>
          </ListItemText>
        </ListItem>

        <Divider sx={{ backgroundColor: "black" }} />
        {categories.map(({ children }) => (
          <Box key={children[0].id}>

            {form.verified ? "":
              <ListItem disablePadding key="Quick Onboarding" component={ListItemButton}>
                <ListItemButton
                  className="nav-link p-2"
                  component={NavLink}
                  to="/doctor/quickOnboarding"
                  sx={{ ...item }}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#133680" : "",
                    color: isActive ? "white" : "black",
                  })}
                >
                  <ListItemIcon sx={{}}><AccountBoxIcon /></ListItemIcon>
                  <Typography
                    component="span"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    Quick Onboarding
                  </Typography>
                </ListItemButton>
              </ListItem>
            }

            {children.map(({ id, icon, link }) => (
              <ListItem disablePadding key={id} component={ListItemButton}>
                <ListItemButton
                  className="nav-link p-2"
                  component={NavLink}
                  to={link}
                  sx={{ ...item }}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#133680" : "",
                    color: isActive ? "white" : "black",
                  })}
                >
                  <ListItemIcon sx={{}}>{icon}</ListItemIcon>
                  <Typography
                    component="span"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {id}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}

        <Box key="Logout">
          <ListItem disablePadding>
            <ListItemButton sx={item}>
              <ListItemIcon sx={{color:"black"}}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  component={"p"}
                  sx={{ fontFamily: "poppins" , color:"black"}}
                  onClick={forLogout}
                >
                  Logout
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Drawer>
  );
};

export default Navigator;
