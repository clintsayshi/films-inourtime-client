import React from "react";
import PropTypes from "prop-types";

function YoutubeEmbed({ videoId }) {
  return (
    <div className="overflow-hidden relative h-72 lg:h-96">
      <iframe
        className="w-full h-full"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
