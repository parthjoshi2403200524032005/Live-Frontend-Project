import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  IconButton,
  Typography,
  CircularProgress,
  
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { LogButton } from "../../CustomStyles/Styles"; // Adjust the import path
import LogoImage from "../../assets/image.png"; // Adjust the import path
import { Link, useNavigate } from "react-router-dom";
import { doctorSignup, sendOtp } from "../../Service/Services";
import { toast } from "react-hot-toast";

const DocmobileSignup = () => {
  const [doctor, setDoctor] = useState({
    email: "",
    mobile: null,
    password: "",
    confirmpassword: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpTimer, setOtpTimer] = useState(300);
  const [otpTimerRunning, setOtpTimerRunning] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false); // State for terms checkbox
  const navigate = useNavigate();

  const countryCodes = [
    { value: "+91", label: "+91(IND)" },
    { value: "+1", label: "+1(USA)" },
    { value: "+44", label: "+44(UK)" },
  ];

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
      setIsLoading(true);
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
      setIsLoading(false);
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
          Sign up to continue
        </Typography>
        {!isOtpSent ? (
          <>
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
                onChange={doctorChange}
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
              <div style={{ display: "flex" }}>
                <select
                  value={countryCode}
                  onChange={forCountryCode}
                  style={{
                    width: "100px",
                    borderRadius: "14px 0 0 14px",
                    border: "none",
                    backgroundColor: "#FFF",
                    fontFamily: "Poppins, sans-serif",
                    
                    outline: "none",
                    cursor: "pointer",
                    padding: "10px",
                    marginRight: "-1px", // Slight overlap adjustment
                    boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
                    textOverflow: "ellipsis", // To handle long country codes
                  }}
                >
                  {countryCodes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Type your mobile number"
                  value={mobileNumber}
                  onChange={forMobileNumber}
                  style={{
                    width: "250px",
                    height: "70px",
                    padding: "10px",
                    paddingLeft: "10px",
                    borderRadius: "0 14px 14px 0",
                    border: "none",
                    backgroundColor: "#FFF",
                    boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.05)",
                    color: "rgba(38, 38, 38, 0.80)",
                    fontFamily: "Poppins, sans-serif",
                    
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    outline: "none",
                    position: "relative",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <IconButton>
                  <PhoneIcon />
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
                onChange={doctorChange}
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
                name="confirmpassword"
                placeholder="Confirm your password"
                onChange={doctorChange}
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
            </div>

            <LogButton
              variant="contained"
              onClick={forDoctorSignup}
              style={{
                marginTop: "20px",
                backgroundColor: "#133682",
                color: "#F9FCFF",
                borderRadius: "10px",
                width: "350px",
                height: "53px",
              }}
              disabled={isLoading || !agreeTerms}
            >
              {isLoading ? <CircularProgress size={24} /> : "Sign up"}
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
                style={{ marginLeft: "20px" ,marginRight:"10px" }}
              />
              <div
                style={{
                  marginTop: "22px",
                  fontSize: "16px",
                  fontstyle: "normal",
                  color: "#717171",
                  fontWeight: "400",
                }}
              >
                Receive relevant offers and promotional emails By signing up,I
                agree to{" "}
                <Link to="/termofuse" style={{ color: "#2B75EC" }}>
                  Terms
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              component="p"
              style={{ margin: "20px 0", fontSize: "18px" }}
            >
              We have sent an OTP to your email. Please enter it below to verify
              your account.
            </Typography>
            <div
              style={{
                margin: "normal",
                width: "350px",
                height: "70px",
                marginBottom: "16px",
              }}
            >
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
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
            </div>
            <LogButton
              variant="contained"
              onClick={verifyOtp}
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
              {isLoading ? <CircularProgress size={24} /> : "Verify OTP"}
            </LogButton>
            {otpTimerRunning && (
              <Typography
                variant="body2"
                component="p"
                style={{ marginTop: "20px", fontSize: "16px" }}
              >
                Resend OTP in {formatTime(otpTimer)}
              </Typography>
            )}
          </>
        )}
        <Typography
          variant="body2"
          component="p"
          style={{ marginTop: "20px", fontSize: "16px" }}
        >
          Already have an account?{" "}
          <Link
            to="/doctor/login"
            style={{ color: "rgba(66, 126, 255, 0.80)",fontWeight: 600, textDecoration: "none" }}
          >
            Sign In
          </Link>
        </Typography>
      </Card>
    </Box>
  );
};

export default DocmobileSignup;
