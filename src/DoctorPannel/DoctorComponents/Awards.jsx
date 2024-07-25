import React, { useEffect, useState } from "react";
import CarouselComponent from "./App"
import { toast } from "react-hot-toast";
import ResponsiveDiv from "./styles/style"
import { UploadButton } from "../../CustomStyles/Styles";
import {
    Grid,
    TextField,
    Box,
    Stack,
    Typography,
  } from "@mui/material";
  import "react-datepicker/dist/react-datepicker.css";
  import DetailCard from "./DetailCard";
  import "react-quill/dist/quill.snow.css";
import {
  doctorDetailsGet,
  doctorDetailsUpdate,
} from "../../Service/Services";

function Awards() {
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

      const [awardIt, setAwardIt] = useState("");
      const [awards, setAwards] = useState([]);
 
      const forAwardsAdd = () => {
        if (awardIt.trim() !== "") {
          const updatedNewAWard = [...details.awards];
          updatedNewAWard.push(awardIt);
          setDetails((prevState) => ({
            ...prevState,
            awards: updatedNewAWard,
          }));
          setAwardIt("");
        }
      };
    
      const handleEditAward = (index) => {
        const editedAward = details.awards[index];
        setAwardIt(editedAward);
        const updatedAwards = details.awards.filter((_, xd) => xd !== index);
        setDetails((prevState) => ({
          ...prevState,
          awards: updatedAwards,
        }));
      };
    
      const handleDeleteAward = (index) => {
        setAwards(awards.filter((_, xd) => xd !== index));
        if (details.awards?.length > 0) {
          const updatedApiAwards = details.awards.filter((_, xd) => xd !== index);
          setDetails((prevState) => ({
            ...prevState,
            awards: updatedApiAwards,
          }));
        }
      };
     
  return (
    <React.Fragment>
      <Box>
        <ResponsiveDiv>
          <CarouselComponent />
        </ResponsiveDiv>

        <Box component={"div"} className="Awards" sx={{ marginY: 1.5 }} style={{marginLeft:"3em"}}>
          <Typography variant="h5" component={"h5"}>
            Awards
          </Typography>
          <Grid container spacing={2} sx={{ marginY: 0.05 }}>
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  required
                  fullWidth
                  autoComplete="off"
                  type="string"
                  placeholder="Awards*"
                  value={awardIt}
                  onChange={(e) => setAwardIt(e.target.value)}
                  InputProps={{
                    sx: {
                      height: "2.4em",
                    },
                  }}
                />
                <UploadButton onClick={forAwardsAdd}>Add</UploadButton>
              </Stack>
            </Grid>
          </Grid>
          <DetailCard
            DataType={details.awards}
            TicketName={"Awards"}
            DataEditFunction={handleEditAward}
            DataDeleteFunction={handleDeleteAward}
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
              to="/doctor/joinhospital"
              style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" ,marginLeft:"20px" }}
            >
              Next
            </UploadButton>
      </div>          

      </Box>        
  </React.Fragment>   
  )
}

export default Awards