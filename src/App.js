import "./Styling/App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import Podium from "./components/Podium_Creation/Podium.js";
import NavBar from "./components/NavBar.js";
// import Results from "./components/Results/ResultsHistory.js";
// import RecentPodium from "./components/Results/RecentPodium.js";
import USACWebSocket from "./components/websocket.js";
import HomePage from "./components/HomePage.js";

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/live" element={<USACWebSocket />} />
                    {/* <Route path="/" element={<Podium />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/recent" element={<RecentPodium />} />*/}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
