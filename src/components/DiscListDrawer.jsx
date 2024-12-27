import discs from "./../database/index.js";
import PropTypes from "prop-types";

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
  function handleOnChanceTrack(e) {
    const value = e.target.value;
    setCurrentTrackIndex(Number(value));
    setIsPlaying(false);
    setCurrentAudioDuration(0);
  }

  return (
    <div>
      <select value={currentDiscIndex} onChange={handleOnChanceTrack}>
        {discs.map((disc, index) => (
          <option value={index} key={index}>
            {disc.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DiscList;
