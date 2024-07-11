import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import ResponsiveDiv from "./styles/style"
import CarouselComponent from "./App"
import { UploadButton } from "../../CustomStyles/Styles";
import {
  Box,
  Grid,
  ThemeProvider,
  createTheme,
  Typography,
} from "@mui/material";
import {
  doctorDetailsGet,
  doctorDetailsUpdate,
} from "../../Service/Services";

function About() {
    
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
  const forDoctorGet = async () => {
    const response = await doctorDetailsGet();
    if (response?.data.status) {
      setForm(response.data?.data);
      console.log(response.data.data);
    } else {
      toast.error(response?.data.message);
    }
  };
  const forDoctorSubmit = async () => {
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

  useEffect(() => {
    forDoctorGet();
  }, []);
  
  
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box>
          <ResponsiveDiv>
            <CarouselComponent />
          </ResponsiveDiv>

          <Box component={"div"} className="about" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"}>
            About
          </Typography>
          <Grid container spacing={2} sx={{ marginY: 0.05 }}>
            <Grid item xs={12} sm={12} md={12} lg={10}>
              {/* <TextField
                id="multiline-text"
                placeholder="About"
                multiline
                rows={4}
                value={details.about}
                onChange={(e) => {
                  setDetails((prev) => ({
                    ...prev,
                    about: e.target.value,
                  }));
                }}
                fullWidth
              /> */}
              <ReactQuill
                theme="snow"
                value={form.about}
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,
                    about: e,
                  }));
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <div className="d-flex justify-content-between mt-3" style={{paddingTop:"5px" , paddingBottom:"20px" , position:"absolute" , right:"15%"}}>
              <UploadButton
                onClick={forDoctorSubmit}
                style={{ fontFamily: "Montserrat" }}
              >
                Save Changes
              </UploadButton>

              <UploadButton
                to="/doctor/qualifications"
                style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" ,marginLeft:"20px" }}
              >
                Next
              </UploadButton>
        </div>          

        </Box>       
      </ThemeProvider>
    </React.Fragment>   
  )
}

export default About;