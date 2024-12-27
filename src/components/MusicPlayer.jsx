import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

MusicPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  totalTracks: PropTypes.number.isRequired,
};

function MusicPlayer({ audioSrc, setCurrentTrackIndex, totalTracks }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioDuration, setCurrentAudioDuration] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  const audioElement = useRef(new Audio(audioSrc));

  useEffect(() => {
    const updateCurrentTime = () =>
      setCurrentAudioDuration(audioElement.current.currentTime);
    const updateDuration = () =>
      setAudioDuration(audioElement.current.duration);

    const audio = audioElement.current;
    audio.src = audioSrc; // atualiza o src do elemento de áudio quando reccarregar
    audio.load(); // recarrega o audio
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, [audioSrc]);

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => {
      if (prev + 1 >= totalTracks) return prev;
      setIsPlaying(false);
      setCurrentAudioDuration(0);
      return prev + 1;
    });
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) => {
      if (prev - 1 < 0) return prev;
      setIsPlaying(false);
      setCurrentAudioDuration(0);
      return prev - 1;
    });
  };

  const togglePlayPause = () => {
    const audio = audioElement.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds) => {
    const formattedSeconds = Math.ceil(seconds);
    const m = Math.floor(formattedSeconds / 60);
    const s = formattedSeconds % 60;
    return `${m}:${s > 9 ? s : "0" + s}`;
  };

  return (
    <div>
      <span>{formatTime(currentAudioDuration)}</span>
      {" - "}
      <span>{formatTime(audioDuration)}</span>
      <button onClick={handlePreviousTrack}>Previous</button>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleNextTrack}>Next</button>
    </div>
  );
}

export default MusicPlayer;
