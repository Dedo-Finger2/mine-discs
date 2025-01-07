import PropTypes from "prop-types";

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
      <div className="disc-slot-overlay"></div>
      <img src={disc.imagePath} alt="disc-image" />
    </div>
  );
}

export default MusicDiskSlot;
