import React, { useState } from "react";
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
import { UploadButton } from "../../CustomStyles/Styles";
import DetailCard from "./DetailCard";
import ImageUploadFile from "./ImageUploadFile";
import { ProImageUpload, aws_url } from "../../Service/Services";
import { toast } from "react-hot-toast";
//import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DocQuickDetails = ({ details, setDetails }) => {
  const [qual, setQual] = useState({
    degree: "",
    collegeName: "",
    location: "",
    fromYear: null,
    toYear: null,
    certificateurl: "",
  });
  //const [qualifications, setQualifications] = useState([]);

  const [loading, setLoading] = useState({
    qualification: false,
    govt: false,
    experience: false,
    registration: false,
  });

  // const [exp, setExp] = useState({
  //   hosptalname: "",
  //   location: "",
  //   desigination: "",
  //   startdate: "",
  //   enddate: "",
  //   experienceurl: "",
  //   currentlyworking: false,
  // });
  //const [experiences, setExperiences] = useState([]);

  const [reg, setReg] = useState({
    council: "",
    regno: "",
    year: null,
    registrationurl: "",
  });
  const [registrations, setRegistrations] = useState([]);

  // const [govtId, setGovtId] = useState({
  //   proofType: "",
  //   proofNumber: "",
  //   govtIdurl: "",
  // });
  //const [govIdententification, setGovIdententification] = useState([]);

  //const [awardIt, setAwardIt] = useState("");
  //const [awards, setAwards] = useState([]);
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

  //const today = new Date().toISOString().split("T")[0];
  // const handleStartDateChange = (e) => {
  //   const dated = e.target.value;
  //   setExp({ ...exp, startdate: dated });
  // };

  // const handleEndDateChange = (e) => {
  //   const dated = e.target.value;
  //   if (dated >= exp.startdate) {
  //     setExp({ ...exp, enddate: dated });
  //   }
  // };

  // const forExpChange = (e) => {
  //   const { name, value } = e.target;
  //   setExp({ ...exp, [name]: value });
  // };

  const forRegChange = (e) => {
    const { name, value } = e.target;
    setReg({ ...reg, [name]: value });
  };

  const handleRegYearChange = (date) => {
    setReg({ ...reg, year: date });
  };

  // const forGovtChange = (e) => {
  //   const { name, value } = e.target;
  //   setGovtId({ ...govtId, [name]: value });
  // };

  // const forAwardsAdd = () => {
  //   if (awardIt.trim() !== "") {
  //     const updatedNewAWard = [...details.awards];
  //     updatedNewAWard.push(awardIt);
  //     setDetails((prevState) => ({
  //       ...prevState,
  //       awards: updatedNewAWard,
  //     }));
  //     setAwardIt("");
  //   }
  // };

  // const handleEditAward = (index) => {
  //   const editedAward = details.awards[index];
  //   setAwardIt(editedAward);
  //   const updatedAwards = details.awards.filter((_, xd) => xd !== index);
  //   setDetails((prevState) => ({
  //     ...prevState,
  //     awards: updatedAwards,
  //   }));
  // };

  // const handleDeleteAward = (index) => {
  //   setAwards(awards.filter((_, xd) => xd !== index));
  //   if (details.awards?.length > 0) {
  //     const updatedApiAwards = details.awards.filter((_, xd) => xd !== index);
  //     setDetails((prevState) => ({
  //       ...prevState,
  //       awards: updatedApiAwards,
  //     }));
  //   }
  // };

  // const [details, setDetails] = useState({
  //   qualifications: [],
  //   experiences: [],
  //   registration: [],
  //   govtId: [],
  //   awards: [],
  // });

  // useEffect(() => {
  //   getDetails();
  // }, []);

  // const handleCurrentWork = (e) => {
  //   setExp((prev) => ({
  //     ...prev,
  //     currentlyworking: !prev.currentlyworking,
  //     enddate: !prev.currentlyworking ? "Present" : "",
  //   }));
  // };

  // const handleExperience = async () => {
  //   setLoading((prev) => ({ ...prev, experience: true }));
  //   let file;
  //   if (imagechanged) {
  //     file = await forUploadImage("experience");
  //     setExp((prev) => ({ ...prev, experienceurl: file }));
  //   }
  //   if (
  //     exp.hosptalname &&
  //     exp.desigination &&
  //     exp.location &&
  //     exp.startdate &&
  //     exp.enddate &&
  //     (file || exp.experienceurl)
  //   ) {
  //     const updatedNewExp = [...details.experiences];
  //     updatedNewExp.push({
  //       ...exp,
  //       experienceurl: file ? file : exp.experienceurl,
  //     });
  //     setDetails((prevState) => ({
  //       ...prevState,
  //       experiences: updatedNewExp,
  //     }));
  //     setExp({
  //       hosptalname: "",
  //       location: "",
  //       desigination: "",
  //       startdate: "",
  //       enddate: "",
  //       experienceurl: "",
  //     });
  //   }
  //   setImage({ preview: "", data: "" });
  //   setImagechanged(false);
  //   setLoading((prev) => ({ ...prev, experience: false }));
  // };

  // const handleEditExperience = (index) => {
  //   const experienceToEdit = details.experiences[index];
  //   setExp({
  //     hosptalname: experienceToEdit.hosptalname,
  //     location: experienceToEdit.location,
  //     desigination: experienceToEdit.desigination,
  //     startdate: experienceToEdit.startdate,
  //     enddate: experienceToEdit.enddate,
  //     experienceurl: experienceToEdit.experienceurl,
  //     currentlyworking: experienceToEdit.currentlyworking || false,
  //   });

  //   const updatedNewExp = details.experiences.filter((_, xd) => xd !== index);
  //   setExperiences(updatedNewExp);
  //   setDetails((prevState) => ({
  //     ...prevState,
  //     experiences: updatedNewExp,
  //   }));
  //   setEdit("experience");
  // };

  // const handleDeleteExperience = (index) => {
  //   const updatedLocalExperiences = experiences.filter((_, xd) => xd !== index);
  //   setExperiences(updatedLocalExperiences);

  //   if (details.experiences?.length > 0) {
  //     const updatedApiExperiences = details.experiences.filter(
  //       (_, xd) => xd !== index
  //     );
  //     setDetails((prevState) => ({
  //       ...prevState,
  //       experiences: updatedApiExperiences,
  //     }));
  //   }
  // };
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
    // const updatedLocalQual = qualifications.filter((_, xd) => xd !== index);
    // setExperiences(updatedLocalQual);

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

  const handleAddRegistrations = async () => {
    setLoading((prev) => ({ ...prev, registration: true }));

    if (!reg.council) toast.error("Council is empty");
    if (!reg.regno) toast.error("Registration number is empty");
    if (!reg.year) toast.error("Year is empty");
    if (!imagechanged && !reg.registrationurl) toast.error("Registration URL is empty");

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
    //setQualifications(updatedNewReg);
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

  // const handleEditGovt = (index) => {
  //   const govtData = details.govtId[index];
  //   setGovtId({
  //     proofType: govtData.proofType,
  //     proofNumber: govtData.proofNumber,
  //     govtIdurl: govtData.govtIdurl,
  //   });
  //   const updatedNewGovt = details.govtId.filter((_, xd) => xd !== index);
  //   setGovIdententification(updatedNewGovt);
  //   setDetails((prevState) => ({
  //     ...prevState,
  //     govtId: updatedNewGovt,
  //   }));
  //   setEdit("govt");
  // };

  // const handleDeleteGovt = (index) => {
  //   const updatedLocalGovt = govIdententification.filter(
  //     (_, xd) => xd !== index
  //   );
  //   setRegistrations(updatedLocalGovt);

  //   if (details.govtId?.length > 0) {
  //     const updatedApiGovt = details.govtId.filter((_, xd) => xd !== index);
  //     setDetails((prevState) => ({
  //       ...prevState,
  //       govtId: updatedApiGovt,
  //     }));
  //   }
  // };

  return (
    <React.Fragment>
        <Box>
        <Box component={"div"} className="qualifications" sx={{ marginY: 1.5 }}>
          <Typography variant="h5" component={"h5"} style={{paddingTop:"50px"}}>
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

        <Box component={"div"} className="registrations" sx={{ marginY: 1.5 }}>
          <Typography variant="h5" component={"h5"} style={{paddingTop:"50px"}}>
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
      </Box>
      {/* <UploadButton className="mt-3 px-4" onClick={handleSubmit}>
            Save
          </UploadButton> */}
    </React.Fragment>
  );
};

export default DocQuickDetails;
