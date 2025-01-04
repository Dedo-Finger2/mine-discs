import { useState } from "react";
import DiscInfo from "./components/DiscInfo";
import MusicPlayer from "./components/MusicPlayer";
import discs from "./database";
import { useEffect } from "react";

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${discs[currentTrackIndex].backgroundImagePath})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.background = "";
    };
  }, [currentTrackIndex]);

  return (
    <div id="app">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.86) 90%)",
          pointerEvents: "none", // Para garantir que não interfira nos cliques
        }}
      />
      <DiscInfo disc={discs[currentTrackIndex]} />
      <MusicPlayer
        audioSrc={discs[currentTrackIndex].trackPath}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        totalTracks={discs.length}
      />
    </div>
  );
}

export default App;
