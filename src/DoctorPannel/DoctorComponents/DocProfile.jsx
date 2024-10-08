import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  OutlinedInput,
  Chip,
  MenuItem,
  Select,
  FormControl,
  Typography,
  Container,
  RadioGroup,
  Radio,
  Switch,
  Stack,
  Checkbox,
} from "@mui/material";
import { UploadButton } from "../../CustomStyles/Styles";
import {
  aws_url,
  doctorDetailsGet,
  doctorDetailsUpdate,
} from "../../Service/Services";
import { toast } from "react-hot-toast";
import ImageUpload from "./ImageUpload";
//import Profile from "../../assets/user.png";
import CarouselComponent from "./App";
import styled from "styled-components";
const DEFAULT_IMAGE =
  "https://healthmudraa-assets.s3.ap-south-1.amazonaws.com/1718098598539-blank-profile-picture-973460_1280.png";

const DocProfile = () => {
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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const lang = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Malayali",
    "Kannada",
    "Odiya",
    "Bengali",
  ];

  const specialitionData = [
    "Endocrinology",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Neurology",
    "Gynecology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Haematology",
    "Bariatric",
    "Physical Therapy",
    "Gastroenterology",
    "Nephrology",
    "Hematology",
    "Oncology",
    "Pulmanology",
    "Opthalmology",
    "Pulmonology",
    "Urology",
    "Infectious Disease",
    "Allergy and Immunology",
    "Rheumatology",
    "Anesthesiology",
    "Plastic Surgery",
    "Ophthalmology",
    "Otolaryngology (ENT)",
    "Maxillofacial Surgery",
    "Vascular Surgery",
    "Neurosurgery",
    "Reproductive Medicine",
    "Neonatology",
    "Geriatrics",
    "Palliative Care",
    "Sports Medicine",
    "Pain Management",
    "Clinical Genetics",
    "Medical Genetics",
    "Pediatric Surgery",
    "Pediatric Cardiology",
    "Pediatric Endocrinology",
    "Pediatric Hematology-Oncology",
    "Pediatric Nephrology",
    "Pediatric Neurology",
    "Pediatric Rheumatology",
    "Pediatric Gastroenterology",
    "Pediatric Pulmonology",
    "Pediatric Infectious Disease",
    "Pediatric Allergy and Immunology",
    "Pediatric Critical Care Medicine",
    "Pediatric Emergency Medicine",
    "Pediatric Dentistry",
    "Pediatric Orthopedics",
    "Pediatric Rehabilitation Medicine",
    "Pediatric Radiology",
    "Pediatric Dermatology",
    "Pediatric Neurosurgery",
    "Pediatric Urology",
    "Pediatric Otolaryngology",
    "Pediatric Plastic Surgery",
    "Pediatric Sports Medicine",
    "Pediatric Hospice and Palliative Medicine",
    "Wilderness Medicine",
    "Aerospace Medicine",
    "Legal Medicine (Forensic Medicine)",
    "Addiction Medicine",
    "Pain Medicine",
    "Clinical Pharmacology",
    "Geriatric Psychiatry",
    "Forensic Psychiatry",
    "Sleep Medicine",
    " Reproductive Medicine (Fertility)",
    "Andrology",
    "Complex General Surgical Oncology",
    "Female Pelvic Medicine and Reconstructive Surgery (Urogynecology)",
    "Hospice and Palliative Medicine",
    "Preventive Medicine",
    "Disaster Medicine",
    "Medical Toxicology",
    "Clinical Informatics",
    "Neuropsychology",
    "Pediatric Neuropsychology",
    "Child and Adolescent Psychiatry",
    "Developmental-Behavioral Pediatrics",
    "Behavioral Neurology",
    "Vascular Neurology",
    "Psychopharmacology",
    "Molecular Pathology",
    "Clinical Oncology",
    "Orthodontics",
    "Gerontology",
    "Public Health",
    "Medical Laboratory Science",
    "Medical Illustration",
    "Health Informatics",
    "Telemedicine",
    "Occupational Therapy",
    "Speech-Language Pathology",
    "Nutrigenetics",
    "Orthoptics",
    "Cardiothoracic Surgery",
    "Rehabilitation Counseling",
    "Behavioral Medicine",
    "Medical Physics",
  ];

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
    hospitalvisits: true,
  });
  const navigate = useNavigate();

  const forProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setForm((pre) => ({ ...pre, [name]: newValue }));
  };

  const forDoctorGet = async () => {
    const response = await doctorDetailsGet();
    if (response?.data.status) {
      const doctorData = response.data?.data;

      // Set default value if not present
      if (doctorData.hospitalvisits === undefined) {
        doctorData.hospitalvisits = true;
      }

      setForm(doctorData);
      console.log(response.data.data);
    } else {
      toast.error(response?.data.message);
    }

    if (!response.data.data.verified) navigate("/doctor/alert");
  };

  useEffect(() => {
    forDoctorGet();
  }, []);

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

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <ImageUpload
          setForm={setForm}
          fieldname={"profilepicurl"}
          imageurl={
            form.profilepicurl !== ""
              ? `${aws_url}/${form.profilepicurl}`
              : `${DEFAULT_IMAGE}`
          }
        />
        <Container>
          <Box component="form" noValidate sx={{ mt: 3, mb: 2 }}>
            <Grid container spacing={2} key={form._id}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={form.location}
                  autoComplete="off"
                  name="location"
                  type="string"
                  id="location"
                  onChange={forProfileChange}
                  placeholder="Location*"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Select
                    name="specilization"
                    value={form.specilization ? form.specilization : []}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    sx={{
                      height: `${
                        form?.specilization?.length >= 3 ? "auto" : "2.4em"
                      }`,
                      fontFamily: "Montserrat",
                    }}
                    multiple
                    displayEmpty
                    onChange={forProfileChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        sx={{
                          fontFamily: "Montserrat",
                        }}
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected && selected.length === 0 ? (
                          <Typography
                            component={"p"}
                            sx={{ color: "#9E9FA8", fontFamily: "Montserrat" }}
                          >
                            Specilization
                          </Typography>
                        ) : (
                          selected &&
                          selected.map((value) => (
                            <Chip
                              sx={{ fontFamily: "Montserrat" }}
                              key={value}
                              label={value}
                            />
                          ))
                        )}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <Typography
                        component={"p"}
                        sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
                      >
                        Specilizations
                      </Typography>
                    </MenuItem>
                    {specialitionData.map((name) => (
                      <MenuItem
                        sx={{ fontFamily: "Montserrat" }}
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  value={form.gender}
                  name="gender"
                  sx={{
                    border: "1px solid #9E9FA8",
                    padding: 0.28,
                    borderRadius: 1,
                  }}
                  onChange={forProfileChange}
                >
                  <FormControlLabel
                    className="ps-2"
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    className="ps-2"
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    className="ps-2"
                    value="Others"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Select
                    name="languages"
                    value={form.languages ? form.languages : []}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    sx={{
                      height: `${
                        form.languages?.length >= 3 ? "auto" : "2.4em"
                      }`,
                      fontFamily: "Montserrat",
                    }}
                    multiple
                    displayEmpty
                    onChange={forProfileChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        sx={{
                          fontFamily: "Montserrat",
                        }}
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected && selected.length === 0 ? (
                          <Typography
                            component={"p"}
                            sx={{ color: "#9E9FA8", fontFamily: "Montserrat" }}
                          >
                            Languages
                          </Typography>
                        ) : (
                          selected &&
                          selected.map((value) => (
                            <Chip
                              sx={{ fontFamily: "Montserrat" }}
                              key={value}
                              label={value}
                            />
                          ))
                        )}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <Typography
                        component={"p"}
                        sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
                      >
                        Languages Known
                      </Typography>
                    </MenuItem>
                    {lang.map((name) => (
                      <MenuItem
                        sx={{ fontFamily: "Montserrat" }}
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={form.seotitle}
                  autoComplete="off"
                  name="seotitle"
                  type="string"
                  id="seotitle"
                  onChange={forProfileChange}
                  placeholder="Seo Title"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={form.seodescription}
                  autoComplete="off"
                  name="seodescription"
                  type="string"
                  id="seodescription"
                  onChange={forProfileChange}
                  placeholder="Seo Description"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
              </Grid> */}

              {/* <Stack direction="row" spacing={1} alignItems="center"></Stack> */}
              <Grid item xs={12} >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    border: "1px solid #9E9FA8",
                    padding: 0.28,
                    borderRadius: 1,
                    justifyContent: "space-between",
                    width: "1150px", // Increased width here
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography className="ms-2">
                      Clinic/hospital visits
                    </Typography>
                    <Checkbox
                      name="hospitalvisits"
                      checked={form.hospitalvisits}
                      onChange={forProfileChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography>
                      {form.hospitalvisits ? "Yes" : "No"}
                    </Typography>
                  </div>

                  <div
                    style={{
                      width: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography className="ms-2">Home Visit</Typography>
                    <Checkbox
                      name="homevisit"
                      checked={form.homevisit}
                      onChange={forProfileChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography>{form.homevisit ? "Yes" : "No"}</Typography>
                  </div>

                  <div
                    style={{
                      width: "300px", // Adjusted width for this section
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography className="ms-2">Online Visit</Typography>
                    <Checkbox
                      name="onlinevisit"
                      checked={form.onlinevisit}
                      onChange={forProfileChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <Typography>{form.onlinevisit ? "Yes" : "No"}</Typography>
                  </div>
                </Stack>
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    border: "1px solid #9E9FA8",
                    padding: 0.28,
                    borderRadius: 1,
                  }}
                >
                  
                </Stack>
              </Grid> */}
            </Grid>
            {/* <DocDetails details={form} setDetails={setForm} /> */}
            <div
              className="d-flex justify-content-between mt-3"
              style={{
                paddingTop: "5px",
                paddingBottom: "20px",
                position: "absolute",
                right: "15%",
              }}
            >
              <UploadButton
                onClick={forDoctorSubmit}
                style={{ fontFamily: "Montserrat" }}
              >
                Save Changes
              </UploadButton>

              <UploadButton
                to="/doctor/about"
                style={{
                  fontFamily: "Montserrat",
                  backgroundColor: "#133680",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                Next
              </UploadButton>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default DocProfile;
