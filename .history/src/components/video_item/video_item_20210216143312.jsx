import React from "react";

const VideoItem = ({ video: { snippet } }) => (
  <li>
    <img src={snippet.thumbnails.medium.url} alt="video thumbnails" />
    <div>
      <p>{snippet.title}</p>
      <p>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
