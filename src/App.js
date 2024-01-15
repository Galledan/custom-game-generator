import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PlayerListPage from "./pages/PlayerListPage/PlayerListPage";
import MainPage from "./pages/MainPage/MainPage";
import Admin from "./pages/Admin/Admin";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/player-list" element={<PlayerListPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      </Router>
  );
}

export default App;
