import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  ThemeProvider,
  createTheme,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LogButton } from "../CustomStyles/Styles";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Service/Services"; // Adjust as per your service file
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import UserSign from "../assets/userdoc.jpeg"; // Update with your user image
import UsermobileLogin from "./UsermobileLogin";

const Login = () => {
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

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 750px)").matches
  );
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.matchMedia("(max-width: 750px)").matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const userChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const forUserLogin = async () => {
    const { email, password } = user;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (email && password) {
      if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address!");
      } else {
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
            toast.error("Invalid Credential");
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            toast.error("Invalid email or password. Please try again");
          } else {
            toast.error("An error occurred during login");
          }
        }
        setIsLoading(false);
      }
    } else {
      if (!email) {
        toast.error("Email is required!");
      } else if (!password) {
        toast.error("password is required!");
      } else {
        toast.error("All fields are required!");
      }
    }
  };

  return isMobile ? (
    <UsermobileLogin />
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
            src={UserSign}
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
              Login
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
                    marginBottom: "0px",
                    marginTop: "0px",
                    marginLeft: "14px",
                  }}
                >
                  Email
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  autoComplete="off"
                  type="email"
                  placeholder="Type your email"
                  onChange={userChange}
                  name="email"
                  InputProps={{
                    style: {
                      height: "59px",
                      fontFamily: "Montserrat",
                      padding: "17px 16px",
                      borderRadius: "14px",
                      border: "1px solid #858181",
                      background: "#FFF",
                      marginBottom: "0px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <PersonIcon />
                        </IconButton>
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
                    marginBottom: "0px",
                    marginTop: "16px",
                    marginLeft: "14px",
                  }}
                >
                  Password
                </div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Type your password"
                  onChange={userChange}
                  name="password"
                  InputProps={{
                    style: {
                      height: "59px",
                      fontFamily: "Montserrat",
                      padding: "17px 16px",
                      borderRadius: "14px",
                      border: "1px solid #858181",
                      background: "#FFF",
                      marginBottom: "0px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
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
                    onClick={() => navigate("/forgotpassword")}
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
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={forUserLogin}
                  disabled={isLoading}
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
                >
                  {isLoading ? <CircularProgress size={24} /> : "Login"}
                </LogButton>
                <Box mt={2} textAlign="center">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "#133680", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </Box>
              </Box>
            </Card>
          </Box>
        </ThemeProvider>
      </Box>
    </React.Fragment>
  );
};

export default Login;
