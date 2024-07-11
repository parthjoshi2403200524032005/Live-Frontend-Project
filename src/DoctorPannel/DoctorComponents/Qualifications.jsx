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
    CircularProgress,
  } from "@mui/material";
  import DatePicker from "react-datepicker";
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

function Qualifications() {
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


      const [qual, setQual] = useState({
        degree: "",
        collegeName: "",
        location: "",
        fromYear: null,
        toYear: null,
        certificateurl: "",
      });
    
      const [loading, setLoading] = useState({
        qualification: false,
        govt: false,
        experience: false,
        registration: false,
      });

      const [image, setImage] = useState({ preview: "", data: "" });
    
      const [imagechanged, setImagechanged] = useState(false);
      const [edit, setEdit] = useState("");
      const currentYear = new Date().getFullYear();
    
      const handleFromYearChange = (date) => {
        setQual({ ...qual, fromYear: date.getFullYear() });
      };
    
      const handleToYearChange = (date) => {
        setQual({ ...qual, toYear: date.getFullYear() });
      };
    
      const forQualificationChange = (e) => {
        const { name, value } = e.target;
        setQual({ ...qual, [name]: value });
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
    
      const handleAddQualification = async () => {
        setLoading((prev) => ({ ...prev, qualification: true }));
    
        if (!qual.degree) toast.error("Degree is empty");
        if (!qual.collegeName) toast.error("College name is empty");
        if (!qual.location) toast.error("Location is empty");
        if (!qual.fromYear) toast.error("From year is empty");
        if (!qual.toYear) toast.error("To year is empty");
        if (!imagechanged && !qual.certificateurl) toast.error("Certificate URL is empty");
        if (imagechanged) {
          console.log("upload");
          var file = await forUploadImage("qualification");
          setQual((prev) => ({ ...prev, certificateurl: file }));
        }
        if (
          qual.degree &&
          qual.collegeName &&
          qual.location &&
          qual.fromYear &&
          qual.toYear &&
          (file || qual.certificateurl)
        ) {
          const updatedNewQual = [...details.qualifications];
          updatedNewQual.push({
            ...qual,
            certificateurl: file ? file : qual.certificateurl,
          });
          setDetails((prevState) => ({
            ...prevState,
            qualifications: updatedNewQual,
          }));
    
          setQual({
            degree: "",
            collegeName: "",
            location: "",
            fromYear: null,
            toYear: null,
            certificateurl: "",
          });
        }
        setImage({ preview: "", data: "" });
        setImagechanged(false);
        setLoading((prev) => ({ ...prev, qualification: false }));
      };
    
      const handleEditQualification = (index) => {
        const qualificationToEdit = details.qualifications[index];
        setQual({
          degree: qualificationToEdit.degree,
          collegeName: qualificationToEdit.collegeName,
          location: qualificationToEdit.location,
          fromYear: qualificationToEdit.fromYear,
          toYear: qualificationToEdit.toYear,
          certificateurl: qualificationToEdit.certificateurl,
        });
    
        const updatedNewQual = details.qualifications.filter(
          (_, xd) => xd !== index
        );
    
        setDetails((prevState) => ({
          ...prevState,
          qualifications: updatedNewQual,
        }));
        setEdit("qualification");
      };
    
      const handleDeleteQualification = (index) => {

    
        if (details.qualifications?.length > 0) {
          const updatedApiQual = details.qualifications.filter(
            (_, xd) => xd !== index
          );
          setDetails((prevState) => ({
            ...prevState,
            qualifications: updatedApiQual,
          }));
        }
      };
 

  return (
    <React.Fragment>
      <Box>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box component={"div"} className="qualifications" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"} style={{}}>
            Qualifications
          </Typography>
          <Grid item xs={12} sm={6} md={6} lg={5}>
              <Box component={"div"} className="pb-2">
                <InputLabel style={{paddingTop:"15px", paddingBottom:"10px"}}>Degree Certificate</InputLabel>
                <ImageUploadFile
                  setForm={setQual}
                  fieldname={"certificateurl"}
                  tempimage={image}
                  imageurl={
                    qual.certificateurl !== ""
                      ? `${aws_url}/${qual.certificateurl}`
                      : ""
                  }
                  name={"qualification"}
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
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"2px"}}>Degree</InputLabel>
              <TextField
                required
                fullWidth
                value={qual.degree}
                autoComplete="off"
                name="degree"
                type="string"
                onChange={forQualificationChange}
                placeholder="Eg. MBBS"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>College</InputLabel>  
              <TextField
                required
                fullWidth
                value={qual.collegeName}
                autoComplete="off"
                name="collegeName"
                type="string"
                onChange={forQualificationChange}
                placeholder="CollegeName*"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Location</InputLabel>  
              <TextField
                required
                fullWidth
                value={qual.location}
                autoComplete="off"
                name="location"
                type="string"
                onChange={forQualificationChange}
                placeholder="Eg. Chennai"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>From year</InputLabel>  
              <DatePicker
                selected={qual.fromYear ? new Date(qual.fromYear, 0, 1) : null}
                onChange={handleFromYearChange}
                dateFormat="yyyy"
                showYearPicker
                maxDate={new Date(currentYear, 11, 31)} // Restrict to current year
                placeholderText="Eg. 2016"
                className="form-control"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>To Year</InputLabel>  
              <DatePicker
                selected={qual.toYear ? new Date(qual.toYear, 0, 1) : null}
                onChange={handleToYearChange}
                dateFormat="yyyy"
                showYearPicker
                minDate={qual.fromYear ? new Date(qual.fromYear, 0, 1) : null}
                maxDate={new Date(currentYear, 11, 31)}
                placeholderText="Eg. 2021"
                className="form-control"
              />
            </Grid>
            
          </Grid>
          <div style={{marginTop:"2em"}}>
          <UploadButton className="mt-3 px-4" onClick={handleAddQualification}>
            {loading.qualification ? <CircularProgress size={25} /> : "Add"}
          </UploadButton>
          </div>
          <DetailCard
            DataType={details.qualifications}
            TicketName={"Qualification"}
            DataEditFunction={handleEditQualification}
            DataDeleteFunction={handleDeleteQualification}
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
              to="/doctor/experience"
              style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" ,marginLeft:"20px" }}
            >
              Next
            </UploadButton>
      </div>          

      </Box>       
  </React.Fragment>   
  )
}

export default Qualifications