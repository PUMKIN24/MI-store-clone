import './App.css'
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from './components/Slider';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import data from '../src/data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';



function App() {
  return (
  <Router>
    <PreNavbar />
    <Navbar />
    <Slider start={data.banner.start} />
    <Offers offer={data.offer} />
    <Heading text="STAR PRODUCTS" />
    <StarProducts starProduct={data.starProduct}/> 
    <Heading text="HAPPY SHOPPING" />
    {/* <HotAccessoriesMenu /> */}

      {/* <Route exact path='/music'>
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route> */}
  </Router>
  );
}

export default App;
