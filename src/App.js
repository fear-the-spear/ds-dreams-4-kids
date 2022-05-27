import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import './App.css';
import LogoBox from './Components/LogoBox/LogoBox';
import SupplyKit from './Components/SupplyKit/SupplyKit';
import About from './Components/About/About';
import ImageSlider from './Components/Gallery/ImageSlider';
import { SliderData } from './Components/Gallery/SliderData';
import Grids from './Components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <Grids>
        <Navbar />
      </Grids>
      <Navbar />
      <Header />
      <div className="logo-about">
        <LogoBox />
        <About />
      </div>
      <SupplyKit />
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
