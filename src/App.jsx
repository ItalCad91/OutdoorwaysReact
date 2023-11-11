import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home'
import AboutPage from './Components/About'
import ContactPage from './Components/ContactUs'
import Kids from './Components/Kids'
import Women from './Components/Women'
import Men from './Components/Men'
import Camping from "./Components/Camping";
import Footer from "./Components/Navbar/Footer";
import Privacy from './Components/footer/privacy'
import SearchBar from "./Components/SearchBar/SearchBar";
import BootsKids from './Components/ProductsDescription/Kids/BootsKids';
import KidsBottle from './Components/ProductsDescription/Kids/bottleKids';
import KidsHat from './Components/ProductsDescription/Kids/hatKid';
import KidsSoft from './Components/ProductsDescription/Kids/softshellKid';
import KidsPole from './Components/ProductsDescription/Kids/trekkingPoleKids';
import MenBoots from './Components/ProductsDescription/Men/MenHikingBoots';
import MenBottle from './Components/ProductsDescription/Men/MenInsulatedWaterBottle';
import MenSoftShell from './Components/ProductsDescription/Men/MenSoftshellJacket';
import MenHat from './Components/ProductsDescription/Men/MenTrekkingHat';
import MenPole from './Components/ProductsDescription/Men/MenTrekkingPoles';
import WomenBoots from './Components/ProductsDescription/Women/WomenHikingBoots';
import WomenBottle from './Components/ProductsDescription/Women/WomenWaterBottle';
import WomenSoftShell from './Components/ProductsDescription/Women/WomenSoftshellJacket';
import WomenHat from './Components/ProductsDescription/Women/WomenTrekkingHat';
import WomenPole from './Components/ProductsDescription/Women/WomenTrekkingPoles';
import WomenWaterProofJacket from './Components/ProductsDescription/Women/WomenWaterproofJacket';





import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div>
    <Navbar />
    <div>
        <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Camping" element={<Camping />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/SearchBar" element={<SearchBar/>}/>
        <Route path="/BootsKids" element={<BootsKids />} />
        <Route path="/bottleKids" element={<KidsBottle />} /> 
        <Route path="/hatKids" element={<KidsHat />} /> 
        <Route path="/softshellKid" element={<KidsSoft />} /> 
        <Route path="/trekkingPoleKids" element={<KidsPole />} />
        <Route path="/MenHikingBoots" element={<MenBoots />} />
        <Route path="/MenInsulatedWaterBottle" element={<MenBottle />} />
        <Route path="/MenSoftShellJacket" element={<MenSoftShell/>} /> 
        <Route path="/MenTrekkingHat" element={<MenHat/>} /> 
        <Route path="/MenTrekkingPoles" element={<MenPole />} /> 
        <Route path="/WomenHikingBoots" element={<WomenBoots />} /> 
        <Route path="/WomenSoftshellJacket" element={<WomenSoftShell />} /> 
        <Route path="/WomenTrekkingHat" element={<WomenHat />} /> 
        <Route path="/WomenTrekkingPoles" element={<WomenPole />} /> 
        <Route path="/WomenWaterBottle" element={<WomenBottle />} /> 
        <Route path="/WomenWaterProofJacket" element={<WomenWaterProofJacket />} /> 
        </Routes>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
