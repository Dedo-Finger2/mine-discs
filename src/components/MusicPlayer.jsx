import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import DiscList from "./DiscListDrawer";

MusicPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
  currentTrackIndex: PropTypes.number.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  totalTracks: PropTypes.number.isRequired,
};

function MusicPlayer({
  audioSrc,
  setCurrentTrackIndex,
  currentTrackIndex,
  totalTracks,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioDuration, setCurrentAudioDuration] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

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

  useEffect(() => {
    if (currentAudioDuration === audioDuration) {
      setIsPlaying(false);
      setCurrentAudioDuration(0);
      if (isAutoPlaying) {
        setCurrentTrackIndex((prev) => prev + 1);
        // FIX: AUTO PLAY NÃO ESTÁ FUNCIONANDO
        const audio = audioElement.current;
        setAudioDuration(0);
        setIsPlaying(true);
        audio.play();
      }
    }
  }, [
    currentAudioDuration,
    audioDuration,
    audioElement,
    isAutoPlaying,
    setCurrentTrackIndex,
  ]);

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

  function handleAutoPlay() {
    setIsAutoPlaying((prev) => !prev);
  }

  function handleTimeRangeInputChange(e) {
    const value = e.target.value;
    const audio = audioElement.current;
    setCurrentAudioDuration(value);
    audio.currentTime = value;
  }

  return (
    <div>
      <input
        onChange={handleTimeRangeInputChange}
        value={currentAudioDuration}
        max={audioDuration}
        type="range"
      />
      <span>{formatTime(currentAudioDuration)}</span>
      {" - "}
      <span>{formatTime(audioDuration)}</span>
      <button onClick={handlePreviousTrack}>Previous</button>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleNextTrack}>Next</button>
      <button onClick={handleAutoPlay}>
        Autoplay: {isAutoPlaying ? "On" : "Off"}
      </button>
      <button>No Loop</button>
      <DiscList
        currentDiscIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        setIsPlaying={setIsPlaying}
        setCurrentAudioDuration={setCurrentAudioDuration}
      />
    </div>
  );
}

export default MusicPlayer;
