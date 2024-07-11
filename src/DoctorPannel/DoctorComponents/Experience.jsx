import React, { useEffect, useState } from "react";
import CarouselComponent from "./App"
import { toast } from "react-hot-toast";
import ResponsiveDiv from "./styles/style"
import { UploadButton } from "../../CustomStyles/Styles";
import {
    Grid,
    TextField,
    Box,
    Typography,
    InputLabel,
    FormControlLabel,
    CircularProgress,
    Checkbox,
  } from "@mui/material";
  import "react-datepicker/dist/react-datepicker.css";
  import DetailCard from "./DetailCard";
  import ImageUploadFile from "./ImageUploadFile";
  import { ProImageUpload } from "../../Service/Services";
 

  import "react-quill/dist/quill.snow.css";
import {
  aws_url,
  doctorDetailsGet,
  doctorDetailsUpdate,
} from "../../Service/Services";

function Experience() {
      const [details, setDetails] = useState({
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
          setDetails(response.data?.data);
          console.log(response.data.data);
        } else {
          toast.error(response?.data.message);
        }
      };
      const forDoctorSubmit = async () => {
        try {
          const responseJson = await doctorDetailsUpdate(details);
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
    
      const [loading, setLoading] = useState({
        qualification: false,
        govt: false,
        experience: false,
        registration: false,
      });
    
      const [exp, setExp] = useState({
        hosptalname: "",
        location: "",
        desigination: "",
        startdate: "",
        enddate: "",
        experienceurl: "",
        currentlyworking: false,
      });
      const [experiences, setExperiences] = useState([]);
    
      const [image, setImage] = useState({ preview: "", data: "" });
    
      const [imagechanged, setImagechanged] = useState(false);
      const [edit, setEdit] = useState("");
    
      const today = new Date().toISOString().split("T")[0];
      const handleStartDateChange = (e) => {
        const dated = e.target.value;
        setExp({ ...exp, startdate: dated });
      };
    
      const handleEndDateChange = (e) => {
        const dated = e.target.value;
        if (dated >= exp.startdate) {
          setExp({ ...exp, enddate: dated });
        }
      };
    
      const forExpChange = (e) => {
        const { name, value } = e.target;
        setExp({ ...exp, [name]: value });
      };
    
      const handleCurrentWork = (e) => {
        setExp((prev) => ({
          ...prev,
          currentlyworking: !prev.currentlyworking,
          enddate: !prev.currentlyworking ? "Present" : "",
        }));
      };
    
      const handleExperience = async () => {
        setLoading((prev) => ({ ...prev, experience: true }));
        let file;
        if (imagechanged) {
          file = await forUploadImage("experience");
          setExp((prev) => ({ ...prev, experienceurl: file }));
        }
        if (
          exp.hosptalname &&
          exp.desigination &&
          exp.location &&
          exp.startdate &&
          exp.enddate &&
          (file || exp.experienceurl)
        ) {
          const updatedNewExp = [...details.experiences];
          updatedNewExp.push({
            ...exp,
            experienceurl: file ? file : exp.experienceurl,
          });
          setDetails((prevState) => ({
            ...prevState,
            experiences: updatedNewExp,
          }));
          setExp({
            hosptalname: "",
            location: "",
            desigination: "",
            startdate: "",
            enddate: "",
            experienceurl: "",
          });
        }
        setImage({ preview: "", data: "" });
        setImagechanged(false);
        setLoading((prev) => ({ ...prev, experience: false }));
      };
    
      const handleEditExperience = (index) => {
        const experienceToEdit = details.experiences[index];
        setExp({
          hosptalname: experienceToEdit.hosptalname,
          location: experienceToEdit.location,
          desigination: experienceToEdit.desigination,
          startdate: experienceToEdit.startdate,
          enddate: experienceToEdit.enddate,
          experienceurl: experienceToEdit.experienceurl,
          currentlyworking: experienceToEdit.currentlyworking || false,
        });
    
        const updatedNewExp = details.experiences.filter((_, xd) => xd !== index);
        setExperiences(updatedNewExp);
        setDetails((prevState) => ({
          ...prevState,
          experiences: updatedNewExp,
        }));
        setEdit("experience");
      };
    
      const handleDeleteExperience = (index) => {
        const updatedLocalExperiences = experiences.filter((_, xd) => xd !== index);
        setExperiences(updatedLocalExperiences);
    
        if (details.experiences?.length > 0) {
          const updatedApiExperiences = details.experiences.filter(
            (_, xd) => xd !== index
          );
          setDetails((prevState) => ({
            ...prevState,
            experiences: updatedApiExperiences,
          }));
        }
      };
      const forUploadImage = async (type) => {
        let data = new FormData();
        data.append("image", image.data);
        const response = await ProImageUpload(data);
    
        if (response.data.status) {
          return response.data.data.fileName;
        }
        return " ";
      };

  return (
    <React.Fragment>
      <Box>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box component={"div"} className="experiences" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"}>
            Experiences
          </Typography>

          <Grid item xs={12} sm={6} md={6} lg={5}>
              <Box component={"div"} className="pb-2">
                <InputLabel>Experience Certificate</InputLabel>
                <ImageUploadFile
                  setForm={setExp}
                  fieldname={"experienceurl"}
                  imageurl={
                    exp.experienceurl !== ""
                      ? `${aws_url}/${exp.experienceurl}`
                      : ""
                  }
                  name={"experience"}
                  tempimage={image}
                  setImagechanged={setImagechanged}
                  setTempImage={setImage}
                  card={true}
                  edit={edit}
                  setEdit={setEdit}
                />
              </Box>
            </Grid>

          <Grid container spacing={2} sx={{ marginY: 0.05 }}>
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <TextField
                required
                fullWidth
                value={exp.hosptalname}
                autoComplete="off"
                name="hosptalname"
                type="string"
                onChange={forExpChange}
                placeholder="Hospital Name*"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <TextField
                required
                fullWidth
                value={exp.location}
                autoComplete="off"
                name="location"
                type="string"
                onChange={forExpChange}
                placeholder="Location*"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <TextField
                required
                fullWidth
                value={exp.desigination}
                autoComplete="off"
                name="desigination"
                type="string"
                onChange={forExpChange}
                placeholder="Designation*"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <input
                className="form-control"
                type="date"
                value={exp.startdate}
                max={today}
                onChange={handleStartDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              {exp.currentlyworking ? (
                <TextField
                  fullWidth
                  placeholder="Present"
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                  disabled
                />
              ) : (
                <input
                  className="form-control"
                  type="date"
                  value={exp.enddate}
                  min={exp.startdate}
                  max={today}
                  onChange={handleEndDateChange}
                />
              )}
            </Grid>
            
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <Box component={"div"} className="pb-2">
                <FormControlLabel
                  onClick={handleCurrentWork}
                  control={<Checkbox />}
                  label="Currently Work Here"
                  checked={exp.currentlyworking}
                />
              </Box>
            </Grid>
          </Grid>
          <UploadButton className="mt-3 px-4" onClick={handleExperience}>
            {loading.experience ? <CircularProgress size={25} /> : "Add"}
          </UploadButton>
          <DetailCard
            DataType={details.experiences}
            TicketName={"Experience"}
            DataEditFunction={handleEditExperience}
            DataDeleteFunction={(index) => handleDeleteExperience(index)}
          />
        </Box>

      <div className="d-flex justify-content-between mt-3" style={{paddingTop:"5px" , paddingBottom:"20px" , position:"absolute" , right:"15%"}}>
            <UploadButton
              onClick={forDoctorSubmit}
              style={{ fontFamily: "Montserrat" }}
            >
              Save Changes
            </UploadButton>

            <UploadButton
              to="/doctor/registration"
              style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" ,marginLeft:"20px" }}
            >
              Next
            </UploadButton>
      </div>          

      </Box>       
  </React.Fragment>   
  )
}

export default Experience