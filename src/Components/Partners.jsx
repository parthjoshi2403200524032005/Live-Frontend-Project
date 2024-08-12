import React from "react";
import Slider from "react-slick";
import apollotransperant from "./apollotransperant.png";
import fortisransperant from "./fortistransperant.png";
import lilavathitransperant from "./lilavathitransperant.png";
import medantatransperant from "./medantatransperant.png";
import meenakshitransperant from "./meenakshitransperant.png";
import { Typography, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Heading = ({ text, size }) => {
  return (
    <Typography
      variant="h2"
      component={"h2"}
      sx={{
        fontSize: { xs: 30, sm: 35, lg: size ? 48 : 48 },
        letterSpacing: 1.5,
        lineHeight: "40px",
        textAlign: "center",
        fontWeight: "600",
      }}
    >
      {text}
    </Typography>
  );
};

const settings = {
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1100,
  slidesToShow: 5,
  slidesToScroll: 1,
  className: "PartnerSlider",
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: true,
        draggable: true,
        swipe: true,
      },
    },
    {
      breakpoint: 787,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        draggable: false,
        swipe: false,
      },
    },
  ],
};

export default function Partners() {
  const isSmallScreen = useMediaQuery("(max-width: 576px)");

  return (
    <div
      className="bg-sm-primary"
      style={{
        marginTop: "3rem",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <style>
        {`
          .partner-image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 220px;
            height: 140px;
            max-height: 280px;
            margin: 0rem;
            padding: 0.2rem;
            border-radius: 12px;
            border: 1px solid #f1f1f1;
            box-shadow: rgb(214, 214, 214) 1px 2px 2px 0px;
            background-color: #fff;
            object-fit: contain;
          }

          /* Desktop Devices */
          @media (min-width: 576px) {
            .PartnerSlider .slick-slide {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .partner-image {
              max-width: 180px;
              max-height: 180px;
              margin: 0.5rem;
            }

            .slick-dots {
              display: none; /* Hide default dots on larger devices */
            }
          }

          /* Small Devices */
          @media (max-width: 576px) {
            .PartnerSlider .slick-slide {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 2px; /* Reduced gap between images */
            }

            .partner-image {
              max-width: 94px;
              max-height: 87px;
              flex-shrink: 0;
              margin-bottom: 0;
            }

            .slick-dots {
              bottom: 50px; /* Adjust position of dots */
            }

            .dots-container {
              display: none; /* Hide custom dots on small devices */
            }
          }
        `}
      </style>

      <Heading text={"Our Trusted Partners"} />
      <p
        className="d-none d-sm-flex text-md mt-4 text-gray-500 font-normal leading-5"
        style={{
          color: "rgba(38, 38, 38, 0.60)",
          fontSize: "22px",
          fontFamily: "Helvetica",
        }}
      >
        We work with Countries Top Hospitals, around the world
      </p>
      <p
        className="d-sm-none text-center text-sm mt-4 text-gray-500 font-normal leading-7"
        style={{
          color: "#A1A1A1",
          fontSize: "16px",
          letterSpacing: "0.8px",
          fontWeight: "400",
          fontFamily: "Helvetica",
        }}
      >
        We work with Countries Top Hospitals, around the world
      </p>
      <div
        className="inside"
        style={{
          marginTop: "1rem",
          width: "100%",
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              className="partner-image"
              src={apollotransperant}
              alt="Apollo"
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={fortisransperant}
              alt="Fortis"
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={lilavathitransperant}
              alt="Lilavati"
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={medantatransperant}
              alt="Medanta"
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={meenakshitransperant}
              alt="Meenakshi"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
