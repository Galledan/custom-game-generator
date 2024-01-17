import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayerListPage from "./pages/PlayerListPage/PlayerListPage";
import MainPage from "./pages/MainPage/MainPage";
import Admin from "./pages/Admin/Admin";
import { PlayerProvider } from "./context/PlayerContext/PlayerContext";
import Draft from "./pages/Draft/Draft";

function App() {
  return (
    <Router>
      <PlayerProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/player-list" element={<PlayerListPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/draft" element={<Draft />} />
        </Routes>
      </PlayerProvider>
    </Router>
  );
}

export default App;
