import PropTypes from "prop-types";
import DiscList from "./DiscListDrawer";

MusicDiskSlot.propTypes = {
  disc: PropTypes.object.isRequired,
  currentDiscIndex: PropTypes.number.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setCurrentAudioDuration: PropTypes.func.isRequired,
};

function MusicDiskSlot({
  disc,
  currentDiscIndex,
  setCurrentTrackIndex,
  setIsPlaying,
  setCurrentAudioDuration,
}) {
  return (
    <div className="disc-slot">
      <img src={disc.imagePath} alt="disc-image" />
      <span>{DiscList.name}</span>
    </div>
  );
}

export default MusicDiskSlot;
