import "./Styling/App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Podium from "./components/Podium_Creation/Podium";
import NavBar from "./components/NavBar";
import Results from "./components/Results/ResultsHistory";
import RecentPodium from "./components/Results/RecentPodium";
import EntryManager from "./components/EntryManager/EntryManager";
import USACWebSocket from "./components/websocket";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<USACWebSocket />} />
                    {/* <Route path="/" element={<Podium />} />
          <Route path="/competitors" element={<DriverSearch />} />
          <Route path="/results" element={<Results />} />
          <Route path="/recent" element={<RecentPodium />} />
          <Route path="/entryManager" element={<EntryManager />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
