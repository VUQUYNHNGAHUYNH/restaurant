import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
