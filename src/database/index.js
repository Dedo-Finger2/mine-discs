import path from "node:path";

/**
 * @typedef { Object } Disc
 * @property { string } name
 * @property { string } compositor
 * @property { string } accentColor
 * @property { string } trackPath
 * @property { string } imagePath
 */

/** @type {Array<Disc>} */
const discs = [
  {
    name: "creator",
    compositor: "???",
    accentColor: "#000",
    imagePath: path.join("./", "database", "disc-images", "creator.png"),
    trackPath: path.join("./", "database", "disc-tracks", "creator.mp3"),
  },
];

export default discs;
