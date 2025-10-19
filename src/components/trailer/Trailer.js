// src/components/trailer/Trailer.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Trailer.css"; // include CSS below or inline

const Trailer = () => {
  const { ytTrailerId } = useParams();
  const [open, setOpen] = useState(false);
  const videoId = ytTrailerId;
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`
    : null;

  if (!videoId) return <p style={{ textAlign: "center" }}>No trailer found.</p>;

  return (
    <>
      <div style={{ textAlign: "center", padding: 24 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "12px 20px",
            background: "#e50914",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          ▶ Play Trailer
        </button>
      </div>

      {open && (
        <div className="trailer-modal" onClick={() => setOpen(false)}>
          <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="trailer-close" onClick={() => setOpen(false)}>✕</button>
            <div className="trailer-iframe-wrap">
              <iframe
                title="youtube-trailer"
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Trailer;
