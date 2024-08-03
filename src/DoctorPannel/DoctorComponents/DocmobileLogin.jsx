import React, { useState } from "react";
import {
  Box,
  Card,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LogButton } from "../../CustomStyles/Styles"; // Adjust the import path
import UserIcon from "../../Components/Svgs/User.svg"; // Adjust the import path
import LogoImage from "../../assets/image.png"; // Adjust the import path
import { useNavigate } from "react-router-dom";
import { doctorLogin, doctorDetailsGet } from "../../Service/Services";
import { toast } from "react-hot-toast";

const DocmobileLogin = () => {
  const [doctor, setDoctor] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const doctorChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

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

  return (
    <Box
      component="div"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFCFC",
        position: "relative",
      }}
    >
      <img
        src={LogoImage}
        alt="Logo"
        style={{
          position: "absolute",
          top: "64px",
          left: "calc(50% - 170px/2 - 84.5px)",
          width: "170px",
          height: "47px",
        }}
      />
      <Card
        sx={{
          p: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FCFCFC",
          boxShadow: "none",
          borderRadius: "14px",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          style={{
            color: "#363636",
            fontSize: "28px",
            fontWeight: "600",
            width: "350px",
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="body1"
          component="p"
          style={{
            marginBottom: "24px",
            color: "#363636",
            fontSize: "16px",
            fontWeight: "400",
            width: "350px",
          }}
        >
          Sign in to continue
        </Typography>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email / Mobile Number"
            onChange={doctorChange}
            style={{
              width: "350px",
              height: "70px",
              padding: "10px",
              paddingRight: "40px", // Add padding to the right to accommodate the icon
              borderRadius: "14px",
              backgroundColor: "#FFF",
              boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
              color: "rgba(38, 38, 38, 0.80)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              border: "none",
              outline: "none",
              position: "relative",
            }}
          />
          <img
            src={UserIcon}
            alt="user icon"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              height: "24px",
            }}
          />
        </div>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            onChange={doctorChange}
            style={{
              width: "350px",
              height: "70px",
              padding: "10px",
              paddingRight: "40px", // Add padding to the right to accommodate the icon
              borderRadius: "14px",
              backgroundColor: "#FFF",
              boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
              color: "rgba(38, 38, 38, 0.80)",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              border: "none",
              outline: "none",
              position: "relative",
            }}
          />
          <IconButton
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={togglePasswordVisibility}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          <Box
            component="span"
            onClick={() => navigate("/doctor/forgotpassword")}
            style={{
              color: "rgba(38, 38, 38, 0.40)",
              textAlign: "right",
              fontFamily: "Poppins",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              position: "absolute",
              right: "10px",
              bottom: "-20px",
            }}
          >
            Forgot Password?
          </Box>
        </div>
        <LogButton
          fullWidth
          type="button"
          style={{
            marginTop: "20px",
            backgroundColor: "#133682",
            color: "#F9FCFF",
            borderRadius: "10px",
            width: "350px",
            height: "53px",
          }}
          onClick={forDoctorLogin}
          disabled={isLoading}
          startIcon={
            isLoading ? <CircularProgress size={20} color="inherit" /> : null
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
                color: "rgba(66, 126, 255, 0.80)",
                cursor: "pointer",
              }}
              onClick={() => navigate("/doctor/signup")}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default DocmobileLogin;
