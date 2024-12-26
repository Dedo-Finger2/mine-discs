import PropTypes from "prop-types";

DiscInfo.propTypes = {
  disc: PropTypes.shape({
    name: PropTypes.string.isRequired,
    compositor: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

function DiscInfo({ disc }) {
  return (
    <div>
      <div>
        <h1>{disc.name}</h1>
        <span>{disc.compositor}</span>
      </div>
      <img src={disc.imagePath} alt="disc-image" />
    </div>
  );
}

export default DiscInfo;
