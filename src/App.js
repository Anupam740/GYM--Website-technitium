import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { Link, Element, animateScroll as scroll } from "react-scroll";

import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Program from './components/program/Program';
import Pricing from './components/pricing/Pricing';
import Training from './components/training/Training';
import Register from './components/registration/Register';
import TrainersCard from './components/trainersCard/TrainersCard';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Link
  to="training"
  smooth={true}
  duration={500}
  offset={-50}
  spy={true}
  exact="true"
  activeClass="active"
>
  Section 1
</Link>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/register" element={<Register/>}/>
      
        <Route exact path="/trainerscard" element={<TrainersCard/>}/>
      </Routes >
      
      <NavBar/>
      
      <About/>
      <Program/>
      <Training/>
      <Pricing/>
      <Footer/>
      
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
