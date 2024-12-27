class Disc {
  /** @type { string } */
  name;
  /** @type { string } */
  compositor;
  /** @type { string } */
  gradientColor;
  /** @type { string } */
  trackPath;
  /** @type { HTMLAudioElement } */
  #audioElement;
  /** @type { string } */
  imagePath;

  /**
   * @param {{ name: string, compositor: string, gradientColor: string, trackPath: string, imagePath: string }} disc
   */
  constructor(disc) {
    this.name = disc.name;
    this.compositor = disc.compositor;
    this.gradientColor = disc.gradientColor;
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
    gradientColor:
      "radial-gradient(circle, rgba(251,231,177,1) 0%, rgba(54,97,82,1) 100%)",
    imagePath: "./src/database/disc-images/creator.png",
    trackPath: "./src/database/disc-tracks/creator.mp3",
  }),
  new Disc({
    name: "Pigstep",
    compositor: "Lena Raine",
    gradientColor:
      "radial-gradient(circle, rgba(235,155,34,1) 0%, rgba(87,33,33,1) 100%)",
    imagePath: "./src/database/disc-images/pigstep.png",
    trackPath: "./src/database/disc-tracks/pigstep.mp3",
  }),
  new Disc({
    name: "5",
    compositor: "Samuel Åberg",
    gradientColor:
      "radial-gradient(circle, rgba(41,223,235,1) 0%, rgba(3,65,80,1) 100%)",
    imagePath: "./src/database/disc-images/5.png",
    trackPath: "./src/database/disc-tracks/5.mp3",
  }),
  new Disc({
    name: "11",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(127,127,127,1) 0%, rgba(27,27,27,1) 100%)",
    imagePath: "./src/database/disc-images/11.png",
    trackPath: "./src/database/disc-tracks/11.mp3",
  }),
  new Disc({
    name: "13",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(254,254,254,1) 0%, rgba(254,216,0,1) 100%)",
    imagePath: "./src/database/disc-images/13.png",
    trackPath: "./src/database/disc-tracks/13.mp3",
  }),
  new Disc({
    name: "Blocks",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(182,79,61,1) 0%, rgba(28,28,28,1) 100%)",
    imagePath: "./src/database/disc-images/blocks.png",
    trackPath: "./src/database/disc-tracks/blocks.mp3",
  }),
  new Disc({
    name: "Cat",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(75,254,0,1) 0%, rgba(39,102,12,1) 100%)",
    imagePath: "./src/database/disc-images/cat.png",
    trackPath: "./src/database/disc-tracks/cat.mp3",
  }),
  new Disc({
    name: "Chirp",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(255,0,4,1) 0%, rgba(127,0,2,1) 100%)",
    imagePath: "./src/database/disc-images/chirp.png",
    trackPath: "./src/database/disc-tracks/chirp.mp3",
  }),
  new Disc({
    name: "Creator (Music Box)",
    compositor: "Lena Raine ",
    gradientColor:
      "radial-gradient(circle, rgba(255,168,81,1) 0%, rgba(228,135,108,1) 100%)",
    imagePath: "./src/database/disc-images/creator-music-box.png",
    trackPath: "./src/database/disc-tracks/creator-music-box.mp3",
  }),
  new Disc({
    name: "Far",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(0,255,144,1) 0%, rgba(124,176,0,1) 100%)",
    imagePath: "./src/database/disc-images/far.png",
    trackPath: "./src/database/disc-tracks/far.mp3",
  }),
  new Disc({
    name: "Mall",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(154,117,255,1) 0%, rgba(49,0,172,1) 100%)",
    imagePath: "./src/database/disc-images/mall.png",
    trackPath: "./src/database/disc-tracks/mall.mp3",
  }),
  new Disc({
    name: "Mellohi",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(211,111,255,1) 0%, rgba(131,26,177,1) 100%)",
    imagePath: "./src/database/disc-images/mellohi.png",
    trackPath: "./src/database/disc-tracks/mellohi.mp3",
  }),
  new Disc({
    name: "Otherside",
    compositor: "Lena Raine",
    gradientColor:
      "radial-gradient(circle, rgba(120,233,95,1) 0%, rgba(49,162,242,1) 100%)",
    imagePath: "./src/database/disc-images/otherside.png",
    trackPath: "./src/database/disc-tracks/otherside.mp3",
  }),
  new Disc({
    name: "Precipice",
    compositor: "Aaron Cherof ",
    gradientColor:
      "radial-gradient(circle, rgba(110,197,159,1) 0%, rgba(227,130,108,1) 100%)",
    imagePath: "./src/database/disc-images/precipice.png",
    trackPath: "./src/database/disc-tracks/precipice.mp3",
  }),
  new Disc({
    name: "Stal",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(65,65,65,1) 0%, rgba(5,5,5,1) 100%)",
    imagePath: "./src/database/disc-images/stal.png",
    trackPath: "./src/database/disc-tracks/stal.mp3",
  }),
  new Disc({
    name: "Strad",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(207,207,207,1) 0%, rgba(81,81,81,1) 100%)",
    imagePath: "./src/database/disc-images/strad.png",
    trackPath: "./src/database/disc-tracks/strad.mp3",
  }),
  new Disc({
    name: "Wait",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(129,169,226,1) 0%, rgba(72,116,179,1) 100%)",
    imagePath: "./src/database/disc-images/wait.png",
    trackPath: "./src/database/disc-tracks/wait.mp3",
  }),
  new Disc({
    name: "Ward",
    compositor: "C418",
    gradientColor:
      "radial-gradient(circle, rgba(142,198,0,1) 0%, rgba(1,107,86,1) 100%)",
    imagePath: "./src/database/disc-images/ward.png",
    trackPath: "./src/database/disc-tracks/ward.mp3",
  }),
  new Disc({
    name: "Relic",
    compositor: "Aaron Cherof ",
    gradientColor:
      "radial-gradient(circle, rgba(136,230,255,1) 0%, rgba(141,78,64,1) 50%, rgba(70,36,28,1) 100%)",
    imagePath: "./src/database/disc-images/relic.png",
    trackPath: "./src/database/disc-tracks/relic.mp3",
  }),
];

export default discs;
