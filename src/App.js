import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Ride from './components/Ride';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Ride" element={<Ride/>}></Route>
        <Route path="/signin"  element={<Login/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
      </Routes>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
