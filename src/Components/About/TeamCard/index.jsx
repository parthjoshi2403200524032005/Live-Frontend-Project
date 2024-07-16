import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./buttonStyle.css";

const TeamCard = () => {
  const settings = {
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    className: "TeamSlider",
    arrows: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 787,
        settings: {
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ],
  };

  const teamMembers = [
    {
      name: "Rohit Kumar",
      position: "Software Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "https://www.linkedin.com/in/mohamed-halith-smh/",
    },
    {
      name: "Anjali Sharma",
      position: "Project Manager",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Anjali Sharma",
    },
    {
      name: "Ravi Verma",
      position: "UI/UX Designer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Ravi Verma",
    },
    {
      name: "Priya Singh",
      position: "Backend Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Priya Singh",
    },
    {
      name: "Arjun Mehta",
      position: "Frontend Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Arjun Mehta",
    },
    {
      name: "Sara Ali",
      position: "Data Scientist",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Sara Ali",
    },
    {
      name: "Rohit Kumar",
      position: "Software Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "https://www.linkedin.com/in/mohamed-halith-smh/",
    },
    {
      name: "Anjali Sharma",
      position: "Project Manager",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Anjali Sharma",
    },
    {
      name: "Ravi Verma",
      position: "UI/UX Designer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Ravi Verma",
    },
    {
      name: "Priya Singh",
      position: "Backend Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Priya Singh",
    },
    {
      name: "Arjun Mehta",
      position: "Frontend Developer",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Arjun Mehta",
    },
    {
      name: "Sara Ali",
      position: "Data Scientist",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s",
      linkedIn: "Sara Ali",
    },
  ];

  return (
    <>
      <Slider style={{ margin: "42px 0" }} {...settings}>
        {teamMembers.map((person) => (
          <Card key={person.name} sx={{ display: "flex", boxShadow: "none", marginBottom: "22px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 140,
                  borderRadius: "50%",
                  padding: 1,
                  margin: "auto",
                }}
                image={person.profile}
                alt={person.name}
              />
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  textAlign: { xs: "center", lg: "start" },
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    padding: 0,
                    paddingLeft: 1,
                    margin: 0,
                    fontSize: "22px",
                    letterSpacing: "none",
                  }}
                  variant="h5"
                >
                  {person.name}
                </Typography>
                <Typography
                  sx={{ paddingLeft: 1, marginY: 1 }}
                  variant="body1"
                  component="div"
                >
                  {person.position}
                </Typography>
                <IconButton
                  component="a"
                  href={person.linkedIn}
                  target="_blank"
                  sx={{ borderRadius: 3 }}
                >
                  <LinkedInIcon sx={{ color: "#0077B5" }} />
                  <Typography sx={{ fontSize: 16, paddingLeft: 1 }}>
                    LinkedIn
                  </Typography>
                </IconButton>
                {/* </Box> */}
              </CardContent>
            </Box>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default TeamCard;
