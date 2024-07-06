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

function Registration() {
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
    
      const [reg, setReg] = useState({
        council: "",
        regno: "",
        year: null,
        registrationurl: "",
      });
      const [registrations, setRegistrations] = useState([]);
  
      const [image, setImage] = useState({ preview: "", data: "" });
    
      const [imagechanged, setImagechanged] = useState(false);
      const [edit, setEdit] = useState("");
      const currentYear = new Date().getFullYear();
    
      const forRegChange = (e) => {
        const { name, value } = e.target;
        setReg({ ...reg, [name]: value });
      };
    
      const handleRegYearChange = (date) => {
        setReg({ ...reg, year: date });
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
    
      const handleAddRegistrations = async () => {
        setLoading((prev) => ({ ...prev, registration: true }));
        if (imagechanged) {
          console.log("upload");
          var file = await forUploadImage("registration");
          setReg((prev) => ({ ...prev, registrationurl: file }));
        }
        if (reg.council && reg.regno && reg.year && (file || reg.registrationurl)) {
          const RegYearX = reg.year ? reg.year.getFullYear() : null;
          const updatedNewReg = [...details.registration];
          updatedNewReg.push({
            ...reg,
            year: RegYearX.toString(),
            registrationurl: file ? file : reg.registrationurl,
          });
          console.log({
            ...reg,
            year: RegYearX.toString(),
            registrationurl: file ? file : reg.registrationurl,
          });
          setDetails((prevState) => ({
            ...prevState,
            registration: updatedNewReg,
          }));
    
          setReg({ council: "", regno: "", year: null, registrationurl: "" });
        }
        setImage({ preview: "", data: "" });
        setImagechanged(false);
        setLoading((prev) => ({ ...prev, registration: false }));
      };
    
      const handleEditRegistrations = (index) => {
        const regToEdit = details.registration[index];
        setReg({
          council: regToEdit.council,
          regno: regToEdit.regno,
          year: null,
          registrationurl: regToEdit.registrationurl,
        });
    
        const updatedNewReg = details.registration.filter((_, xd) => xd !== index);

        setDetails((prevState) => ({
          ...prevState,
          registration: updatedNewReg,
        }));
        setEdit("registration");
      };
    
      const handleDeleteRegistrations = (index) => {
        const updatedLocalReg = registrations.filter((_, xd) => xd !== index);
        setRegistrations(updatedLocalReg);
    
        if (details.registration?.length > 0) {
          const updatedApiReg = details.registration.filter(
            (_, xd) => xd !== index
          );
          setDetails((prevState) => ({
            ...prevState,
            registration: updatedApiReg,
          }));
        }
      };
    
  return (
    <React.Fragment>
      <Box>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box component={"div"} className="registrations" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"} style={{}}>
            Registrations
          </Typography>
          <Grid item xs={12} sm={6} md={6} lg={5}>
              <Box component={"div"} className="pb-2">
                <InputLabel style={{paddingTop:"15px", paddingBottom:"10px"}}>Registration Certificate</InputLabel>
                <ImageUploadFile
                  setForm={setReg}
                  fieldname={"registrationurl"}
                  imageurl={
                    reg.registrationurl !== ""
                      ? `${aws_url}/${reg.registrationurl}`
                      : ""
                  }
                  name={"registration"}
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
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Council Name</InputLabel>  
              <TextField
                required
                fullWidth
                value={reg.council}
                autoComplete="off"
                name="council"
                type="string"
                onChange={forRegChange}
                placeholder="Eg. Tamil Nadu Medical Council"
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Registration Number</InputLabel>  
              <TextField
                required
                fullWidth
                value={reg.regno}
                autoComplete="off"
                name="regno"
                type="string"
                onChange={forRegChange}
                placeholder="Eg. "
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <InputLabel style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Registration Year</InputLabel>  
              <DatePicker
                selected={reg.year}
                onChange={handleRegYearChange}
                showYearPicker
                dateFormat="yyyy"
                maxDate={new Date(currentYear, 11, 31)}
                placeholderText="Eg. 2021"
                className="form-control"
              />
            </Grid>
            
          </Grid>
          <div style={{marginTop:"2em"}}>
          <UploadButton className="mt-3 px-4" onClick={handleAddRegistrations}>
            {loading.registration ? <CircularProgress size={25} /> : "Add"}
          </UploadButton>
          </div>
          <DetailCard
            DataType={details.registration}
            TicketName={"Registration"}
            DataEditFunction={handleEditRegistrations}
            DataDeleteFunction={handleDeleteRegistrations}
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

export default Registration