class Disc {
  /** @type { string } */
  name;
  /** @type { string } */
  compositor;
  /** @type { string } */
  backgroundImagePath;
  /** @type { string } */
  trackPath;
  /** @type { HTMLAudioElement } */
  #audioElement;
  /** @type { string } */
  imagePath;

  /**
   * @param {{ name: string, compositor: string, backgroundImagePath: string, trackPath: string, imagePath: string }} disc
   */
  constructor(disc) {
    this.name = disc.name;
    this.compositor = disc.compositor;
    this.backgroundImagePath = "./src/database/background-images/default.png";
    this.trackPath = disc.trackPath;
    this.#createAudioElement();
    this.imagePath = disc.imagePath;
  }

  #createAudioElement() {
    this.#audioElement = new Audio(this.trackPath);
    this.#audioElement.volume = 0.5; // 50%
  }

  get audio() {
    return this.#audioElement;
  }
}

/** @type {Array<Disc>} */
const discs = [
  new Disc({
    name: "Creator",
    compositor: "Lena Raine",
    imagePath: "./src/database/disc-images/creator.png",
    trackPath: "./src/database/disc-tracks/creator.mp3",
  }),
  new Disc({
    name: "Pigstep",
    compositor: "Lena Raine",
    imagePath: "./src/database/disc-images/pigstep.png",
    trackPath: "./src/database/disc-tracks/pigstep.mp3",
  }),
  new Disc({
    name: "5",
    compositor: "Samuel Åberg",
    imagePath: "./src/database/disc-images/5.png",
    trackPath: "./src/database/disc-tracks/5.mp3",
  }),
  new Disc({
    name: "11",
    compositor: "C418",
    imagePath: "./src/database/disc-images/11.png",
    trackPath: "./src/database/disc-tracks/11.mp3",
  }),
  new Disc({
    name: "13",
    compositor: "C418",
    imagePath: "./src/database/disc-images/13.png",
    trackPath: "./src/database/disc-tracks/13.mp3",
  }),
  new Disc({
    name: "Blocks",
    compositor: "C418",
    imagePath: "./src/database/disc-images/blocks.png",
    trackPath: "./src/database/disc-tracks/blocks.mp3",
  }),
  new Disc({
    name: "Cat",
    compositor: "C418",
    imagePath: "./src/database/disc-images/cat.png",
    trackPath: "./src/database/disc-tracks/cat.mp3",
  }),
  new Disc({
    name: "Chirp",
    compositor: "C418",
    imagePath: "./src/database/disc-images/chirp.png",
    trackPath: "./src/database/disc-tracks/chirp.mp3",
  }),
  new Disc({
    name: "Creator (Music Box)",
    compositor: "Lena Raine ",
    imagePath: "./src/database/disc-images/creator-music-box.png",
    trackPath: "./src/database/disc-tracks/creator-music-box.mp3",
  }),
  new Disc({
    name: "Far",
    compositor: "C418",
    imagePath: "./src/database/disc-images/far.png",
    trackPath: "./src/database/disc-tracks/far.mp3",
  }),
  new Disc({
    name: "Mall",
    compositor: "C418",

    imagePath: "./src/database/disc-images/mall.png",
    trackPath: "./src/database/disc-tracks/mall.mp3",
  }),
  new Disc({
    name: "Mellohi",
    compositor: "C418",
    imagePath: "./src/database/disc-images/mellohi.png",
    trackPath: "./src/database/disc-tracks/mellohi.mp3",
  }),
  new Disc({
    name: "Otherside",
    compositor: "Lena Raine",
    imagePath: "./src/database/disc-images/otherside.png",
    trackPath: "./src/database/disc-tracks/otherside.mp3",
  }),
  new Disc({
    name: "Precipice",
    compositor: "Aaron Cherof ",
    imagePath: "./src/database/disc-images/precipice.png",
    trackPath: "./src/database/disc-tracks/precipice.mp3",
  }),
  new Disc({
    name: "Stal",
    compositor: "C418",
    imagePath: "./src/database/disc-images/stal.png",
    trackPath: "./src/database/disc-tracks/stal.mp3",
  }),
  new Disc({
    name: "Strad",
    compositor: "C418",
    imagePath: "./src/database/disc-images/strad.png",
    trackPath: "./src/database/disc-tracks/strad.mp3",
  }),
  new Disc({
    name: "Wait",
    compositor: "C418",
    imagePath: "./src/database/disc-images/wait.png",
    trackPath: "./src/database/disc-tracks/wait.mp3",
  }),
  new Disc({
    name: "Ward",
    compositor: "C418",
    imagePath: "./src/database/disc-images/ward.png",
    trackPath: "./src/database/disc-tracks/ward.mp3",
  }),
  new Disc({
    name: "Relic",
    compositor: "Aaron Cherof ",
    imagePath: "./src/database/disc-images/relic.png",
    trackPath: "./src/database/disc-tracks/relic.mp3",
  }),
];

export default discs;
