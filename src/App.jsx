import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <ScrollToTop />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
