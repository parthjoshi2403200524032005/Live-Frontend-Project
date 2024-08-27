import { Box } from "@mui/material";
import ContentLoader from "react-content-loader";

const VideosLoad = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {xs: "auto", sm: "auto auto", md: "auto auto auto"},
        gap: 1,
        width: '100%',
      }}
    >
      {[...Array(9)].map((_, index) => (
        <ContentLoader
          key={index}
          speed={2}
          width="270px"
          height="250px"
          viewBox="0 0 300 220"
          backgroundColor="#f9f9f9"
          foregroundColor="#ecebeb"
          style={{ borderRadius: 2 }}
        >
          <rect x="0" y="0" rx="3" ry="3" width="300" height="180" />
          <rect x="6" y="190" rx="3" ry="3" width="292" height="20" />
        </ContentLoader>
      ))}
    </Box>
  );
};

export default VideosLoad;
