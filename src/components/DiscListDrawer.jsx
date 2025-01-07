import { useState } from "react";
import discs from "./../database/index.js";
import PropTypes from "prop-types";
import MusicDiskSlot from "./MusicDiscSlot.jsx";

DiscList.propTypes = {
  currentDiscIndex: PropTypes.number.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setCurrentAudioDuration: PropTypes.func.isRequired,
};

function DiscList({
  currentDiscIndex,
  setCurrentTrackIndex,
  setIsPlaying,
  setCurrentAudioDuration,
}) {
  const [isChestOpen, setIsChestOpen] = useState(false);

  function handleOpenChest() {
    let audio = new Audio();
    if (isChestOpen) {
      audio.src = "./src/assets/sounds/close-chest.mp3";
    } else {
      audio.src = "./src/assets/sounds/open-chest.mp3";
    }
    audio.play();
    setIsChestOpen((prev) => !prev);
  }

  function handleOnChanceTrack(e) {
    const value = e.target.value;
    setCurrentTrackIndex(Number(value));
    setIsPlaying(false);
    setCurrentAudioDuration(0);
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
        onClick={handleOpenChest}
        id="chest-button"
        src={
          isChestOpen
            ? "./src/assets/open-chest.png"
            : "./src/assets/closed-chest.png"
        }
        alt=""
      />
      <div className={isChestOpen ? "open" : ""} id="disc-list-drawer">
        {discs.map((disc, index) => (
          <MusicDiskSlot
            disc={disc}
            isActive={index === currentDiscIndex}
            currentDiscIndex={currentDiscIndex}
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
