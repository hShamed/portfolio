import React from "react";

// Routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

// Styles
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import MePage from "./pages/MePage";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<MePage />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
