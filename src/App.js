import "./Styling/App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import Podium from "./components/Podium_Creation/Podium.js";
import NavBar from "./components/NavBar.js";
// import Results from "./components/Results/ResultsHistory.js";
// import RecentPodium from "./components/Results/RecentPodium.js";
// import EntryManager from "./components/EntryManager/EntryManager.js";
import USACWebSocket from "./components/websocket.js";

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<USACWebSocket />} />
                    {/* <Route path="/" element={<Podium />} />
          <Route path="/results" element={<Results />} />
          <Route path="/recent" element={<RecentPodium />} />
          <Route path="/entryManager" element={<EntryManager />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
