import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  searchHospital,
  sendRequest,
  getSentRequest,
} from "../../Service/Services";
import toast from "react-hot-toast";
import CarouselComponent from "./App";
import styled from "styled-components";

const JoinHospital = () => {
  const ResponsiveDiv = styled.div`
    @media (max-width: 600px) {
      width: 400px;
    }
    /* For medium devices (tablets, 600px to 900px) */
    @media (min-width: 601px) and (max-width: 900px) {
      width: 600px;
    }
    /* For large devices (desktops, 900px and up) */
    @media (min-width: 901px) {
      width: 1200px;
    }
  `;

  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#133680",
      },
      secondary: {
        main: "#f50057",
      },
      text: {
        primary: "#000000",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  const [searchText, setSearchText] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetHospitals = async (searchTerm) => {
    const responseJson = await searchHospital(searchTerm);
    if (responseJson.data.status) {
      const result = responseJson.data.data.map((key) => ({
        value: key._id,
        label: `${key.hospitalName}, ${key.hospitalLocation}`,
      }));
      setHospitals(result);
    } else {
      setHospitals([]); // Clear hospitals if no results
    }
  };

  const handleSendRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!selectedHospital) {
      setLoading(false);
      toast.error("Please select a hospital to send the request");
      return;
    }
    const requestBody = { hospitalId: selectedHospital?.value };
    const responseJson = await sendRequest(requestBody);
    if (responseJson.data.status) {
      toast.success(responseJson.data.message);
    } else {
      toast.error(responseJson.data.message);
    }
    setLoading(false);
    await getSendRequest();
  };

  const getSendRequest = async () => {
    const responseJson = await getSentRequest();
    if (responseJson.data.status) {
      setRequests(responseJson.data.data);
    }
  };

  useEffect(() => {
    getSendRequest();
    handleGetHospitals(searchText);
  }, [searchText]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box
          display={"flex"}
          marginTop={"0.5rem"}
          justifyContent={"space-around"}
        >
          <Box style={{ width: "80%", position: "relative" }}>
            <TextField
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                handleGetHospitals(e.target.value); 
              }}
              placeholder="Search for a hospital..."
              fullWidth
            />
            {searchText && hospitals.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  zIndex: 10,
                }}
              >
                {hospitals.map((hospital) => (
                  <Box
                    key={hospital.value}
                    onClick={() => {
                      setSelectedHospital(hospital);
                      setSearchText(hospital.label); // Optionally set search text to selected value
                      setHospitals([]); // Clear suggestions after selection
                    }}
                    sx={{
                      padding: "8px",
                      borderBottom: "1px solid #ddd",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    {hospital.label}
                  </Box>
                ))}
                {hospitals.length === 0 && (
                  <Typography
                    sx={{
                      padding: "8px",
                      textAlign: "center",
                      color: "#999",
                    }}
                  >
                    No hospitals found
                  </Typography>
                )}
              </Box>
            )}
          </Box>
          <Button
            variant="contained"
            color="success"
            onClick={handleSendRequest}
            style={{ width: "10%" }}
          >
            {loading ? (
              <CircularProgress style={{ color: "white" }} size={20} />
            ) : (
              "Request"
            )}
          </Button>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
          {requests.length > 0 &&
            requests.map((request) => (
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 600,
                  border: "1px solid #133680",
                  my: 2,
                  p: 1.2,
                  borderRadius: 1,
                }}
              >
                <Box component={"div"}>
                  <Typography component={"p"}>
                    {request.hospitalname}
                  </Typography>
                </Box>
                <Box component={"div"}>
                  <Typography
                    component="p"
                    sx={{ color: "green", fontWeight: "600", fontSize: 16 }}
                  >
                    {request.status === "Pending" ? "Sent" : request.status}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default JoinHospital;
