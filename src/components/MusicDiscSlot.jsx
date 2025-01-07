import PropTypes from "prop-types";

MusicDiskSlot.propTypes = {
  isAutoPlaying: PropTypes.bool.isRequired,
  disc: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  setCurrentTrackIndex: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setCurrentAudioDuration: PropTypes.func.isRequired,
};

function MusicDiskSlot({
  disc,
  isAutoPlaying,
  isActive,
  index,
  setCurrentTrackIndex,
  setIsPlaying,
  setCurrentAudioDuration,
}) {
  function handleChangeTrack() {
    if (!isAutoPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
    setCurrentTrackIndex(index);
    setCurrentAudioDuration(0);
  }

  return (
    <div
      onClick={handleChangeTrack}
      className={`disc-slot ${isActive ? "active-disc-slot" : ""}`}
    >
      <div className="disc-slot-overlay"></div>
      <img loading="lazy" src={disc.imagePath} alt="disc-image" />
    </div>
  );
}

export default MusicDiskSlot;
