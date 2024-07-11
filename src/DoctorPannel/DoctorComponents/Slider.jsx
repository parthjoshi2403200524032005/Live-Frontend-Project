import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CarouselComponent = () => {
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
        { id: "Hospital Profile", link: "/doctor/hospitalprofile" },
        { id: "Hospital Requests", link: "/doctor/requests" },
      ],
    },
  ];
  
  return (
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
  );
};

export default CarouselComponent;

// Styled components
const CarouselContainer = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  overflow: hidden;
  margin-top: 20px;
`;

const CarouselButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold; /* Make text bold */
  color: black; /* Set text color to black */
  border: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  white-space: nowrap;
  width: 150px; /* Set a fixed width */
  height: 40px; /* Set a fixed height */
  text-align: center;
  text-decoration: none;
  margin: 0 5px; /* Add margin for spacing between buttons */

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
    color: #133680; /* Set text color to #133680 when active */
    &::after {
      transform: scaleX(1);
      background-color: #133680; /* Set active bottom border color to #133680 */
    }
  }

  @media (max-width: 600px) {
    width: 120px; /* Adjust the width for smaller screens */
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100px; /* Adjust the width for even smaller screens */
    font-size: 12px;
  }
`;


const SlickSlide = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;
