import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { HomeView } from './Routes/HomeView/HomeView'
import { NavbarComponent } from './components/Navbar/NavbarComponent'

export const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={HomeView} />
      </Routes>
    </Router>
  )
}
