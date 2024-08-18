import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CarouselComponent = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const categories = [
    {
      children: [
        { id: "Basic Details", link: "/doctor/profile" },
        { id: "About", link: "/doctor/about" },
        { id: "Qualifications", link: "/doctor/qualifications" },
        { id: "Experience", link: "/doctor/experience" },
        { id: "Registration", link: "/doctor/registration" },
        { id: "Government ID", link: "/doctor/govID" },
        { id: "Awards", link: "/doctor/awards" },
        { id: "Join Hospital", link: "/doctor/joinhospital" },
      ],
    },
  ];

  return (
    <>
      <CarouselContainer>
        <Slider {...settings}>
          {categories[0].children.map(category => (
            <SlickSlide key={category.id}>
              <CarouselButton to={category.link}>
                {category.id}
              </CarouselButton>
            </SlickSlide>
          ))}
        </Slider>
      </CarouselContainer>

      <OpenPanelButton onClick={() => setIsPanelOpen(true)}>
       Categories
      </OpenPanelButton>

      {isPanelOpen && (
        <SidePanel>
          
          {categories[0].children.map(category => (
            <PanelButton key={category.id} to={category.link} style={{
              marginTop: "35px",
            }} onClick={() => setIsPanelOpen(false)}>
              {category.id}
             
            </PanelButton>
          ))}
           <CloseButton style={{ marginTop: "35px" }} onClick={() => setIsPanelOpen(false)}>×</CloseButton>
        </SidePanel>
      )}
    </>
  );
};

export default CarouselComponent;

// Styled components
const CarouselContainer = styled.div`
  width: auto;
  height: 100px;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: none; /* Hide carousel on smaller screens */
  }
`;

const CarouselButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: black;
  border: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  white-space: nowrap;
  width: 150px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  margin: 0 5px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #133680;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    color: #133680;
    &::after {
      transform: scaleX(1);
      background-color: #133680;
    }
  }

  @media (max-width: 600px) {
    width: 80px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 100px;
    font-size: 12px;
  }
`;

const SlickSlide = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const OpenPanelButton = styled.button`
  position: fixed;
  right: 20px;
  padding: 5px 5px;
  font-size: 16px;
  background-color: #133680;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  
  @media (min-width: 601px) {
    display: none; /* Hide the button on larger screens */
  }

  @media (max-width: 600px) {
    display: block; /* Show the button on smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SidePanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: transform 0.3s ease;
  transform: translateX(0);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #133680;
`;

const PanelButton = styled(NavLink)`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #133680;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
