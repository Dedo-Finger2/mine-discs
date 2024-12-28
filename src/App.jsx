import { useState } from "react";
import DiscInfo from "./components/DiscInfo";
import MusicPlayer from "./components/MusicPlayer";
import discs from "./database";
import { useEffect } from "react";

function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    document.body.style.background = discs[currentTrackIndex].gradientColor;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.background = "";
    };
  }, [currentTrackIndex]);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
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
