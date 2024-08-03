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
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    CircularProgress,
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

function GovermentID() {
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
  
      const [govtId, setGovtId] = useState({
        proofType: "",
        proofNumber: "",
        govtIdurl: "",
      });
      const [image, setImage] = useState({ preview: "", data: "" });
    
      const [imagechanged, setImagechanged] = useState(false);
      const [edit, setEdit] = useState("");
    
      const forGovtChange = (e) => {
        const { name, value } = e.target;
        setGovtId({ ...govtId, [name]: value });
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
    
      // const handleAddGovt = async () => {
      //   setLoading((prev) => ({ ...prev, govt: true }));
      //   if (imagechanged) {
      //     console.log("upload");
      //     var file = await forUploadImage("govt");
      //     setGovtId((prev) => ({ ...prev, govtIdurl: file }));
      //   }
      //   if (
      //     govtId.proofNumber &&
      //     govtId.proofNumber &&
      //     (file || govtId.govtIdurl)
      //   ) {
      //     const updatedNewGovt = [...details.govtId];
      //     updatedNewGovt.push({
      //       ...govtId,
      //       govtIdurl: file ? file : govtId.govtIdurl,
      //     });
      //     setDetails((prevState) => ({
      //       ...prevState,
      //       govtId: updatedNewGovt,
      //     }));
      //     setGovtId({ proofType: "", proofNumber: "", govtIdurl: "" });
      //   }
      //   setImage({ preview: "", data: "" });
      //   setImagechanged(false);
      //   setLoading((prev) => ({ ...prev, govt: false }));
      // };

      const handleAddGovt = async () => {
        setLoading((prev) => ({ ...prev, govt: true }));

        let file;
        if (imagechanged) {
          try {
            file = await forUploadImage("govt");
            if (!file) {
              throw new Error("Failed to upload image.");
            }
            setGovtId((prev) => ({ ...prev, govtIdurl: file }));
          } catch (error) {
            toast.error("Error uploading image. Please try again.");
            setLoading((prev) => ({ ...prev, govt: false }));
            return;
          }
        }

        if (!govtId.proofType) {
          toast.error("Proof type is required.");
          setLoading((prev) => ({ ...prev, govt: false }));
          return;
        }
        if (!govtId.proofNumber) {
          toast.error("Proof number is required.");
          setLoading((prev) => ({ ...prev, govt: false }));
          return;
        }

        if (!file && !govtId.govtIdurl) {
          toast.error("Please upload a government ID certificate.");
          setLoading((prev) => ({ ...prev, govt: false }));
          return;
        }

        const updatedNewGovt = [...details.govtId];
        updatedNewGovt.push({
          ...govtId,
          govtIdurl: file ? file : govtId.govtIdurl,
        });

        setDetails((prevState) => ({
          ...prevState,
          govtId: updatedNewGovt,
        }));

        setGovtId({ proofType: "", proofNumber: "", govtIdurl: "" });

        setImage({ preview: "", data: "" });
        setImagechanged(false);

        setLoading((prev) => ({ ...prev, govt: false }));
      };

    
      const handleEditGovt = (index) => {
        const govtData = details.govtId[index];
        setGovtId({
          proofType: govtData.proofType,
          proofNumber: govtData.proofNumber,
          govtIdurl: govtData.govtIdurl,
        });
        const updatedNewGovt = details.govtId.filter((_, xd) => xd !== index);
   
        setDetails((prevState) => ({
          ...prevState,
          govtId: updatedNewGovt,
        }));
        setEdit("govt");
      };
    
      const handleDeleteGovt = (index) => {
        
        if (details.govtId?.length > 0) {
          const updatedApiGovt = details.govtId.filter((_, xd) => xd !== index);
          setDetails((prevState) => ({
            ...prevState,
            govtId: updatedApiGovt,
          }));
        }
      };
 
  return (
    <React.Fragment>
      <Box>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box component={"div"} className="govtId" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"}>
            Goverentment Id
          </Typography>

          <Grid item xs={12} sm={6} md={6} lg={5}>
              <Box component={"div"} className="pb-2">
                <InputLabel>Government Id Proof</InputLabel>
                <ImageUploadFile
                  setForm={setGovtId}
                  fieldname={"govtIdurl"}
                  imageurl={
                    govtId.govtIdurl !== ""
                      ? `${aws_url}/${govtId.govtIdurl}`
                      : ""
                  }
                  name={"govt"}
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
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  sx={{ height: "2.4em" }}
                  value={govtId.proofType}
                  onChange={forGovtChange}
                  name="proofType"
                >
                  <MenuItem disabled value="">
                    Select Id
                  </MenuItem>
                  <MenuItem value={"Driving License"}>Driving License</MenuItem>
                  <MenuItem value={"Aadhar Id"}>Aadhar Id</MenuItem>
                  <MenuItem value={"Pan Id"}>Pan Id</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <TextField
                required
                fullWidth
                value={govtId.proofNumber}
                autoComplete="off"
                name="proofNumber"
                type="string"
                placeholder="Govt Id*"
                onChange={forGovtChange}
                InputProps={{
                  sx: {
                    height: "2.4em",
                  },
                }}
              />
            </Grid>
            
          </Grid>
          <div style={{marginTop:"2em"}}>
          <UploadButton className="mt-3 px-4" onClick={handleAddGovt}>
            {loading.govt ? <CircularProgress size={25} /> : "Add"}
          </UploadButton>
          </div>
          <DetailCard
            DataType={details.govtId}
            TicketName={"Identity"}
            DataEditFunction={handleEditGovt}
            DataDeleteFunction={handleDeleteGovt}
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
              to="/doctor/awards"
              style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" ,marginLeft:"20px" }}
            >
              Next
            </UploadButton>
      </div>          

      </Box>        
  </React.Fragment>   
  )
}

export default GovermentID