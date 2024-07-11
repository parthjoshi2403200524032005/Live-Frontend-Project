import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Stack,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Button,
  Chip
} from "@mui/material";

import Plyr from "plyr-react";
import { UploadButton } from "../../CustomStyles/Styles";
import {
  doctorDetailsGet,
  getDoctorVideos,
  createDoctorVideo,
  deleteDoctorVideo,
  updateDoctorVideo,
} from "../../Service/Services";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const VideoFetch = () => {
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

  // const [videoInfo, setVideoInfo] = useState({
  //   link: "",
  //   title: "",
  //   description: "",
  //   category: "",
  // });

  const [categories] = useState([
    "General",
    "Brain and Nerves",
    "Bones and Muscles",
    "Skin/hair care",
    "Emergency care",
    "Pregnancy and Childbirth",
    "Eye care",
    "Child care",
    "Mental Health",
    "Lungs care",
    "Urinary System care",
    "Cancer Care",
    "Teeth and Oral care",
    "Veterinary - Animals care",
    "Diet/Nutrition",
    "Stomach-Intestines",
    "Liver care",
    "Kidney care",
    "Ear Nose Throat",
    "Acupressure therapy",
  ];


  const [videoInfo, setVideoInfo] = useState({
    link: "",
    title: "",
    description: "",
    category: "",
    keywords: [],
    questionsAnswers: []
  });

  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const handlePost = async () => {
    if (videoInfo.title && videoInfo.link) {
      const responseJson = await createDoctorVideo(videoInfo);
      if (responseJson.data.status) {
        toast.success(responseJson.data.message);
        getDoctorDetails();
        setVideoInfo({
          link: "",
          title: "",
          description: "",
          category: "",
          keywords: [],
          questionsAnswers: []
        });
      } else {
        toast.error(responseJson.data.message);
      }
    }
  };

  const deleteVideo = async (id) => {
    const responseJson = await deleteDoctorVideo(id);
    if (responseJson.data.status) {
      toast.success(responseJson.data.message);
      getDoctorDetails();
    } else {
      toast.error(responseJson.data.message);
    }
  };

  const updateVideo = async () => {
    const responseJson = await updateDoctorVideo(videoInfo._id, videoInfo);
    if (responseJson.data.status) {
      toast.success(responseJson.data.message);
      setVideoInfo({
        link: "",
        title: "",
        description: "",
        category: "",
        keywords: [],
        questionsAnswers: []
      });
      getDoctorDetails();
    } else {
      toast.error(responseJson.data.message);
    }
  };

  const handleAddKeyword = () => {
    if (currentKeyword.trim() !== "") {
      setVideoInfo({
        ...videoInfo,
        keywords: [...videoInfo.keywords, currentKeyword]
      });
      setCurrentKeyword("");
    }
  };

  const handleDeleteKeyword = (index) => {
    const newKeywords = [...videoInfo.keywords];
    newKeywords.splice(index, 1);
    setVideoInfo({
      ...videoInfo,
      keywords: newKeywords
    });
  };

  const handleAddQuestionAnswer = () => {
    if (currentQuestion.trim() !== "" && currentAnswer.trim() !== "") {
      setVideoInfo({
        ...videoInfo,
        questionsAnswers: [...videoInfo.questionsAnswers, { question: currentQuestion, answer: currentAnswer }]
      });
      setCurrentQuestion("");
      setCurrentAnswer("");
    }
  };

  const handleDeleteQuestionAnswer = (index) => {
    const newQuestionsAnswers = [...videoInfo.questionsAnswers];
    newQuestionsAnswers.splice(index, 1);
    setVideoInfo({
      ...videoInfo,
      questionsAnswers: newQuestionsAnswers
    });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setVideoInfo({
  //     ...videoInfo,
  //     [name]: value
  //   });
  // };

  const [source, setSource] = useState(null);
  const [video, setVideo] = useState([]);
  const [edit, setEdit] = useState(false);
  const handleUpdate = async (index) => {
    if (edit) {
      return;
    }
    setEdit(true);
    const details = video[index];
    setVideoInfo(details);
    const updatedVideoList = video.filter((_, xd) => xd !== index);
    setVideo(updatedVideoList);
  };

  const forSubmit = () => {
    if (videoInfo.link) {
      setSource(videoInfo.link);
    }
  };

  const getDoctorDetails = async () => {
    const responseJson = await doctorDetailsGet();
    if (responseJson.data.status) {
      const doctorid = responseJson.data.data._id;
      const videos = await getDoctorVideos(doctorid);
      if (videos.data.status) {
        setVideo(videos.data.data);
      }
    }
  };

  useEffect(() => {
    getDoctorDetails();
    console.log(video);
  });

  

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" component={"h5"} className="mb-2" style={{ fontWeight: 'bold' }}>
          Upload A Video
        </Typography>
        <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"18px" }}>Import URL</label>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            required
            fullWidth
            value={videoInfo.link}
            autoComplete="off"
            name="fetchvideo"
            type="string"
            placeholder="Eg. URL"
            onChange={(e) =>
              setVideoInfo({ ...videoInfo, link: e.target.value })
            }
            InputProps={{
              sx: {
                height: "2.2em",
              },
            }}
          />
          <UploadButton onClick={forSubmit}>Import</UploadButton>
        </Stack>

        <Box component={"div"} className="my-2">
          {source && (
            <Plyr
              source={{
                type: "video",
                sources: [
                  {
                    src: source,
                    provider: "youtube",
                  },
                ],
              }}
            />
          )}
          <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>Video Title</label>
          <TextField
            fullWidth
            autoComplete="off"
            InputProps={{
              sx: {
                height: "2.2em",
              },
            }}
            placeholder="Eg. How to reduce Diabetes"
            value={videoInfo.title}
            onChange={(e) =>
              setVideoInfo({ ...videoInfo, title: e.target.value })
            }
            sx={{  }}
          />

          <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>Category</label>
          <FormControl fullWidth sx={{ }}>
            <Select
              placeholder="Video Category"
              labelId="demo-simple-select-label"
              sx={{ height: "2.4em" }}
              name="category"
              value={videoInfo.category}
              onChange={(e) =>
                setVideoInfo({ ...videoInfo, category: e.target.value })
              }
            >
              <MenuItem value="" disabled>
                Select Place
              </MenuItem>
              {categories &&
                categories.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>

          <Grid item xs={12} sm={12} md={12} lg={10}>
            <label style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>Keywords</label>
            <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              required
              fullWidth
              value={currentKeyword}
              autoComplete="off"
              name="degree"
              type="string"
              onChange={(e) => setCurrentKeyword(e.target.value)}
              placeholder="Eg. Fever"
              InputProps={{
                sx: {
                  height: "2.4em",
                },
              }}
            />

              <UploadButton variant="contained" className="px-4" onClick={handleAddKeyword}>
                Add
              </UploadButton>
            </Stack>

            <div style={{ marginTop: "1em" }}>
              {videoInfo.keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
                  onDelete={() => handleDeleteKeyword(index)}
                  style={{ marginRight: "5px", marginBottom: "5px" }}
                />
              ))}
            </div>
          </Grid>

          </FormControl>
          <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop:"10px" }}>Description</label>
          <TextField
            multiline
            minRows={4}
            fullWidth
            autoComplete="off"
            placeholder="Eg. "
            value={videoInfo.description}
            onChange={(e) =>
              setVideoInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            sx={{ }}
          />
        </Box>

        <Grid item xs={12} sm={12} md={12} lg={10}>
        <Typography variant="h5" component="h5" className="mb-2" style={{ fontWeight: 'bold' }}>
          Important Questions
        </Typography>

        <label style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "10px" }}>Question</label>
        <TextField
          fullWidth
          value={currentQuestion}
          autoComplete="off"
          name="question"
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="Question"
          InputProps={{ sx: { height: "2.4em" } }}
        />

        <label style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "10px" }}>Answer</label>
        <TextField
          fullWidth
          value={currentAnswer}
          autoComplete="off"
          name="answer"
          onChange={(e) => setCurrentAnswer(e.target.value)}
          placeholder="Answer"
          InputProps={{ sx: { height: "2.4em" } }}
        />

        <Button variant="contained" className="mt-3 px-4" onClick={handleAddQuestionAnswer} style={{ marginTop: "1em" }}>
          Add Q&A
        </Button>

        <div style={{ marginTop: "2em" }}>
          {videoInfo.questionsAnswers.map((qa, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Typography style={{ marginRight: '10px' }}>
                Q: {qa.question} - A: {qa.answer}
              </Typography>
              <Button variant="contained" color="secondary" onClick={() => handleDeleteQuestionAnswer(index)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      </Grid>

        <div className="d-flex justify-content-between mt-3 " style={{paddingTop:"5px" , paddingBottom:"20px" , position:"absolute" , right:"15%" , marginBottom:"1em"}}>
          <UploadButton
            onClick={() => {
              edit ? updateVideo() : handlePost();
            }}
            style={{ fontFamily: "Montserrat" , backgroundColor:"#133680" , color:"white" , }}
          >
            {edit ? "Update" : "Upload"} Video
          </UploadButton>
        </div>
        {
          <div>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              {video !== "undefined" &&
                video.map((video, index) => (
                  <Grid item key={video._id} xs={12} sm={6} md={6} lg={6}>
                    <Card className="m-2">
                      <Box component={"div"}>
                        {video.link.length > 0 && (
                          <Plyr
                            source={{
                              type: "video",
                              sources: [
                                {
                                  src: video.link,
                                  provider: "youtube",
                                },
                              ],
                            }}
                          />
                        )}

                        <CardContent>
                          <Typography component={"p"}>{video.title}</Typography>
                        </CardContent>
                        <CardActions>
                          <IconButton onClick={() => handleUpdate(index)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => deleteVideo(video._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </CardActions>
                      </Box>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </div>
        }
      </ThemeProvider>
    </React.Fragment>
  );
};

export default VideoFetch;
