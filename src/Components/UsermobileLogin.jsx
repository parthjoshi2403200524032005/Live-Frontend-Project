import React, { useState } from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import { LogButton } from "../CustomStyles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Service/Services";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

import LogoImage from "../assets/image.png";

const UsermobileLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const forUserLogin = async () => {
    const { email, password } = user;

    if (email && password) {
      setIsLoading(true);
      try {
        const response = await userLogin({ email, password });
        if (response?.data) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("type", "users");
          navigate("/user/dashboard");
          toast.success("Logged in successfully!");
        } else {
          toast.error("Failed to log in");
        }
      } catch (error) {
        toast.error("An error occurred during login");
      }
      setIsLoading(false);
    } else {
      toast.error("All fields are required!");
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
          top: "60px",
          left: "calc(50% - 185px/2 - 84.5px)",
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
          Welcome Back
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
          Login to continue
        </Typography>
        <div
          style={{
            margin: "normal",
            width: "350px",
            height: "70px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            onChange={userChange}
            style={{
              width: "100%",
              height: "100%",
              padding: "10px",
              paddingRight: "40px",
              borderRadius: "14px",
              backgroundColor: "#FFF",
              boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
              color: "rgba(38, 38, 38, 0.80)",
              fontFamily: "Poppins, sans-serif",
              border: "none",
              outline: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton>
              <PersonIcon />
            </IconButton>
          </div>
        </div>
        <div
          style={{
            margin: "normal",
            width: "350px",
            height: "70px",
            position: "relative",
            marginBottom: "16px",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Type your password"
            onChange={userChange}
            style={{
              width: "100%",
              height: "100%",
              padding: "17px 16px",
              borderRadius: "14px",
              border: "none",
              background: "#FFF",
              boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
              fontFamily: "Poppins, sans-serif",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <IconButton onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          <Box
            component="span"
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
          variant="contained"
          onClick={forUserLogin}
          style={{
            marginTop: "20px",
            backgroundColor: "#133682",
            color: "#F9FCFF",
            borderRadius: "10px",
            width: "350px",
            height: "53px",
          }}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "Log In"}
        </LogButton>
        <Typography
          variant="body2"
          component="p"
          style={{ marginTop: "20px", fontSize: "16px" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "rgba(66, 126, 255, 0.80)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default UsermobileLogin;
