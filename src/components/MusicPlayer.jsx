import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import DiscList from "./DiscListDrawer";
import {
  StepBack,
  StepForward,
  Pause,
  Play,
  Repeat,
  Repeat1,
  PlayCircle,
  Repeat2,
} from "lucide-react";

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
  const [isLooping, setIsLooping] = useState(false);
  const [loopType, setLoopType] = useState("");

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
    const audio = audioElement.current;
    async function handleHasEnded() {
      setIsPlaying(false);
      setCurrentAudioDuration(0);
      if (isAutoPlaying && !isLooping && currentTrackIndex < totalTracks - 1) {
        setCurrentTrackIndex((prev) => prev + 1);
        setIsPlaying(true);
        try {
          await audio.play();
        } catch (error) {
          console.error("ERROR trying to play audio: ", error);
        }
      }
      if (isLooping && loopType === "track") {
        try {
          setIsPlaying(true);
          await audio.play();
        } catch (error) {
          console.error("ERROR trying to re-play the current track: ", error);
        }
      }
      if (
        isLooping &&
        loopType === "playlist" &&
        currentTrackIndex < totalTracks - 1
      ) {
        try {
          setCurrentTrackIndex((prev) => prev + 1);
          audio.autoplay = true;
          setIsPlaying(true);
          await audio.play();
        } catch (error) {
          console.error("ERROR trying to play next track: ", error);
        }
      }
      if (
        isLooping &&
        loopType === "playlist" &&
        currentTrackIndex === totalTracks - 1
      ) {
        try {
          setCurrentTrackIndex(0);
          audio.autoplay = true;
          setIsPlaying(true);
        } catch (error) {
          console.error("ERROR trying to re-play the playlist: ", error);
        }
      }
    }
    audio.addEventListener("ended", handleHasEnded);
    return () => {
      audio.removeEventListener("ended", handleHasEnded);
    };
  }, [
    currentAudioDuration,
    setIsPlaying,
    isLooping,
    loopType,
    currentTrackIndex,
    totalTracks,
    isAutoPlaying,
    setCurrentTrackIndex,
  ]);

  function handleChangingLoopType() {
    if (loopType === "") {
      const audio = audioElement.current;
      setLoopType("track");
      setIsLooping(true);
      audio.autoplay = false;
      setIsAutoPlaying(false);
    } else if (loopType === "track") {
      const audio = audioElement.current;
      setLoopType("playlist");
      setIsLooping(true);
      audio.autoplay = false;
      setIsAutoPlaying(false);
    } else {
      setLoopType("");
      setIsLooping(false);
    }
  }

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => {
      if (prev + 1 >= totalTracks) return prev;
      if (isAutoPlaying || (isLooping && loopType === "playlist"))
        setIsPlaying(true);
      else setIsPlaying(false);
      setCurrentAudioDuration(0);
      return prev + 1;
    });
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prev) => {
      if (prev - 1 < 0) return prev;
      if (isAutoPlaying || (isLooping && loopType === "playlist"))
        setIsPlaying(true);
      else setIsPlaying(false);
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
    setIsAutoPlaying((prev) => {
      if (prev) {
        const audio = audioElement.current;
        audio.autoplay = false;
        return false;
      }
      const audio = audioElement.current;
      audio.autoplay = true;
      setLoopType("");
      setIsLooping(false);
      if (!isPlaying) audio.pause();
      return true;
    });
  }

  function handleTimeRangeInputChange(e) {
    const value = e.target.value;
    const audio = audioElement.current;
    setCurrentAudioDuration(value);
    audio.currentTime = value;
  }

  return (
    <div>
      <div id="music-player-song-progress-bar-and-time">
        <input
          onChange={handleTimeRangeInputChange}
          value={currentAudioDuration}
          max={audioDuration}
          type="range"
        />
        <div id="music-player-music-time">
          <span>{formatTime(currentAudioDuration)}</span>
          <span>{formatTime(audioDuration)}</span>
        </div>
      </div>
      <div id="music-player-control-buttons">
        <div id="music-player-time-buttons">
          <button onClick={handlePreviousTrack}>
            <StepBack />
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNextTrack}>
            <StepForward />
          </button>
        </div>
        <div id="music-player-flux-buttons">
          <button onClick={handleAutoPlay}>
            <PlayCircle />
            Autoplay: {isAutoPlaying ? "On" : "Off"}
          </button>
          <button onClick={handleChangingLoopType}>
            {loopType === "track" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Repeat1 />
                <span>Track</span>
              </div>
            ) : loopType === "playlist" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Repeat />
                <span>Playlist</span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Repeat2 />
                <span>No loop</span>
              </div>
            )}
          </button>
        </div>
      </div>
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
