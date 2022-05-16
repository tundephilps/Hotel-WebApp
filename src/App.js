import React from 'react';
import "./components/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Rooms from './components/Rooms/Rooms';
import Blog from './components/Blog/Blog';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Destination from './components/Destination/Destination';
import Header from './components/Navbar/Header';
import "./App.css"
import SinglePage from './components/SinglePage/SinglePage';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';
import SearchPage from './components/Rooms/SearchPage';


//import Header from './components/Header';


function App() {
    return (<div>
  <Router>
      <Navbar />
      <Header />
                <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Rooms" element={<Rooms />} />
                <Route path="/Destination" element={<Destination />} />
                
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SinglePage/:id" element={<SinglePage />} />
                <Route path="/Article" element={<Article />} />
                <Route path="/Search" element={<SearchPage />} />
                
            </Routes>

         <Footer />   
            </Router>
          
          
    </div>  );
}

export default App;
