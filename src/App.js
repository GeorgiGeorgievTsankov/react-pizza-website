import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeView } from './Routes/HomeView/HomeView';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { AboutView } from './Routes/About/AboutView';
import { Footer } from './components/Footer/Footer';
import { MenuView } from './Routes/Menu/MenuView';
import { ContactsView } from './Routes/Contacts/ContactsView';
import './App.css'

export const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} /> 
        <Route path="/about" element={<AboutView />} />
        <Route path="/menu" element={<MenuView />} /> 
        <Route path="/contact" element={<ContactsView />} />
      </Routes>
      <Footer />
    </Router>
  );
};



