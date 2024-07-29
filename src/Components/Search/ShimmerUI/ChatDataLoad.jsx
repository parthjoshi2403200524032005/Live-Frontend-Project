import React from "react";
import ContentLoader from "react-content-loader";

const ChatDataLoad = () => (
  <ContentLoader
    title="Thinking..."
    speed={1.6}
    viewBox="0 0 476 340"
    backgroundColor="#cfe8f7"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="5" rx="3" ry="3" width="110" height="14" />
    <rect x="48" y="28" rx="3" ry="3" width="410" height="14" />
    <rect x="48" y="48" rx="3" ry="3" width="380" height="13" />
    <rect x="48" y="68" rx="3" ry="3" width="200" height="12" />
  </ContentLoader>
);

export default ChatDataLoad;
