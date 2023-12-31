
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portafolio from './page/Portafolio';
import Contacto from './page/Contacto';
import Inicio from './page/Inicio';


function App() {


  return (
    <Router>
      <Navegacion />
      <Routes>
      <Route path="/" element={<Inicio />} /> 
      <Route path="/inicio" element={<Inicio />} /> 
      <Route path="/portafolio" element={<Portafolio />} /> 
      <Route path="/contacto" element={<Contacto />} /> 
      </Routes>
    </Router>
  )
}

export default App
