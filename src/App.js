import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Mywork from './Component/Mywork/Mywork';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>    
    <Hero/>
    <About/>
    <Services/>
    <Mywork/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
