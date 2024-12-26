class Disc {
  /** @type { string } */
  name;
  /** @type { string } */
  compositor;
  /** @type { string } */
  accentColor;
  /** @type { string } */
  trackPath;
  /** @type { HTMLAudioElement } */
  #audioElement;
  /** @type { string } */
  imagePath;

  /**
   * @param {{ name: string, compositor: string, accentColor: string, trackPath: string, imagePath: string }} disc
   */
  constructor(disc) {
    this.name = disc.name;
    this.compositor = disc.compositor;
    this.accentColor = disc.accentColor;
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
    name: "creator",
    compositor: "Lena Raine",
    accentColor: "#000",
    imagePath: "./src/database/disc-images/creator.png",
    trackPath: "./src/database/disc-tracks/creator.mp3",
  }),
];

export default discs;
