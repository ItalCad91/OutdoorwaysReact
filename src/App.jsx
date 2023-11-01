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
