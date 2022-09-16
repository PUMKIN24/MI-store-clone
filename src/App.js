import './App.css'
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from './components/Slider';
import {BrowserRouter as Router } from 'react-router-dom'
import data from '../src/data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';


function App() {
  return (
  <Router>
    <PreNavbar />
    <Navbar />
    <Slider start={data.banner.start} />
    <Offers offer={data.offer} />
    <Heading text="STAR PRODUCTS" />
    <StarProducts starProduct={data.starProduct}/> 
    <Heading text="HOT ACCESSORIES" />
    <HotAccessoriesMenu />
  </Router>
  );
}

export default App;
