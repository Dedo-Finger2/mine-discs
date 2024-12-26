import DiscInfo from "./components/DiscInfo";
import discs from "./database";

function App() {
  return (
    <div>
      <DiscInfo disc={discs[0]} />
    </div>
  );
}

export default App;
