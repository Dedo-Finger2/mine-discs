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
    this.backgroundImagePath = "/assets/images/default.png";
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
    imagePath: "/assets/disc-images/creator.png",
    trackPath: "/assets/disc-tracks/creator.mp3",
  }),
  new Disc({
    name: "Pigstep",
    compositor: "Lena Raine",
    imagePath: "/assets/disc-images/pigstep.png",
    trackPath: "/assets/disc-tracks/pigstep.mp3",
  }),
  new Disc({
    name: "5",
    compositor: "Samuel Åberg",
    imagePath: "/assets/disc-images/5.png",
    trackPath: "/assets/disc-tracks/5.mp3",
  }),
  new Disc({
    name: "11",
    compositor: "C418",
    imagePath: "/assets/disc-images/11.png",
    trackPath: "/assets/disc-tracks/11.mp3",
  }),
  new Disc({
    name: "13",
    compositor: "C418",
    imagePath: "/assets/disc-images/13.png",
    trackPath: "/assets/disc-tracks/13.mp3",
  }),
  new Disc({
    name: "Blocks",
    compositor: "C418",
    imagePath: "/assets/disc-images/blocks.png",
    trackPath: "/assets/disc-tracks/blocks.mp3",
  }),
  new Disc({
    name: "Cat",
    compositor: "C418",
    imagePath: "/assets/disc-images/cat.png",
    trackPath: "/assets/disc-tracks/cat.mp3",
  }),
  new Disc({
    name: "Chirp",
    compositor: "C418",
    imagePath: "/assets/disc-images/chirp.png",
    trackPath: "/assets/disc-tracks/chirp.mp3",
  }),
  new Disc({
    name: "Creator (Music Box)",
    compositor: "Lena Raine ",
    imagePath: "/assets/disc-images/creator-music-box.png",
    trackPath: "/assets/disc-tracks/creator-music-box.mp3",
  }),
  new Disc({
    name: "Far",
    compositor: "C418",
    imagePath: "/assets/disc-images/far.png",
    trackPath: "/assets/disc-tracks/far.mp3",
  }),
  new Disc({
    name: "Mall",
    compositor: "C418",

    imagePath: "/assets/disc-images/mall.png",
    trackPath: "/assets/disc-tracks/mall.mp3",
  }),
  new Disc({
    name: "Mellohi",
    compositor: "C418",
    imagePath: "/assets/disc-images/mellohi.png",
    trackPath: "/assets/disc-tracks/mellohi.mp3",
  }),
  new Disc({
    name: "Otherside",
    compositor: "Lena Raine",
    imagePath: "/assets/disc-images/otherside.png",
    trackPath: "/assets/disc-tracks/otherside.mp3",
  }),
  new Disc({
    name: "Precipice",
    compositor: "Aaron Cherof ",
    imagePath: "/assets/disc-images/precipice.png",
    trackPath: "/assets/disc-tracks/precipice.mp3",
  }),
  new Disc({
    name: "Stal",
    compositor: "C418",
    imagePath: "/assets/disc-images/stal.png",
    trackPath: "/assets/disc-tracks/stal.mp3",
  }),
  new Disc({
    name: "Strad",
    compositor: "C418",
    imagePath: "/assets/disc-images/strad.png",
    trackPath: "/assets/disc-tracks/strad.mp3",
  }),
  new Disc({
    name: "Wait",
    compositor: "C418",
    imagePath: "/assets/disc-images/wait.png",
    trackPath: "/assets/disc-tracks/wait.mp3",
  }),
  new Disc({
    name: "Ward",
    compositor: "C418",
    imagePath: "/assets/disc-images/ward.png",
    trackPath: "/assets/disc-tracks/ward.mp3",
  }),
  new Disc({
    name: "Relic",
    compositor: "Aaron Cherof ",
    imagePath: "/assets/disc-images/relic.png",
    trackPath: "/assets/disc-tracks/relic.mp3",
  }),
];

export default discs;
