import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SearchCars } from "./pages/SearchCars";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchCars />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
