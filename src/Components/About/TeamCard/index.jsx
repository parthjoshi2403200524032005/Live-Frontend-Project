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

import "../buttonStyle.css";

const TeamCard = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2800,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 3,
    className: "TeamSlider",
    arrows: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          rows: 2,
        },
      },
      {
        breakpoint: 787,
        settings: {
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Dinesh Kumar",
      position: "Co-founder",
      profile: "dinesh.png",
      linkedIn: "https://www.linkedin.com/in/drdineshramanpt",
    },
    {
      name: "Saipavan Lingamallu",
      position: "SDE Intern",
      profile: "saipavan.png",
      linkedIn: "https://www.linkedin.com/in/saipavan-lingamallu-a46612224 ",
    },
    {
      name: "Sumanth Divvela",
      position: "SDE Intern",
      profile: "sumanth.png",
      linkedIn: "https://www.linkedin.com/in/sumanth-divvela-824755221",
    },
    {
      name: "Yashraj Singh",
      position: "Project Manager",
      profile: "yashraj.png",
      linkedIn: "https://www.linkedin.com/in/yashraj-singh-507063245",
    },
    {
      name: "Mohamed Halith",
      position: "SDE Intern",
      profile: "halith.png",
      linkedIn: "https://www.linkedin.com/in/mohamed-halith-smh",
    },
    {
      name: "Himani Mathur",
      position: "UI/UX Intern",
      profile: "himani.png",
      linkedIn: "https://www.linkedin.com/in/himani-mathur",
    },
    {
      name: "Soham Jambhwadekar",
      position: "SDE Intern",
      profile: "soham.png",
      linkedIn: "https://www.linkedin.com/in/soham-jambhwadekar-25128027b",
    },
    {
      name: "Shabari Vignesh",
      position: "SDE Intern",
      profile: "shabari.png",
      linkedIn: "https://www.linkedin.com/in/shabari-vignesh-73983b24b",
    },
    {
      name: "Asad Shah",
      position: "UI/UX Intern",
      profile: "asad.png",
      linkedIn: "https://www.linkedin.com/in/asad-shah-904198285",
    },
    {
      name: "Mahima Kabra",
      position: "UI/UX Intern",
      profile: "mahima.png",
      linkedIn: "https://www.linkedin.com/in/mahimakabra",
    },
  ];

  return (
    <Slider style={{ margin: "42px 0" }} {...settings}>
      {teamMembers.map((person) => (
        <Card
          key={person.name}
          sx={{ boxShadow: "none", marginBottom: "22px"
           }}
        >
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
                transition: "transform .3s ease",
              }}
              className="profile-img"
              image={`/Team/${person.profile}`}
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
                  letterSpacing: 0.6
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
                <Typography color="black" sx={{ fontSize: 16, paddingLeft: 1 }}>
                  LinkedIn
                </Typography>
              </IconButton>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Slider>
  );
};

export default TeamCard;
