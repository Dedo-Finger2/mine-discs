import PropTypes from "prop-types";
import { useState } from "react";
import discs from "../database";

MusicPlayer.propTypes = {
  audioElement: PropTypes.object.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
};

function MusicPlayer({ audioElement, setCurrentTrackIndex }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const maximumCurrentTrackIndex = discs.length;

  function handleNextTrack() {
    setCurrentTrackIndex((prev) => {
      if (prev + 1 >= maximumCurrentTrackIndex) return prev;
      audioElement.load();
      setIsPlaying(false);
      return prev + 1;
    });
  }

  function handlePreviousTrack() {
    setCurrentTrackIndex((prev) => {
      if (prev - 1 <= -1) return prev;
      audioElement.load();
      setIsPlaying(false);
      return prev - 1;
    });
  }

  function togglePlayPause() {
    if (isPlaying) {
      setIsPlaying(false);
      audioElement.pause();
    } else {
      setIsPlaying(true);
      audioElement.play();
    }
  }

  return (
    <div>
      {/*  TODO: Fazer mostrar o tempo da música enquanto ela toca       */}
      <button onClick={handlePreviousTrack}>Previous</button>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleNextTrack}>Next</button>
    </div>
  );
}

export default MusicPlayer;
