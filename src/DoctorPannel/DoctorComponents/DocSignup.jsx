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
import { LogButton } from "../../CustomStyles/Styles";
import { Link, useNavigate } from "react-router-dom";

import { doctorSignup, sendOtp } from "../../Service/Services";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import DoctorSign from "../../assets/docsignin.jpg";

const DocSignup = () => {
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

  const countryCodes = [
    { value: "+91", label: "+91(IND)" },
    { value: "+1", label: "+1(USA)" },
    { value: "+44", label: "+44(UK)" },
  ];

  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [doctor, setDoctor] = useState({
    email: "",
    mobile: null,
    password: "",
    confirmpassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerifying, setIsOtpVerifying] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpTimer, setOtpTimer] = useState(300);
  const [otpTimerRunning, setOtpTimerRunning] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false); // State for terms checkbox
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (otpTimerRunning) {
      timer = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setOtpTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpTimerRunning]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const forCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  const forMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const doctorChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const forDoctorSignup = async () => {
    const { email, password, confirmpassword } = doctor;

    if (email && password && confirmpassword) {
      setIsLoading(true);
      if (password !== confirmpassword) {
        toast.error("Password does not match");
        setIsLoading(false);
      } else {
        try {
          await sendOtp({ email });
          setIsOtpSent(true);
          setOtpTimer(300);
          setOtpTimerRunning(true);
          setIsLoading(false);
        } catch (error) {
          toast.error("An error occurred while sending OTP");
          setIsLoading(false);
        }
      }
    } else {
      toast.error("All fields are required!");
      if (password !== confirmpassword) {
        toast.error("Password does not match");
      }
    }
  };

  const verifyOtp = async () => {
    if (otpInput) {
      setIsOtpVerifying(true);
      try {
        const { email, password } = doctor;
        const data = {
          email,
          otp: otpInput,
          password,
          countrycode: countryCode,
          mobile: mobileNumber,
        };
        const response = await doctorSignup(data);
        if (response?.data) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("type", "doctors");
          navigate("/doctor/profile");
          toast.success("Account created successfully!");
        } else {
          toast.error("Failed to verify OTP");
        }
      } catch (error) {
        toast.error("An error occurred during OTP verification");
      }
      setIsOtpVerifying(false);
    } else {
      toast.error("Please enter the OTP");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
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
              Create an account
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
                {!isOtpSent ? (
                  <>
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
                      onChange={doctorChange}
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
                      Mobile Number
                    </div>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Type your mobile number"
                      onChange={forMobileNumber}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{
                              borderRight: "1px solid #858181",
                              paddingRight: "8px",
                            }}
                          >
                            <select
                              value={countryCode}
                              onChange={forCountryCode}
                              style={{
                                border: "none",
                                background: "transparent",
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                outline: "none",
                                cursor: "pointer",
                              }}
                            >
                              {countryCodes.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </InputAdornment>
                        ),
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
                              <PhoneIcon />
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
                      onChange={doctorChange}
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
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
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
                      Confirm Password
                    </div>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="confirmpassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Type your confirm password"
                      onChange={doctorChange}
                      name="confirmpassword"
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
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <LogButton
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={forDoctorSignup}
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
                      {isLoading ? <CircularProgress size={24} /> : "Sign Up"}
                    </LogButton>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "16px",
                      }}
                    >
                      <input
                        type="checkbox"
                        required
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                        style={{ marginRight: "10px" }}
                      />
                      <div style={{ marginTop:"22px", fontSize: "16px",fontstyle: "normal",color:"#717171",fontWeight:"400" }}>
                        Receive relevant offers and promotional emails By
                        signing up,I agree to{" "}
                        <Link to="/termofuse" style={{ color: "#2B75EC" }}>
                          Terms
                        </Link>
                      </div>
                    </div>
                    <Box mt={2} textAlign="center">
                      Already have an account?{" "}
                      <Link
                        to="/doctor/login"
                        style={{ color: "#133680", textDecoration: "none" }}
                      >
                        Sign In
                      </Link>
                    </Box>
                  </>
                ) : (
                  <Box textAlign="center">
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="otp"
                      label="OTP"
                      name="otp"
                      placeholder="Enter OTP"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
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
                      }}
                    />
                    <Box mt={2}>
                      {otpTimer > 0 ? (
                        <div>OTP is valid for: {formatTime(otpTimer)}</div>
                      ) : (
                        <div>OTP has expired. Please request a new one.</div>
                      )}
                    </Box>
                    <LogButton
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={verifyOtp}
                      disabled={isOtpVerifying}
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
                      {isOtpVerifying ? (
                        <CircularProgress size={24} />
                      ) : (
                        "Verify OTP"
                      )}
                    </LogButton>
                  </Box>
                )}
              </Box>
            </Card>
          </Box>
        </ThemeProvider>
      </Box>
    </React.Fragment>
  );
};

export default DocSignup;
