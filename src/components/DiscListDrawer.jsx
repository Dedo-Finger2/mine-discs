import { useState } from "react";
import discs from "./../database/index.js";
import PropTypes from "prop-types";
import MusicDiskSlot from "./MusicDiscSlot.jsx";

DiscList.propTypes = {
  isAutoPlaying: PropTypes.bool.isRequired,
  currentDiscIndex: PropTypes.number.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setCurrentAudioDuration: PropTypes.func.isRequired,
};

function DiscList({
  isAutoPlaying,
  currentDiscIndex,
  setCurrentTrackIndex,
  setIsPlaying,
  setCurrentAudioDuration,
}) {
  const [isChestOpen, setIsChestOpen] = useState(false);

  function handleOpenChest() {
    let audio = new Audio();
    if (isChestOpen) {
      audio.src = "/assets/sounds/close-chest.mp3";
    } else {
      audio.src = "/assets/sounds/open-chest.mp3";
    }
    audio.play();
    setIsChestOpen((prev) => !prev);
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <img
        loading="lazy"
        onClick={handleOpenChest}
        id="chest-button"
        src={
          isChestOpen
            ? "/assets/images/open-chest.png"
            : "/assets/images/closed-chest.png"
        }
        alt=""
      />
      <div className={isChestOpen ? "open" : ""} id="disc-list-drawer">
        {discs.map((disc, index) => (
          <MusicDiskSlot
            isAutoPlaying={isAutoPlaying}
            disc={disc}
            index={index}
            isActive={index === currentDiscIndex}
            setCurrentAudioDuration={setCurrentAudioDuration}
            setCurrentTrackIndex={setCurrentTrackIndex}
            setIsPlaying={setIsPlaying}
            key={index}
          />
        ))}
      </div>
      {/* <select value={currentDiscIndex} onChange={handleOnChanceTrack}>
        {discs.map((disc, index) => (
          <option value={index} key={index}>
            {disc.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default DiscList;
