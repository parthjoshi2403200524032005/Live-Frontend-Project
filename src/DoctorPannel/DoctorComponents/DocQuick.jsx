import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";
import { UploadButton } from "../../CustomStyles/Styles";
import {
  aws_url,
  doctorDetailsGet,
  doctorDetailsUpdate,
} from "../../Service/Services";
import { toast } from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import DocQuickDetails from "./DocQuickDetails";

const DocProfile = () => {
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

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    location: "",
    specilization: [],
    gender: "",
    languages: [],
    seotitle: "",
    seodescription: "",
    homevisit: false,
    onlinevisit: false,
    profilepicurl: "",
    qualifications: [],
    experiences: [],
    registration: [],
    govtId: [],
    awards: [],
    about: "",
  });

  const forProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setForm((pre) => ({ ...pre, [name]: newValue }));
  };

  const forDoctorGet = async () => {
    const response = await doctorDetailsGet();
    if (response?.data.status) {
      setForm(response.data?.data);
      console.log(response.data.data);
    } else {
      toast.error(response?.data.message);
    }
  };

  useEffect(() => {
    forDoctorGet();
  }, []);

  const forDoctorSubmit = async () => {

    // Check for empty fields and display toast error messages
    if (!form.firstname) toast.error("First name is empty");
    if (!form.lastname) toast.error("Last name is empty");
    if (!form.email) toast.error("Email is empty");
    if (!form.mobile) toast.error("Mobile number is empty");
    if (!form.profilepicurl) toast.error("Profile picture URL is empty");
    if (form.qualifications.length === 0) toast.error("Qualifications are empty");
    if (form.registration.length === 0) toast.error("Registration is empty");

    // Check if any of the fields are empty
    if (
        !form.firstname || !form.lastname || !form.email || !form.mobile || !form.profilepicurl ||
        form.qualifications.length === 0 || form.registration.length === 0
    ) {
        return;
    }

    try {
      const responseJson = await doctorDetailsUpdate(form);
      if (responseJson.data.status) {
        toast.success(responseJson.data.message);
      } else {
        toast.error(responseJson.data.message);
      }
    } catch (error) {
      toast.error("Error occured!");
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#dae1f0",
            display: "flex",
            alignItems: "stretch",
            marginBottom: "30px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div style={{ width: "15px", backgroundColor: "#133680" }}></div>
          <p style={{ padding: "1em", marginBottom: "0px" }}>
            To facilitate your Easy onboarding process, please provide the
            necessary details with certificate copies for verification. Kindly
            include Basic Details, 1 Qualifications (Minimum Bachelor's Degree),
            1 Professional Registration in respective fields
          </p>
        </div>

        <ImageUpload
          setForm={setForm}
          fieldname={"profilepicurl"}
          imageurl={
            form.profilepicurl !== ""
              ? `${aws_url}/${form.profilepicurl}`
              : "https://healthmudraa-assets.s3.ap-south-1.amazonaws.com/1718098598539-blank-profile-picture-973460_1280.png"
          }
        />

        <Container>
          <Box component="form" noValidate sx={{ mt: 3, mb: 2 }}>
            <Grid container spacing={2} key={form._id}>
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="firstname"
                  style={{
                    paddingBottom: "5px",
                    fontSize: "18px",
                    paddingTop: "10px",
                  }}
                >
                  First Name
                </label>
                <TextField
                  required
                  fullWidth
                  value={form.firstname}
                  autoComplete="off"
                  name="firstname"
                  type="string"
                  id="FName"
                  onChange={(e) => forProfileChange(e)}
                  placeholder="First Name*"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="lastname"
                  style={{
                    paddingBottom: "5px",
                    fontSize: "18px",
                    paddingTop: "10px",
                  }}
                >
                  Last Name
                </label>
                <TextField
                  required
                  fullWidth
                  value={form.lastname}
                  autoComplete="off"
                  name="lastname"
                  type="string"
                  id="LName"
                  onChange={forProfileChange}
                  placeholder="Last Name*"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="email"
                  style={{
                    paddingBottom: "5px",
                    fontSize: "18px",
                    paddingTop: "18px",
                  }}
                >
                  Email ID
                </label>
                <TextField
                  disabled
                  required
                  fullWidth
                  value={form.email}
                  autoComplete="off"
                  name="email"
                  type="email"
                  id="email"
                  onChange={forProfileChange}
                  placeholder="Email*"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label
                  htmlFor="mobile"
                  style={{
                    paddingBottom: "5px",
                    fontSize: "18px",
                    paddingTop: "18px",
                  }}
                >
                  Mobile Number
                </label>
                <TextField
                  required
                  fullWidth
                  value={form.mobile}
                  autoComplete="off"
                  name="mobile"
                  type="number"
                  id="mob"
                  onChange={forProfileChange}
                  placeholder="Mobile Number*"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <DocQuickDetails details={form} setDetails={setForm} />

            <div
              className="d-flex justify-content-between mt-3 "
              style={{
                paddingTop: "5px",
                paddingBottom: "20px",
                position: "absolute",
                right: "15%",
              }}
            >
              <UploadButton
                onClick={forDoctorSubmit}
                style={{
                  fontFamily: "Montserrat",
                  backgroundColor: "#133680",
                  color: "white",
                }}
              >
                Submit
              </UploadButton>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default DocProfile;
