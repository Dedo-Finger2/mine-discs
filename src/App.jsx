import { useState } from "react";
import DiscInfo from "./components/DiscInfo";
import MusicPlayer from "./components/MusicPlayer";
import discs from "./database";

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  return (
    <div>
      <DiscInfo disc={discs[currentTrackIndex]} />
      <MusicPlayer
        audioSrc={discs[currentTrackIndex].trackPath}
        setCurrentTrackIndex={setCurrentTrackIndex}
        totalTracks={discs.length}
      />
    </div>
  );
}

export default App;
