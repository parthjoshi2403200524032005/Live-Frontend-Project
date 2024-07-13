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

import "./buttonStyle.css";

const PartnersCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    className: "PartnerSlider",
    draggable: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
          draggable: true,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          dots: true,
          draggable: true,
        },
      },
    ],
  };

  const partners = [
    {
      name: "Apollo Hospitals",
      src: "apollo.png",
    },
    {
      name: "Fortis HealthCare",
      src: "fortis.png"
    },
    {
      name: "Lilavati Hospital",
      src: "lilavati.png"
    },
    {
      name: "Medanta",
      src: "medanta.png"
    },
    {
      name:"Chennai Meenakshi",
      src: "meenakshi.png"
    }
  ];

  return (
    <>
      <Slider style={{ margin: "36px 0" }} {...settings}>
        {partners.map((data) => (
          <Card key={data.name} sx={{ display: "flex", boxShadow: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  // width: 120,
                  // borderRadius: "50%",
                  padding: 1,
                  margin: "auto",
                }}
                image={require(`../../../assets/Partners/${data.src}`)}
                alt={data.name}
              />
            </Box>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default PartnersCard;
