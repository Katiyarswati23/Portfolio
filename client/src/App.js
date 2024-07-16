import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/Techstack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import Tada from 'react-reveal/Tada'
import {useTheme} from"./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
// import {ToastContainer} from "react-toastify"
// import "react-toastify/dist/ReactToastify.css";




function App() {
  const [theme]= useTheme();
  return (
    < >
    <div id={theme}>
      {/* <ToastContainer/> */}
      <MobileNav/>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <TechStack/>
      <Projects/>
      <Contact/>
      </div>
      <Tada>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center"> Thank you for visiting my portfolio account </h4>
      </div>
      </Tada>
      </div>
    <ScrollToTop smooth 
    
    color="#f29f67" style={{backgroundColor:'#1e1e2c',borderRadius:"80px",}}/>
    
 </>
  );
}

export default App;
