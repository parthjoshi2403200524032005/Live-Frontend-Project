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
  Chip,
  ToggleButton,
  ToggleButtonGroup
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
import axios from 'axios';

const API = 'AIzaSyBwikqQA3u5E5dbiyNvOrIA4wUF9jd4Gm4';
// const DOCTOR_ID = '650b1a0f64258026da724561'; // Demo valid doctor ID

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

  const [view, setView] = useState('single'); // 'single' or 'channel'
  const [videoInfo, setVideoInfo] = useState({
    link: "",
    title: "",
    description: "",
    category: "",
    keywords: [],
    questionsAnswers: []
  });

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
      ]);

  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [source, setSource] = useState(null);
  const [video, setVideo] = useState([]);
  const [edit, setEdit] = useState(false);

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
  }, []);

  const [channelId, setChannelId] = useState('');
  const [channelVideos, setChannelVideos] = useState([]);
  const [error, setError] = useState('');

  const fetchVideos = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`);
      const data = await response.json();
      if (response.ok) {
        setChannelVideos(data.items);
        setError('');
      } else {
        setError(data.error.message);
        setChannelVideos([]);
      }
    } catch (error) {
      setError('Failed to fetch videos');
      setChannelVideos([]);
    }
  };

  const handleChannelSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  // const handleChannelEdit = (videoId) => {
  //   console.log(`Edit video with ID: ${videoId}`);
  // };

  const handleChannelDelete = (videoId) => {
    console.log(`Delete video with ID: ${videoId}`);
    setChannelVideos(channelVideos.filter(video => video.id.videoId !== videoId));
  };

  // const addVideosToDatabase = async () => {
  //   try {
  //     for (const video of channelVideos) {
  //       const videoData = {
  //         link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
  //         title: video.snippet.title,
  //         description: video.snippet.description,
  //         category: 'Default Category',
  //       };
  //       await axios.post('http://localhost:8080/video/', videoData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //     }
  //     alert('Videos added to database successfully!');
  //   } catch (error) {
  //     console.error('Error adding videos to database:', error);
  //     alert('Failed to add videos to database.');
  //   }
  // };


 

const addVideosToDatabase = async () => {
  try {
    for (const video of channelVideos) {
      const videoData = {
        link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        title: video.snippet.title,
        description: video.snippet.description,
        category: 'Default Category',
      };
      await createDoctorVideo(videoData);
    }
    alert('Videos added to database successfully!');
  } catch (error) {
    console.error('Error adding videos to database:', error);
    alert('Failed to add videos to database.');
  }
};


  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
  <Box
    display="flex"
    justifyContent="flex-end"
    sx={{
      position: 'fixed',
      top: '50px', // Adjust as needed
      right: '20px', // Adjust as needed
      zIndex: 100,
      marginBottom: '20px',
    }}
  >
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={(e, newView) => setView(newView)}
      aria-label="view toggle"
    >
      <ToggleButton value="single" aria-label="single video">
        Single Video Upload
      </ToggleButton>
      <ToggleButton value="channel" aria-label="channel import">
        Channel Import
      </ToggleButton>
    </ToggleButtonGroup>
  </Box>
        {view === 'single' ? (
          <div>
            <Typography variant="h5" component={"h5"} className="mb-2" style={{ fontWeight: 'bold' }}>
              Upload A Video
            </Typography>
            <label htmlFor="firstname" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Import URL</label>
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
              <label htmlFor="title" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Video Title</label>
              <TextField
                required
                fullWidth
                value={videoInfo.title}
                autoComplete="off"
                name="videotitle"
                type="string"
                placeholder="Eg. Video Title"
                onChange={(e) =>
                  setVideoInfo({ ...videoInfo, title: e.target.value })
                }
                InputProps={{
                  sx: {
                    height: "2.2em",
                  },
                }}
              />
              <label htmlFor="description" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Video Description</label>
              <TextField
                required
                fullWidth
                value={videoInfo.description}
                autoComplete="off"
                name="videodescription"
                type="string"
                placeholder="Eg. Video Description"
                onChange={(e) =>
                  setVideoInfo({ ...videoInfo, description: e.target.value })
                }
                InputProps={{
                  sx: {
                    height: "2.2em",
                  },
                }}
              />
              <label htmlFor="category" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Video Category</label>
              <FormControl fullWidth>
                <Select
                  value={videoInfo.category}
                  onChange={(e) =>
                    setVideoInfo({ ...videoInfo, category: e.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories &&
                 categories.map((item) => (
                   <MenuItem value={item}>{item}</MenuItem>
                 ))}
                </Select>
              </FormControl>

              <label htmlFor="keywords" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Keywords</label>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  fullWidth
                  value={currentKeyword}
                  autoComplete="off"
                  name="keywords"
                  type="string"
                  placeholder="Eg. Keyword"
                  onChange={(e) =>
                    setCurrentKeyword(e.target.value)
                  }
                  InputProps={{
                    sx: {
                      height: "2.2em",
                    },
                  }}
                />
                <UploadButton onClick={handleAddKeyword}>Add</UploadButton>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {videoInfo.keywords.map((keyword, index) => (
                  <Chip
                    key={index}
                    label={keyword}
                    onDelete={() => handleDeleteKeyword(index)}
                  />
                ))}
              </Stack>

              <label htmlFor="questionsAnswers" style={{ paddingBottom: "5px", fontSize: "18px", paddingTop: "18px" }}>Questions & Answers</label>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  fullWidth
                  value={currentQuestion}
                  autoComplete="off"
                  name="question"
                  type="string"
                  placeholder="Eg. Question"
                  onChange={(e) =>
                    setCurrentQuestion(e.target.value)
                  }
                  InputProps={{
                    sx: {
                      height: "2.2em",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  value={currentAnswer}
                  autoComplete="off"
                  name="answer"
                  type="string"
                  placeholder="Eg. Answer"
                  onChange={(e) =>
                    setCurrentAnswer(e.target.value)
                  }
                  InputProps={{
                    sx: {
                      height: "2.2em",
                    },
                  }}
                />
                <UploadButton onClick={handleAddQuestionAnswer}>Add</UploadButton>
              </Stack>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {videoInfo.questionsAnswers.map((qa, index) => (
                  <Chip
                    key={index}
                    label={`${qa.question}: ${qa.answer}`}
                    onDelete={() => handleDeleteQuestionAnswer(index)}
                  />
                ))}
              </Stack>

              <Stack direction="row" spacing={1} className="mt-3">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={edit ? updateVideo : handlePost}
                >
                  {edit ? "Update" : "Upload"}
                </Button>
              </Stack>
            </Box>
          </div>
        ) : (
          <div>
            <Typography variant="h5" component="h5" className="mb-2" style={{ fontWeight: 'bold' }}>
              Import Channel Videos
            </Typography>
            <form onSubmit={handleChannelSubmit}>
              <TextField
                fullWidth
                label="Channel ID"
                value={channelId}
                onChange={(e) => setChannelId(e.target.value)}
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Fetch Videos
              </Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
              {channelVideos.map((video) => (
                <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
                  <Card>
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.snippet.title}
                    ></iframe>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {video.snippet.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {video.snippet.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                  
                      <IconButton onClick={() => handleChannelDelete(video.id.videoId)}>
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {channelVideos.length > 0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={addVideosToDatabase}
                style={{ marginTop: '20px' }}
              >
                Add All to Database
              </Button>
            )}
          </div>
        )}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default VideoFetch;

