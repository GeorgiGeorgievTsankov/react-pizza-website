import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeView } from './Routes/HomeView/HomeView';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { AboutView } from './Routes/About/AboutView';

export const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} /> 
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </Router>
  );
};
