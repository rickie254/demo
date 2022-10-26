import './App.css';
import Navbar  from './components/HOME/Navbar';
import Slide from "./components/HOME/Slide";
import Footer from "./components/HOME/Footer";
import About from "./components/HOME/About";
import Cases from './components/HOME/Cases';
import Partners from './components/HOME/Partners';
import CreateAccount from './components/SignupSignin/CreateAccount';  
import SignIn from './components/SignupSignin/SignIn';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Testimonials from './components/HOME/Testimonials';
// import Routlinks from "./components/SignupSignin/components/Routlinks"


function App() {
  return (
    <div>
      <Router>
        <Routes><Route exact path="*" element={<Navbar/>}/></Routes>
        <Routes>
        <Route exact path="/" element={
          <div>
        <Slide/>
        <About/>
        <Partners/>
        <Cases/>
        <Testimonials/>
        <Footer/>
        </div>
        }/>
        <Route exact path="/slider" element={<Slide/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/partners" element={<Partners/>}/>
        <Route exact path="/cases" element={<Cases/>}/>
        <Route exact path="/footer" element={<Footer/>}/>
        <Route exact path="/testimonials" element={<Testimonials/>}/>
        </Routes>
        <Routes>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/signup" element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
