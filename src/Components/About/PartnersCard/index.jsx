import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia } from "@mui/material";

import "../buttonStyle.css";

const PartnersCard = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 5,
    className: "PartnerSlider",
    draggable: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          draggable: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          draggable: true,
          autoplay: true,
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
      src: "fortis.png",
    },
    {
      name: "Lilavati Hospital",
      src: "lilavati.png",
    },
    {
      name: "Medanta",
      src: "medanta.png",
    },
    {
      name: "Chennai Meenakshi",
      src: "meenakshi.png",
    },
  ];

  return (
    <Slider style={{ margin: "40px 0" }} {...settings}>
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
                transition: "transform .3s ease",
                padding: 1,
                margin: "auto",
                "&:hover": {
                  transform: "scale(1.1)",
                  cursor: "pointer",
                },
              }}
              image={require(`../../../assets/Partners/${data.src}`)}
              alt={data.name}
            />
          </Box>
        </Card>
      ))}
    </Slider>
  );
};

export default PartnersCard;
