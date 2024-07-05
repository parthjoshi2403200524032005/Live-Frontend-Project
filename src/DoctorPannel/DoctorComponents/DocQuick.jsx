import React, { useEffect, useState } from "react";
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
import Profile from "../../assets/user.png";

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

      <div style={{ width: "100%", backgroundColor: "#dae1f0", display: "flex", alignItems: "stretch", marginBottom: "30px" ,  borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
        <div style={{ width: "15px", backgroundColor: "#133680" }}></div>
        <p style={{ padding: "1em" , marginBottom:"0px" }}>For Quick Onboarding, kindly provide the necessary details for verification by selecting EITHER qualifications OR registration.</p>
      </div>


        <ImageUpload
          setForm={setForm}
          fieldname={"profilepicurl"}
          imageurl={
            form.profilepicurl !== "" ? `${aws_url}/${form.profilepicurl}` : "https://healthmudraa-assets.s3.ap-south-1.amazonaws.com/1718098598539-blank-profile-picture-973460_1280.png"
          }
        />
        
        <Container>
          <Box component="form" noValidate sx={{ mt: 3, mb: 2 }}>
            <Grid container spacing={2} key={form._id}>
              <Grid item xs={12} sm={6}>
                <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>First Name</label>
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
              <label htmlFor="lastname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>Last Name</label>
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
              <label htmlFor="email" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Email ID</label>
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
              <label htmlFor="mobile" style={{ paddingBottom: "5px", fontSize: "18px" , paddingTop:"18px" }}>Mobile Number</label>
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

            <div className="d-flex justify-content-between mt-3 " style={{paddingTop:"5px" , paddingBottom:"20px" , position:"absolute" , right:"15%"}}>

              <UploadButton
                onClick={forDoctorSubmit}
                style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" , }}
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
