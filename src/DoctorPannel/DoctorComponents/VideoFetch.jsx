// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Card,
//   Stack,
//   CardActions,
//   CardContent,
//   Grid,
//   IconButton,
//   ThemeProvider,
//   Typography,
//   createTheme,
//   TextField,
//   FormControl,
//   MenuItem,
//   Select,
//   Button,
//   Chip,
//   ToggleButton,
//   ToggleButtonGroup,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";

// import Plyr from "plyr-react";
// import { UploadButton } from "../../CustomStyles/Styles";
// import {
//   doctorDetailsGet,
//   getDoctorVideos,
//   createDoctorVideo,
//   deleteDoctorVideo,
//   updateDoctorVideo,
// } from "../../Service/Services";
// import toast from "react-hot-toast";
// import DeleteIcon from "@mui/icons-material/Delete";

// //const API = 'AIzaSyBwikqQA3u5E5dbiyNvOrIA4wUF9jd4Gm4';
// const API = "AIzaSyBGjfbfmq3yLfJ7jpkQwJoCSaN2kDfqlmQ";
// //  const doctorId = '6691445df662fec383fb71d3'; // Demo valid doctor ID

// // Function to fetch videos from YouTube API
// const fetchVideos = async (channelId, setChannelVideos, setError) => {
//   try {
//     const response = await fetch();
//     //  https:www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20
//     const data = await response.json();
//     if (response.ok) {
//       setChannelVideos(data.items);
//       setError("");
//     } else {
//       setError(data.error.message);
//       setChannelVideos([]);
//     }
//   } catch (error) {
//     setError("Failed to fetch videos");
//     setChannelVideos([]);
//   }
// };

// const addVideosToDatabase = async (
//   doctorid,
//   channelId,
//   channelVideos,
//   setChannelId,
//   setChannelVideos,
//   setError
// ) => {
//   try {
//     // Prepare video data
//     const videosData = channelVideos.map((video) => ({
//       // link: https://www.youtube.com/watch?v=${video.id.videoId},
//       title: video.snippet.title,
//       description: video.snippet.description,
//       category: "Default Category",
//     }));

//     // Make POST request to the backend
//     const response = await fetch(
//       // https:healthmudraa-backend.vercel.app/video/add-videos,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ doctorid, videos: videosData, channelId }),
//       }
//     );

//     if (response.ok) {
//       // const result = await response.json();
//       setChannelId(""); // Clear the input
//       setChannelVideos([]); // Clear the videos display
//       alert("Videos added to database successfully!");
//     } else {
//       const data = await response.json();
//       setError(data.message || "Failed to add videos");
//     }
//   } catch (error) {
//     console.error("Error adding videos to database:", error);
//     setError("Failed to add videos to database.");
//   }
// };

// const VideoFetch = () => {
//   const theme = createTheme({
//     palette: {
//       type: "light",
//       primary: {
//         main: "#133680",
//       },
//       secondary: {
//         main: "#f50057",
//       },
//       text: {
//         primary: "#000000",
//       },
//     },
//     typography: {},
//   });

//   const [view, setView] = useState("single"); // 'single' or 'channel'
//   const [videoInfo, setVideoInfo] = useState({
//     link: "",
//     title: "",
//     description: "",
//     category: "",
//     keywords: [],
//     questionsAnswers: [],
//   });

//   const [categories] = useState([
//     "General",
//     "Brain and Nerves",
//     "Bones and Muscles",
//     "Skin/hair care",
//     "Emergency care",
//     "Pregnancy and Childbirth",
//     "Eye care",
//     "Child care",
//     "Mental Health",
//     "Lungs care",
//     "Urinary System care",
//     "Cancer Care",
//     "Teeth and Oral care",
//     "Veterinary - Animals care",
//     "Diet/Nutrition",
//     "Stomach-Intestines",
//     "Liver care",
//     "Kidney care",
//     "Ear Nose Throat",
//     "Acupressure therapy",
//   ]);

//   const [currentKeyword, setCurrentKeyword] = useState("");
//   const [currentQuestion, setCurrentQuestion] = useState("");
//   const [currentAnswer, setCurrentAnswer] = useState("");
//   const [currentQuestion2, setCurrentQuestion2] = useState("");
//   const [currentAnswer2, setCurrentAnswer2] = useState("");

//   const [source, setSource] = useState(null);
//   const [video, setVideo] = useState([]);
//   const [edit, setEdit] = useState(false);

//   const handlePost = async () => {
//     if (videoInfo.title && videoInfo.link) {
//       const responseJson = await createDoctorVideo(videoInfo);
//       if (responseJson.data.status) {
//         toast.success(responseJson.data.message);
//         getDoctorDetails();
//         setVideoInfo({
//           link: "",
//           title: "",
//           description: "",
//           category: "",
//           keywords: [],
//           questionsAnswers: [],
//         });
//       } else {
//         toast.error(responseJson.data.message);
//       }
//     }
//   };

//   const deleteVideo = async (id) => {
//     const responseJson = await deleteDoctorVideo(id);
//     if (responseJson.data.status) {
//       toast.success(responseJson.data.message);
//       getDoctorDetails();
//     } else {
//       toast.error(responseJson.data.message);
//     }
//   };

//   const updateVideo = async () => {
//     const responseJson = await updateDoctorVideo(videoInfo._id, videoInfo);
//     if (responseJson.data.status) {
//       toast.success(responseJson.data.message);
//       setEdit(false);
//       setVideoInfo({
//         link: "",
//         title: "",
//         description: "",
//         category: "",
//         keywords: [],
//         questionsAnswers: [],
//       });
//       getDoctorDetails();
//     } else {
//       toast.error(responseJson.data.message);
//     }
//   };

//   const handleAddKeyword = () => {
//     if (currentKeyword.trim() !== "") {
//       setVideoInfo({
//         ...videoInfo,
//         keywords: [...videoInfo.keywords, currentKeyword],
//       });
//       setCurrentKeyword("");
//     }
//   };

//   const handleDeleteKeyword = (index) => {
//     const newKeywords = [...videoInfo.keywords];
//     newKeywords.splice(index, 1);
//     setVideoInfo({
//       ...videoInfo,
//       keywords: newKeywords,
//     });
//   };

 
 

//   const handleAddQuestionAnswer = () => {
//     // Check and add first question-answer pair
//     if (currentQuestion.trim() !== "" && currentAnswer.trim() !== "") {
//       setVideoInfo((prevVideoInfo) => ({
//         ...prevVideoInfo,
//         questionsAnswers: [
//           ...prevVideoInfo.questionsAnswers,
//           { question: currentQuestion, answer: currentAnswer },
//         ],
//       }));
//       setCurrentQuestion("");
//       setCurrentAnswer("");
//     }

//     // Check and add second question-answer pair
//     if (currentQuestion2.trim() !== "" && currentAnswer2.trim() !== "") {
//       setVideoInfo((prevVideoInfo) => ({
//         ...prevVideoInfo,
//         questionsAnswers: [
//           ...prevVideoInfo.questionsAnswers,
//           { question: currentQuestion2, answer: currentAnswer2 },
//         ],
//       }));
//       setCurrentQuestion2("");
//       setCurrentAnswer2("");
//     }
//   };

//   const handleDeleteQuestionAnswer = (index) => {
//     setVideoInfo((prevVideoInfo) => ({
//       ...prevVideoInfo,
//       questionsAnswers: prevVideoInfo.questionsAnswers.filter(
//         (_, i) => i !== index
//       ),
//     }));
//   };

//   const handleUpdate = async (index) => {
//     if (edit) {
//       console.log("CHECK:NO MORE EDITS>>...");
//       return;
//     }
//     setEdit(true);
//     const details = video[index];
//     setVideoInfo(details);
//     const updatedVideoList = video.filter((_, xd) => xd !== index);
//     setVideo(updatedVideoList);
//   };

//   const forSubmit = () => {
//     if (videoInfo.link) {
//       setSource(videoInfo.link);
//     }
//   };

//   const [doctorid, setDoctorid] = useState("");
//   const [lastAdded, setLastAdded] = useState(null);
//   const [initialChannelId, setinitialChannelId] = useState("");
//   const [channelId, setChannelId] = useState("");
//   const [channelVideos, setChannelVideos] = useState([]);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const getDoctorDetails = async () => {
//     const responseJson = await doctorDetailsGet();
//     if (!responseJson.data.data.verified) navigate("/doctor/alert");

//     if (responseJson.data.status) {
//       console.log("details in videofetch about doctor", responseJson.data);
//       const doctorid = responseJson.data.data._id;
//       setDoctorid(doctorid);
//       const channelid = responseJson.data.data.channelId;
//       setinitialChannelId(channelid);
//       const lastAdded = responseJson.data.data.lastUpdatedDate;
//       setLastAdded(lastAdded);
//       const videos = await getDoctorVideos(doctorid);
//       if (videos.data.status) {
//         setVideo(videos.data.data);
//       }
//     }
//   };

//   useEffect(() => {
//     getDoctorDetails();
//   }, []);

//   const handleChannelSubmit = (e) => {
//     e.preventDefault();
//     fetchVideos(channelId, setChannelVideos, setError);
//   };

//   const handleChannelDelete = (videoId) => {
//     // console.log(Delete video with ID: ${videoId});
//     setChannelVideos(
//       channelVideos.filter((video) => video.id.videoId !== videoId)
//     );
//   };

//   return (
//     <React.Fragment>
//       <style>
//         {`
//         .accordion-button:not(.collapsed) {
//           color: blue;
//           background-color: white;
//           box-shadow: 1px solid green;
//         }
//         .accordion {
//           --bs-accordion-btn-focus-box-shadow: none;
//         }
//         .faq-title {
//           text-align: center;
//           margin-bottom: 2rem;
//         }
//         .faq-container {
//           width: 80%;
//           border-radius: 10px;
//         }
//           .my-7{
//           display: flex;
// flex-direction: column;
// align-items: flex-start;
// flex: 1 0 0;}
//           .my-8{
//           color: var(--On-surface, #262626);

// font-size: 20px;
// font-style: normal;
// font-weight: 700;
// line-height: 24px; /* 120% */
// letter-spacing: 1px;}
//           .my-9{
//           margin-top: 20px;
//           margin-bottom: 20px;
//           margin-left: 0px;
//           margin-right: 0px;
//           }
//           .my-10{
//           margin-top: 0px;
//           margin-bottom: 0px;
//           margin-left: 0px;
//           margin-right: 0px;
//           Width: 100%;
//           }

//            .Recommended{
//             background: #37FBFB;
//             border-radius: 20px;
//       width: 170px;
// height: 30px;

//             font-family: DM Sans;
// font-size: 16px;
// font-weight: 700;
// padding-top: 2px;

// margin-left: 884px;
// gap: 0px;
// justify-content: center;
// align-items: center;
// text-align: center; 
// opacity: 0px;

//            }
// .Link-box{
// display: flex;
// width: 397px;
// align-items: center;
// gap: 6px;
// }
// .box-text{
// color: var(--On-surface, #262626);
// font-family: "arial"; 
// font-size: 20px;
// font-style: normal;
// font-weight: 700;
// line-height: 24px; /* 120% */
// letter-spacing: 1px;
// margin-top: 50px;

// margin-bottom: 30px;
// }

// .input-width{
//  width: 397px;
// height: 36px;
// padding: 5px;
// gap: 0px;
// opacity: 0px;
// border: 1px solid #E0E0E0;
// border-radius: 5px;
// align-items: center;
// justify-content: center;

// }
// .btn-width{
// width: 129px;
// height:  44px;

// padding: 16px 24px 16px 24px;
// gap: 10px;
// border-radius: 10px ;

// opacity: 0px;
// border: 1px solid #133682
// }
// .btn-width2{
// width: 159px;
// height:  44px;

// padding: 16px 24px 16px 24px;
// gap: 10px;
// border-radius: 10px ;

// opacity: 0px;
// border: 1px solid #133682
// }
// .Questions{
// width:181px;
// height: 44px;
// padding: 16px 4px 16px 4px;
// gap: 10px;
// border-radius: 10px;
// border: 1px solid #133682;
// opacity: 0px;
// margin-left: 1160px;
// }
//       `}{" "}
//       </style>
//       {/* <div>
//         {doctorid && <h2>{doctorid}</h2>}
//          {initialChannelId && <h2>{initialChannelId}</h2>}
//         {lastAdded && <h2>{lastAdded}</h2>}
//       </div>  */}
//       <ThemeProvider theme={theme}>
//         <div style={{ padding: "20px" }}>
//           <div>
//             {/* Display message if channelId is already linked */}
//             {initialChannelId ? (
//               <>
//                 {/* 77320jay@gmail.com */}
//                 {/* Test@123 */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     className="my-4"
//                     variant="h3"
//                     component="h3"
//                     style={{
//                       color: "",
//                       fontWeight: "bold",
//                       fontSize: "30px",
//                     }}
//                   >
//                     Your YouTube Channel is{" "}
//                     <span style={{ color: "#1FC557" }}>Connected</span>
//                   </Typography>
//                 </div>
//                 <div
//                   className="my-4"
//                   style={{
//                     width: "100%",
//                     color: "#000000",
//                     textAlign: "center",
//                   }}
//                 >
//                   Your Channel{" "}
//                   <span style={{ color: "#57C911" }}>
//                     {" "}
//                     <u>Health Mudraa</u>{" "}
//                   </span>{" "}
//                   is connected with Health Mudraa!
//                 </div>

//                 <div className="faq-container my-10">
//                   <div className="accordion " id="accordionFlushExample">
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button
//                           className="accordion-button collapsed fw-bold my-2"
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#flush-collapseOne"
//                           aria-expanded="false"
//                           aria-controls="flush-collapseOne"
//                           style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
//                         >
//                           Info&Tips
//                         </button>
//                       </h2>
//                       <div
//                         id="flush-collapseOne"
//                         className="accordion-collapse collapse"
//                         data-bs-parent="#accordionFlushExample"
//                       >
//                         <div
//                           className="accordion-body my-2 my-7"
//                           style={{ letterSpacing: "0.7px" }}
//                         >
//                           <h5 className="my-8">From Now,</h5>
//                           <li>Health Mudraa will manage the account here...</li>
//                           <li>
//                             From Now, our AI bot will will import the videos
//                             uploaded on this YouTube channel to Health Mudraa
//                             Automatically.
//                           </li>
//                           <li>
//                             We can get Video Title, Description, keywords from
//                             whatever you enter in YouTube and fetch here...{" "}
//                           </li>
//                           <li>
//                             You can Edit, add details, Delete the Health Mudraa
//                             videos now
//                           </li>
//                           <h5 className="my-8 my-9">Tips:-</h5>
//                           <li>
//                             We suggest you to edit each video Title,
//                             description, keywords, category in Health Mudraa for
//                             better SEO ranking Google will read this Health
//                             Mudraa video as new video in Internet. it will will
//                             be double benefit for You!
//                           </li>
//                           <li>
//                             Most Important tip is Add Q&A (Type video topic on
//                             Google {">"} Go to section “People also ask” {">"}{" "}
//                             Take relevant Questions and Answer it from Your
//                             words for better reach in Google)
//                           </li>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div style={{ justifyContent: "center" }}>
//                 <Typography className="Recommended">Recommended</Typography>
//                 <Typography
//                   variant="h5"
//                   component="h5"
//                   className="position-relative "
//                   style={{
//                     fontWeight: "bold",
//                     textAlign: "center",
//                     marginTop: "20px",
//                   }}
//                 >
//                   Connect Your Youtube Channel
//                   {/* <span class="badge text-bg-success mx-2 mb-2" style={{position:'absolute',top:'-10px'}}>Recommended</span> */}
//                 </Typography>
//                 <Typography
//                   variant="h5"
//                   component="h5"
//                   className="position-relative  Link-box"
//                 >
//                   <p className="box-text">Add Link Channel Link in box</p>
//                 </Typography>

//                 <form
//                   onSubmit={handleChannelSubmit}
//                   style={{
//                     display: "flex",
//                     gap: "20px",

//                     alignItems: "center",
                    
//                   }}
//                 >
//                   <Typography className="">
//                     https://www.youtube.com/channel/
//                   </Typography>
//                   <input
//                     type="text"
//                     className="input-width"
//                     value={channelId}
//                     onChange={(e) => setChannelId(e.target.value)}
//                     required
//                   />
//                   <Button type="submit" color="primary" className=" btn-width">
//                     connect
//                   </Button>
//                 </form>
//                 <div className="my-4">
//                   <div className="st1">
//                     <p
//                       style={{
//                         fontSize: "20px",
//                         fontWeight: "600",
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       How to :
//                     </p>
//                     <ul>
//                       <li>Go to your Youtube Account </li>
//                       <li>click “ View Your Channel “ </li>
//                       <li>
//                         Now go to top link and copy only half of link and paste
//                         here. Eg - UComtHWcgd1L6tg6jxxxxxxxx
//                       </li>
//                       <li>
//                         check the videos you want to add in Health Mudraa, you
//                         can delete some if its unnecessary, then click “Add to
//                         Health Mudraa “{" "}
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="st2">
//                     <p
//                       style={{
//                         fontSize: "20px",
//                         fontWeight: "600",
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       Why its Recommended :
//                     </p>
//                     <ul>
//                       <li>
//                         Connect Your Youtube Channel Once,HealthMudraa Will
//                         Manage it !!!{" "}
//                       </li>
//                       <li>
//                         We can Reduce Your Work,Our Software will automatically
//                         import already uploaded videos and future videos too !!{" "}
//                       </li>
//                       <li>
//                         You can Upload Videos as usual in youtube and we will
//                         make it for you in healthmudraa,We can get Video
//                         title,description,keywords from whatever you entered in
//                         youtube
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="st3">
//                     <p
//                       style={{
//                         fontSize: "20px",
//                         fontWeight: "600",
//                         letterSpacing: "1px",
//                       }}
//                     >
//                       Tips :
//                     </p>
//                     <ul>
//                       <li>
//                         Most Important tip is Add Q&A (Type video topic on
//                         Google , Go to section “People also ask” , Take relevant
//                         Questions and Answer it from Your words for better reach
//                         in Google)
//                       </li>
//                       <li>
//                         We can Reduce Your Work,Our Software will automatically
//                         import already uploaded videos and future videos too !!{" "}
//                       </li>
//                       <li>
//                         Same Video with Title - We suggest you to edit each
//                         video Title, description, keywords, category in Health
//                         Mudraa for better SEO ranking at Google. Google will
//                         read this Health Mudraa video as new video in Internet
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 {error && <Typography color="error">{error}</Typography>}
//                 <Grid container spacing={2} style={{ marginTop: "20px" }}>
//                   {channelVideos.map((video) => (
//                     <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
//                       <Card>
//                         <iframe
//                           width="100%"
//                           height="200"
//                           //</Card>src={//https://www.youtube.com/embed/${video.id.videoId} }
//                           frameBorder="0"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                           title={video.snippet.title}
//                         ></iframe>
//                         <CardContent>
//                           <Typography gutterBottom variant="h6" component="h2">
//                             {video.snippet.title}
//                           </Typography>
//                           <Typography
//                             variant="body2"
//                             color="textSecondary"
//                             component="p"
//                           >
//                             {video.snippet.description}
//                           </Typography>
//                         </CardContent>
//                         <CardActions>
//                           <IconButton
//                             onClick={() =>
//                               handleChannelDelete(video.id.videoId)
//                             }
//                           >
//                             <DeleteIcon />
//                           </IconButton>
//                         </CardActions>
//                       </Card>
//                     </Grid>
//                   ))}
//                 </Grid>
//                 {channelVideos.length > 0 && doctorid && (
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() =>
//                       addVideosToDatabase(
//                         doctorid,
//                         channelId,
//                         channelVideos,
//                         setChannelId,
//                         setChannelVideos,
//                         setError
//                       )
//                     }
//                     style={{ marginTop: "20px" }}
//                   >
//                     Add Videos to database and link my channel id
//                   </Button>
//                 )}
//               </div>
//             )}
//           </div>

//           <ThemeProvider theme={theme}>
//             <Typography
//               variant="h5"
//               component={"h5"}
//               className="mb-2"
//               style={{
//                 fontWeight: "bold",
//                 textAlign: "center",
//                 marginTop: "30px",
//               }}
//             >
//               Upload A Single Video
//             </Typography>
//             <label
//               htmlFor="firstname"
//               style={{
//                 paddingBottom: "5px",
//                 fontSize: "18px",
//                 paddingTop: "18px",
//               }}
//             >
//               Paste Video URL
//             </label>
//             <Stack direction="row" spacing={1} alignItems="center">
//               <TextField
//                 required
//                 fullWidth
//                 value={videoInfo.link}
//                 autoComplete="off"
//                 name="fetchvideo"
//                 type="string"
//                 placeholder="Eg. URL"
//                 onChange={(e) =>
//                   setVideoInfo({ ...videoInfo, link: e.target.value })
//                 }
//                 InputProps={{
//                   sx: {
//                     height: "2.2em",
//                   },
//                 }}
//               />
//               <UploadButton onClick={forSubmit}>Import</UploadButton>
//             </Stack>

//             <Box component={"div"} className="my-2">
//               {source && (
//                 <Plyr
//                   source={{
//                     type: "video",
//                     sources: [
//                       {
//                         src: source,
//                         provider: "youtube",
//                       },
//                     ],
//                   }}
//                 />
//               )}
//               <label
//                 htmlFor="firstname"
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Video Title
//               </label>
//               <TextField
//                 fullWidth
//                 autoComplete="off"
//                 InputProps={{
//                   sx: {
//                     height: "2.2em",
//                   },
//                 }}
//                 placeholder="Eg. How to reduce Diabetes"
//                 value={videoInfo.title}
//                 onChange={(e) =>
//                   setVideoInfo({ ...videoInfo, title: e.target.value })
//                 }
//                 sx={{}}
//               />

//               <label
//                 htmlFor="firstname"
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Category
//               </label>
//               <FormControl fullWidth sx={{}}>
//                 <Select
//                   placeholder="Video Category"
//                   labelId="demo-simple-select-label"
//                   sx={{ height: "2.4em" }}
//                   name="category"
//                   value={videoInfo.category}
//                   onChange={(e) =>
//                     setVideoInfo({ ...videoInfo, category: e.target.value })
//                   }
//                 >
//                   <MenuItem value="" disabled>
//                     Select Place
//                   </MenuItem>
//                   {categories &&
//                     categories.map((item) => (
//                       <MenuItem value={item}>{item}</MenuItem>
//                     ))}
//                 </Select>

//                 <Grid item xs={12} sm={12} md={12} lg={10}>
//                   <label
//                     style={{
//                       paddingBottom: "5px",
//                       fontSize: "18px",
//                       paddingTop: "10px",
//                     }}
//                   >
//                     Keywords
//                   </label>
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <TextField
//                       required
//                       fullWidth
//                       value={currentKeyword}
//                       autoComplete="off"
//                       name="degree"
//                       type="string"
//                       onChange={(e) => setCurrentKeyword(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                           handleAddKeyword();
//                         }
//                       }}
//                       placeholder="Eg. Fever"
//                       InputProps={{
//                         sx: {
//                           height: "2.4em",
//                         },
//                       }}
//                     />
//                   </Stack>

//                   <div style={{ marginTop: "1em" }}>
//                     {videoInfo.keywords.map((keyword, index) => (
//                       <Chip
//                         key={index}
//                         label={keyword}
//                         onDelete={() => handleDeleteKeyword(index)}
//                         style={{ marginRight: "5px", marginBottom: "5px" }}
//                       />
//                     ))}
//                   </div>
//                 </Grid>
//               </FormControl>
//               <label
//                 htmlFor="firstname"
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Description
//               </label>
//               <TextField
//                 multiline
//                 minRows={4}
//                 fullWidth
//                 autoComplete="off"
//                 placeholder="Eg. "
//                 value={videoInfo.description}
//                 onChange={(e) =>
//                   setVideoInfo((prev) => ({
//                     ...prev,
//                     description: e.target.value,
//                   }))
//                 }
//                 sx={{}}
//               />
//             </Box>

//             <Grid item xs={12} sm={12} md={12} lg={10}>
//               <Typography
//                 variant="h5"
//                 component="h5"
//                 className="mb-2"
//                 style={{ fontWeight: "bold", textAlign: "center" }}
//               >
//                 Important Questions
//               </Typography>

//               <label
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Question1
//               </label>
//               <TextField
//                 fullWidth
//                 value={currentQuestion}
//                 autoComplete="off"
//                 name="question"
//                 onChange={(e) => setCurrentQuestion(e.target.value)}
//                 InputProps={{ sx: { height: "2.4em" } }}
//               />

//               <label
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Answer
//               </label>
//               <TextField
//                 fullWidth
//                 value={currentAnswer}
//                 autoComplete="off"
//                 name="answer"
//                 onChange={(e) => setCurrentAnswer(e.target.value)}
//                 placeholder="E.g"
//                 InputProps={{ sx: { height: "2.4em" } }}
//               />
//               <label
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Question2
//               </label>
//               <TextField
//                 fullWidth
//                 value={currentQuestion2}
//                 autoComplete="off"
//                 name="question2"
//                 onChange={(e) => setCurrentQuestion2(e.target.value)}
//                 InputProps={{ sx: { height: "2.4em" } }}
//               />

//               <label
//                 style={{
//                   paddingBottom: "5px",
//                   fontSize: "18px",
//                   paddingTop: "10px",
//                 }}
//               >
//                 Answer
//               </label>
//               <TextField
//                 fullWidth
//                 value={currentAnswer2}
//                 autoComplete="off"
//                 name="answe2"
//                 onChange={(e) => setCurrentAnswer2(e.target.value)}
//                 placeholder="E.g"
//                 InputProps={{ sx: { height: "2.4em" } }}
//               />

//               <Button
              
//                 className="Questions"
//                 onClick={handleAddQuestionAnswer}
//                 style={{ marginTop: "1em" }}
//               >
//                 + More Questions
//               </Button>

//               <div style={{ marginTop: "2em" }}>
//                 {videoInfo.questionsAnswers.map((qa, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     <Typography style={{ marginRight: "10px" }}>
//                       Q: {qa.question} - A: {qa.answer}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       color="secondary"
//                       onClick={() => handleDeleteQuestionAnswer(index)}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             </Grid>

//             <div
//               className="d-flex justify-content-between mt-3 "
//               style={{
//                 paddingTop: "5px",
//                 paddingBottom: "20px",
//                 position: "absolute",
//                 right: "5%",
//                 marginBottom: "1em",
//                 gap: "10px",
                
//               }}
//             >
//                {/* <Button
//                className="btn-width2"
//                 onClick={() => {
//                   setVideoInfo({
//                     ...videoInfo,
//                     isDraft: true,
//                   });
//                   edit ? updateVideo() : handlePost();
//                 }}
//               >
//                 Save Draft
//               </Button> */}
//               <UploadButton
//                 onClick={() => {
//                   edit ? updateVideo() : handlePost();
//                 }}
//                 style={{
//                   backgroundColor: "#133680",
//                   color: "white",
//                 }}
//               >
//                 {edit ? "Update" : "Upload"} 
//               </UploadButton>
             
//             </div>
//           </ThemeProvider>
//           {
//             <div style={{ marginTop: "6em" }}>
//               <Grid
//                 container
//                 spacing={2}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   mt: 4,
//                 }}
//               >
//                 {video !== "undefined" &&
//                   video.map((video, index) => (
//                     <Grid item key={video._id} xs={12} sm={6} md={6} lg={6}>
//                       <Card className="m-2">
//                         <Box component={"div"}>
//                           {video.link.length > 0 && (
//                             <Plyr
//                               source={{
//                                 type: "video",
//                                 sources: [
//                                   {
//                                     src: video.link,
//                                     provider: "youtube",
//                                   },
//                                 ],
//                               }}
//                             />
//                           )}

//                           <CardContent>
//                             <Typography component={"p"}>
//                               {video.title}
//                             </Typography>
//                           </CardContent>
//                           <CardActions>
//                             <IconButton onClick={() => handleUpdate(index)}>
//                               <EditIcon />
//                             </IconButton>
//                             <IconButton onClick={() => deleteVideo(video._id)}>
//                               <DeleteIcon />
//                             </IconButton>
//                           </CardActions>
//                         </Box>
//                       </Card>
//                     </Grid>
//                   ))}
//               </Grid>
//             </div>
//           }
//         </div>
//       </ThemeProvider> 
//     </React.Fragment>
//   );
// };

// export default VideoFetch;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  ToggleButtonGroup,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

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

//const API = 'AIzaSyBwikqQA3u5E5dbiyNvOrIA4wUF9jd4Gm4';
const API = "AIzaSyC76DOJuowmHnQQSD6FxHtrpw5skaHgfFM";
//  const doctorId = '6691445df662fec383fb71d3'; // Demo valid doctor ID

// Function to fetch videos from YouTube API
const fetchVideos = async (channelId, setChannelVideos, setError) => {
  try {
    const response = await fetch();
    //  https:www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20
    const data = await response.json();
    if (response.ok) {
      setChannelVideos(data.items);
      setError("");
    } else {
      setError(data.error.message);
      setChannelVideos([]);
    }
  } catch (error) {
    setError("Failed to fetch videos");
    setChannelVideos([]);
  }
};

const addVideosToDatabase = async (
  doctorid,
  channelId,
  channelVideos,
  setChannelId,
  setChannelVideos,
  setError
) => {
  try {
    // Prepare video data
    const videosData = channelVideos.map((video) => ({
      // link: https://www.youtube.com/watch?v=${video.id.videoId},
      title: video.snippet.title,
      description: video.snippet.description,
      category: "Default Category",
    }));

    // Make POST request to the backend
    const response = await fetch(
      // https:healthmudraa-backend.vercel.app/video/add-videos,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctorid, videos: videosData, channelId }),
      }
    );

    if (response.ok) {
      // const result = await response.json();
      setChannelId(""); // Clear the input
      setChannelVideos([]); // Clear the videos display
      alert("Videos added to database successfully!");
    } else {
      const data = await response.json();
      setError(data.message || "Failed to add videos");
    }
  } catch (error) {
    console.error("Error adding videos to database:", error);
    setError("Failed to add videos to database.");
  }
};

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
    typography: {},
  });

  const [view, setView] = useState("single"); // 'single' or 'channel'
  const [videoInfo, setVideoInfo] = useState({
    link: "",
    title: "",
    description: "",
    category: "",
    keywords: [],
    questionsAnswers: [],
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
  const [currentQuestion2, setCurrentQuestion2] = useState("");
  const [currentAnswer2, setCurrentAnswer2] = useState("");

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
          questionsAnswers: [],
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
      setEdit(false);
      setVideoInfo({
        link: "",
        title: "",
        description: "",
        category: "",
        keywords: [],
        questionsAnswers: [],
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
        keywords: [...videoInfo.keywords, currentKeyword],
      });
      setCurrentKeyword("");
    }
  };

  const handleDeleteKeyword = (index) => {
    const newKeywords = [...videoInfo.keywords];
    newKeywords.splice(index, 1);
    setVideoInfo({
      ...videoInfo,
      keywords: newKeywords,
    });
  };

 
 

  const handleAddQuestionAnswer = () => {
    // Check and add first question-answer pair
    if (currentQuestion.trim() !== "" && currentAnswer.trim() !== "") {
      setVideoInfo((prevVideoInfo) => ({
        ...prevVideoInfo,
        questionsAnswers: [
          ...prevVideoInfo.questionsAnswers,
          { question: currentQuestion, answer: currentAnswer },
        ],
      }));
      setCurrentQuestion("");
      setCurrentAnswer("");
    }

    // Check and add second question-answer pair
    if (currentQuestion2.trim() !== "" && currentAnswer2.trim() !== "") {
      setVideoInfo((prevVideoInfo) => ({
        ...prevVideoInfo,
        questionsAnswers: [
          ...prevVideoInfo.questionsAnswers,
          { question: currentQuestion2, answer: currentAnswer2 },
        ],
      }));
      setCurrentQuestion2("");
      setCurrentAnswer2("");
    }
  };

  const handleDeleteQuestionAnswer = (index) => {
    setVideoInfo((prevVideoInfo) => ({
      ...prevVideoInfo,
      questionsAnswers: prevVideoInfo.questionsAnswers.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleUpdate = async (index) => {
    if (edit) {
      console.log("CHECK:NO MORE EDITS>>...");
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

  const [doctorid, setDoctorid] = useState("");
  const [lastAdded, setLastAdded] = useState(null);
  const [initialChannelId, setinitialChannelId] = useState("");
  const [channelId, setChannelId] = useState("");
  const [channelVideos, setChannelVideos] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getDoctorDetails = async () => {
    const responseJson = await doctorDetailsGet();
    if (!responseJson.data.data.verified) navigate("/doctor/alert");

    if (responseJson.data.status) {
      console.log("details in videofetch about doctor", responseJson.data);
      const doctorid = responseJson.data.data._id;
      setDoctorid(doctorid);
      const channelid = responseJson.data.data.channelId;
      setinitialChannelId(channelid);
      const lastAdded = responseJson.data.data.lastUpdatedDate;
      setLastAdded(lastAdded);
      const videos = await getDoctorVideos(doctorid);
      if (videos.data.status) {
        setVideo(videos.data.data);
      }
    }
  };

  useEffect(() => {
    getDoctorDetails();
  }, []);

  const handleChannelSubmit = (e) => {
    e.preventDefault();
    fetchVideos(channelId, setChannelVideos, setError);
  };

  const handleChannelDelete = (videoId) => {
    // console.log(Delete video with ID: ${videoId});
    setChannelVideos(
      channelVideos.filter((video) => video.id.videoId !== videoId)
    );
  };

  return (
    <React.Fragment>
      <style>
        {`
        .accordion-button:not(.collapsed) {
          color: blue;
          background-color: white;
          box-shadow: 1px solid green;
        }
        .accordion {
          --bs-accordion-btn-focus-box-shadow: none;
        }
        .faq-title {
          text-align: center;
          margin-bottom: 2rem;
        }
        .faq-container {
          width: 80%;
          border-radius: 10px;
        }
          .my-7{
          display: flex;
flex-direction: column;
align-items: flex-start;
flex: 1 0 0;}
          .my-8{
          color: var(--On-surface, #262626);

font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 120% */
letter-spacing: 1px;}
          .my-9{
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 0px;
          margin-right: 0px;
          }
          .my-10{
          margin-top: 0px;
          margin-bottom: 0px;
          margin-left: 0px;
          margin-right: 0px;
          Width: 100%;
          }

           .Recommended{
            background: #37FBFB;
            border-radius: 20px;
      width: 170px;
height: 30px;

            font-family: DM Sans;
font-size: 16px;
font-weight: 700;
padding-top: 2px;

margin-left: 884px;
gap: 0px;
justify-content: center;
align-items: center;
text-align: center; 
opacity: 0px;

           }
.Link-box{
display: flex;
width: 397px;
align-items: center;
gap: 6px;
}
.box-text{
color: var(--On-surface, #262626);
font-family: "arial"; 
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 120% */
letter-spacing: 1px;
margin-top: 50px;

margin-bottom: 30px;
}

.input-width{
 width: 397px;
height: 36px;
padding: 5px;
gap: 0px;
opacity: 0px;
border: 1px solid #E0E0E0;
border-radius: 5px;
align-items: center;
justify-content: center;

}
.btn-width{
width: 129px;
height:  44px;

padding: 16px 24px 16px 24px;
gap: 10px;
border-radius: 10px ;

opacity: 0px;
border: 1px solid #133682
}
.btn-width2{
width: 159px;
height:  44px;

padding: 16px 24px 16px 24px;
gap: 10px;
border-radius: 10px ;

opacity: 0px;
border: 1px solid #133682
}
.Questions{
width:181px;
height: 44px;
padding: 16px 4px 16px 4px;
gap: 10px;
border-radius: 10px;
border: 1px solid #133682;
opacity: 0px;
margin-left: 1160px;
}
      `}{" "}
      </style>
      {/* <div>
        {doctorid && <h2>{doctorid}</h2>}
         {initialChannelId && <h2>{initialChannelId}</h2>}
        {lastAdded && <h2>{lastAdded}</h2>}
      </div>  */}
      <ThemeProvider theme={theme}>
        <div style={{ padding: "20px" }}>
          <div>
            {/* Display message if channelId is already linked */}
            {initialChannelId ? (
              <>
                {/* 77320jay@gmail.com */}
                {/* Test@123 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="my-4"
                    variant="h3"
                    component="h3"
                    style={{
                      color: "",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Your YouTube Channel is{" "}
                    <span style={{ color: "#1FC557" }}>Connected</span>
                  </Typography>
                </div>
                <div
                  className="my-4"
                  style={{
                    width: "100%",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Your Channel{" "}
                  <span style={{ color: "#57C911" }}>
                    {" "}
                    <u>Health Mudraa</u>{" "}
                  </span>{" "}
                  is connected with Health Mudraa!
                </div>

                <div className="faq-container my-10">
                  <div className="accordion " id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed fw-bold my-2"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                        >
                          Info&Tips
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body my-2 my-7"
                          style={{ letterSpacing: "0.7px" }}
                        >
                          <h5 className="my-8">From Now,</h5>
                          <li>Health Mudraa will manage the account here...</li>
                          <li>
                            From Now, our AI bot will will import the videos
                            uploaded on this YouTube channel to Health Mudraa
                            Automatically.
                          </li>
                          <li>
                            We can get Video Title, Description, keywords from
                            whatever you enter in YouTube and fetch here...{" "}
                          </li>
                          <li>
                            You can Edit, add details, Delete the Health Mudraa
                            videos now
                          </li>
                          <h5 className="my-8 my-9">Tips:-</h5>
                          <li>
                            We suggest you to edit each video Title,
                            description, keywords, category in Health Mudraa for
                            better SEO ranking Google will read this Health
                            Mudraa video as new video in Internet. it will will
                            be double benefit for You!
                          </li>
                          <li>
                            Most Important tip is Add Q&A (Type video topic on
                            Google {">"} Go to section “People also ask” {">"}{" "}
                            Take relevant Questions and Answer it from Your
                            words for better reach in Google)
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ justifyContent: "center" }}>
                <Typography className="Recommended">Recommended</Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  className="position-relative "
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Connect Your Youtube Channel
                  {/* <span class="badge text-bg-success mx-2 mb-2" style={{position:'absolute',top:'-10px'}}>Recommended</span> */}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  className="position-relative  Link-box"
                >
                  <p className="box-text">Add Link Channel Link in box</p>
                </Typography>

                <form
                  onSubmit={handleChannelSubmit}
                  style={{
                    display: "flex",
                    gap: "20px",

                    alignItems: "center",
                    
                  }}
                >
                  <Typography className="">
                    https://www.youtube.com/channel/
                  </Typography>
                  <input
                    type="text"
                    className="input-width"
                    value={channelId}
                    onChange={(e) => setChannelId(e.target.value)}
                    required
                  />
                  <Button type="submit" color="primary" className=" btn-width">
                    connect
                  </Button>
                </form>
                <div className="my-4">
                  <div className="st1">
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        letterSpacing: "1px",
                      }}
                    >
                      How to :
                    </p>
                    <ul>
                      <li>Go to your Youtube Account </li>
                      <li>click “ View Your Channel “ </li>
                      <li>
                        Now go to top link and copy only half of link and paste
                        here. Eg - UComtHWcgd1L6tg6jxxxxxxxx
                      </li>
                      <li>
                        check the videos you want to add in Health Mudraa, you
                        can delete some if its unnecessary, then click “Add to
                        Health Mudraa “{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="st2">
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        letterSpacing: "1px",
                      }}
                    >
                      Why its Recommended :
                    </p>
                    <ul>
                      <li>
                        Connect Your Youtube Channel Once,HealthMudraa Will
                        Manage it !!!{" "}
                      </li>
                      <li>
                        We can Reduce Your Work,Our Software will automatically
                        import already uploaded videos and future videos too !!{" "}
                      </li>
                      <li>
                        You can Upload Videos as usual in youtube and we will
                        make it for you in healthmudraa,We can get Video
                        title,description,keywords from whatever you entered in
                        youtube
                      </li>
                    </ul>
                  </div>

                  <div className="st3">
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        letterSpacing: "1px",
                      }}
                    >
                      Tips :
                    </p>
                    <ul>
                      <li>
                        Most Important tip is Add Q&A (Type video topic on
                        Google , Go to section “People also ask” , Take relevant
                        Questions and Answer it from Your words for better reach
                        in Google)
                      </li>
                      <li>
                        We can Reduce Your Work,Our Software will automatically
                        import already uploaded videos and future videos too !!{" "}
                      </li>
                      <li>
                        Same Video with Title - We suggest you to edit each
                        video Title, description, keywords, category in Health
                        Mudraa for better SEO ranking at Google. Google will
                        read this Health Mudraa video as new video in Internet
                      </li>
                    </ul>
                  </div>
                </div>
                {error && <Typography color="error">{error}</Typography>}
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                  {channelVideos.map((video) => (
                    <Grid item key={video.id.videoId} xs={12} sm={6} md={4}>
                      <Card>
                        <iframe
                          width="100%"
                          height="200"
                          //</Card>src={//https://www.youtube.com/embed/${video.id.videoId} }
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.snippet.title}
                        ></iframe>
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="h2">
                            {video.snippet.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {video.snippet.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <IconButton
                            onClick={() =>
                              handleChannelDelete(video.id.videoId)
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                {channelVideos.length > 0 && doctorid && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      addVideosToDatabase(
                        doctorid,
                        channelId,
                        channelVideos,
                        setChannelId,
                        setChannelVideos,
                        setError
                      )
                    }
                    style={{ marginTop: "20px" }}
                  >
                    Add Videos to database and link my channel id
                  </Button>
                )}
              </div>
            )}
          </div>

          <ThemeProvider theme={theme}>
            <Typography
              variant="h5"
              component={"h5"}
              className="mb-2"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              Upload A Single Video
            </Typography>
            <label
              htmlFor="firstname"
              style={{
                paddingBottom: "5px",
                fontSize: "18px",
                paddingTop: "18px",
              }}
            >
              Paste Video URL
            </label>
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
              <label
                htmlFor="firstname"
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Video Title
              </label>
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
                sx={{}}
              />

              <label
                htmlFor="firstname"
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Category
              </label>
              <FormControl fullWidth sx={{}}>
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
                  <label
                    style={{
                      paddingBottom: "5px",
                      fontSize: "18px",
                      paddingTop: "10px",
                    }}
                  >
                    Keywords
                  </label>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TextField
                      required
                      fullWidth
                      value={currentKeyword}
                      autoComplete="off"
                      name="degree"
                      type="string"
                      onChange={(e) => setCurrentKeyword(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddKeyword();
                        }
                      }}
                      placeholder="Eg. Fever"
                      InputProps={{
                        sx: {
                          height: "2.4em",
                        },
                      }}
                    />
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
              <label
                htmlFor="firstname"
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Description
              </label>
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
                sx={{}}
              />
            </Box>

            <Grid item xs={12} sm={12} md={12} lg={10}>
              <Typography
                variant="h5"
                component="h5"
                className="mb-2"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Important Questions
              </Typography>

              <label
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Question1
              </label>
              <TextField
                fullWidth
                value={currentQuestion}
                autoComplete="off"
                name="question"
                onChange={(e) => setCurrentQuestion(e.target.value)}
                InputProps={{ sx: { height: "2.4em" } }}
              />

              <label
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Answer
              </label>
              <TextField
                fullWidth
                value={currentAnswer}
                autoComplete="off"
                name="answer"
                onChange={(e) => setCurrentAnswer(e.target.value)}
                placeholder="E.g"
                InputProps={{ sx: { height: "2.4em" } }}
              />
              <label
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Question2
              </label>
              <TextField
                fullWidth
                value={currentQuestion2}
                autoComplete="off"
                name="question2"
                onChange={(e) => setCurrentQuestion2(e.target.value)}
                InputProps={{ sx: { height: "2.4em" } }}
              />

              <label
                style={{
                  paddingBottom: "5px",
                  fontSize: "18px",
                  paddingTop: "10px",
                }}
              >
                Answer
              </label>
              <TextField
                fullWidth
                value={currentAnswer2}
                autoComplete="off"
                name="answe2"
                onChange={(e) => setCurrentAnswer2(e.target.value)}
                placeholder="E.g"
                InputProps={{ sx: { height: "2.4em" } }}
              />

              <Button
              
                className="Questions"
                onClick={handleAddQuestionAnswer}
                style={{ marginTop: "1em" }}
              >
                + More Questions
              </Button>

              <div style={{ marginTop: "2em" }}>
                {videoInfo.questionsAnswers.map((qa, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography style={{ marginRight: "10px" }}>
                      Q: {qa.question} - A: {qa.answer}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteQuestionAnswer(index)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </Grid>

            <div
              className="d-flex justify-content-between mt-3 "
              style={{
                paddingTop: "5px",
                paddingBottom: "20px",
                position: "absolute",
                right: "5%",
                marginBottom: "1em",
                gap: "10px",
                
              }}
            >
               {/* <Button
               className="btn-width2"
                onClick={() => {
                  setVideoInfo({
                    ...videoInfo,
                    isDraft: true,
                  });
                  edit ? updateVideo() : handlePost();
                }}
              >
                Save Draft
              </Button> */}
              <UploadButton
                onClick={() => {
                  edit ? updateVideo() : handlePost();
                }}
                style={{
                  backgroundColor: "#133680",
                  color: "white",
                }}
              >
                {edit ? "Update" : "Upload"} 
              </UploadButton>
             
            </div>
          </ThemeProvider>
          {
            <div style={{ marginTop: "6em" }}>
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
                            <Typography component={"p"}>
                              {video.title}
                            </Typography>
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
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default VideoFetch;
