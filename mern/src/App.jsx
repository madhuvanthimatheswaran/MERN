
import './App.css';
import About from './Components/FunctionalComponents/About';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/NavBar';
import Home from "./Components/FunctionalComponents/Home";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import UseRef from './Components/FunctionalComponents/UseRef';
import UseContext from './Components/FunctionalComponents/UseContext';
import UseMemo from './Components/FunctionalComponents/UseMemo';
import SignUp from './Components/FunctionalComponents/SignUp';
import Login from './Components/FunctionalComponents/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/FunctionalComponents/Footer';
import UseRefTask from './Components/FunctionalComponents/UseReftask';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About college="KONGU ENGINEERING COLLEGE"college1="KONGU ARTS AND SCIENCE" college2="KONGU POLYTECHNIC" college3="KONGU NATUROPATHY" />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/useEffect" element={<UseEffect/>}></Route>
        <Route path="/useRef" element={<UseRef/>}></Route>
        <Route path="/useReftask" element={<UseRefTask/>}></Route>
        <Route path="/useContext" element={<UseContext/>}></Route>
        <Route path="/useMemo" element={<UseMemo/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
