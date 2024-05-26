import styled from "styled-components";
import { Flex } from "./CommonStyles";

export const SpecificVideoWrapper = styled(Flex)`
  padding: 24px;
  gap: 20px;
  .videoDetails {
    width: 70%;
  }
  .leadFormWrapper {
    width: 30%;
    .leadForm {
      margin-top:30px;
      position: sticky !important;
      top: 20px;
      right: 0;
      width: 100%;
    }
  }
  .qa-item {
    border-width: 0px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: rgb(209 213 219);
  }
  .question-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .question{
    margin-top:5px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    .videoDetails {
      width: 100%;
    }
    .leadFormWrapper {
      width: 100%;
    }
    .leadForm {
      display: none;
    }
    
  }
`;

export const BookAppointmentFixedbar = styled(Flex)`
  position: fixed;
  bottom: 55px;
  padding: 15px;
  background: #000;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: white;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 472px) {
    display: none;
  }
`;
