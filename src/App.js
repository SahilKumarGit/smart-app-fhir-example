import './App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from './pages/homeApp';
import { LaunchApp } from './pages/launchApp';
import { ObservationApp } from './pages/observationApp';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/launch" element={<LaunchApp />} />
      <Route path="/observation/:oid" element={<ObservationApp />} />
    </Routes>
  );
}

export default App;
