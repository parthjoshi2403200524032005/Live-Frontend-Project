import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Box,
  ThemeProvider,
  createTheme,
  Card,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LogButton } from "../../CustomStyles/Styles";
import DocmobileLogin from "./DocmobileLogin";
import DoctorSign from "../../assets/docsignin.jpg";
import UserIcon from "../../Components/Svgs/User.svg"; // Import the user icon
import { doctorLogin, doctorDetailsGet } from "../../Service/Services";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const DocLogin = () => {
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
  });

  const [doctor, setDoctor] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 750px)").matches
  );
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const doctorChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.matchMedia("(max-width: 750px)").matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const forDoctorLogin = async () => {
    if (doctor.email && doctor.password) {
      setIsLoading(true);

      try {
        const doctData = await doctorLogin(doctor);
        localStorage.setItem("accessToken", doctData.data.accessToken);
        localStorage.setItem("refreshToken", doctData.data.refreshToken);
        localStorage.setItem("type", "doctors");
        toast.success("Successfully logged in!");

        const response = await doctorDetailsGet();
        if (response?.data.status) {
          console.log(response.data.data.verified);
        } else {
          console.log(response?.data.message);
        }

        response.data.data.verified
          ? navigate("/doctor/profile")
          : navigate("/doctor/quickOnboarding");
      } catch (error) {
        toast.error("Invalid credentials!");
      }

      setIsLoading(false);
    } else {
      toast.error("Please enter your credentials");
    }
  };
  return isMobile ? (
    <DocmobileLogin />
  ) : (
    <React.Fragment>
      <Box
        component={"div"}
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          height: "100vh",
          display: "flex",
          backgroundColor: "#D7E7FF",
        }}
      >
        <ThemeProvider theme={theme}>
          <Box
            component="img"
            src={DoctorSign}
            style={{ width: "50%", height: "100vh", objectFit: "cover" }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 20px",
              width: "50%",
            }}
          >
            <div
              style={{
                color: "#363636",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "36px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Login To Continue
            </div>
            <Card
              sx={{
                p: 3.4,
                zIndex: 1,
                py: 4.2,
                width: "100%",
                maxWidth: "534px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box component="form" sx={{ width: "100%", mt: 1 }}>
                <div
                  style={{
                    color: "#363636",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginBottom: "0px", // Remove space below the label
                    marginTop: "0px",
                    marginLeft: "14px", // Remove space above the label
                  }}
                >
                  Email/Phone Number
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  autoComplete="off"
                  type="email"
                  placeholder="Type your email or phone number"
                  onChange={doctorChange}
                  name="email"
                  InputProps={{
                    style: {
                      height: "59px",
                      fontFamily: "Montserrat",
                      padding: "17px 16px",
                      borderRadius: "14px",
                      border: "1px solid #858181",
                      background: "var(--Background-Background, #FFF)",
                      marginBottom: "0px", // Remove space below the input
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <img src={UserIcon} alt="user icon" />
                      </InputAdornment>
                    ),
                  }}
                />
                <div
                  style={{
                    color: "#363636",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginBottom: "0px", // Remove space below the label
                    marginTop: "16px",
                    marginLeft: "14px", // Space above the label, adjust if needed
                  }}
                >
                  Password
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Type your password"
                  onChange={doctorChange}
                  InputProps={{
                    style: {
                      height: "59px",
                      fontFamily: "Montserrat",
                      padding: "17px 16px",
                      borderRadius: "14px",
                      border: "1px solid #858181",
                      background: "var(--Background-Background, #FFF)",
                      marginBottom: "0px", // Remove space below the input
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      style={{
                        accentColor: "#133682",
                      }}
                    />
                    <label
                      htmlFor="rememberMe"
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Poppins",
                        color: "#133682",
                      }}
                    >
                      Remember Me
                    </label>
                  </div>
                  <Box
                    component={"a"}
                    onClick={() => navigate("/doctor/forgotpassword")}
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Poppins",
                      color: "#133680",
                    }}
                  >
                    Forgot Password?
                  </Box>
                </div>
                <LogButton
                  fullWidth
                  type="button"
                  style={{
                    fontWeight: "bold",
                    height: "59px",
                    fontFamily: "Montserrat",
                    marginTop: "25px",
                    borderRadius: "14px",
                    width: "100%",
                    background: "#133682",
                    color: "#ffffff",
                  }}
                  onClick={forDoctorLogin}
                  disabled={isLoading}
                  startIcon={
                    isLoading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : null
                  }
                >
                  {isLoading ? "Logging in..." : "Login"}
                </LogButton>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <div
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      letterSpacing: "0.32px",
                      lineHeight: "normal",
                    }}
                  >
                    Don't have an account?{" "}
                    <span
                      style={{
                        fontWeight: 600,
                        color: "#133682",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/doctor/signup")}
                    >
                      Sign Up
                    </span>
                  </div>
                </div>
              </Box>
            </Card>
          </Box>
        </ThemeProvider>
      </Box>
    </React.Fragment>
  );
};

export default DocLogin;
