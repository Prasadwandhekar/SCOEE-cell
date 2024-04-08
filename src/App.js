// 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Join from './Components/Join';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
          
          <Routes>

             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/blogs' element={<Blogs/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/join' element={<Join/>}/>

          </Routes>
          <Footer/>
          <div className="copyright">
        <p>© 2024 Copyright: E-Cell SCOE</p>
      </div>
    </div>
  );
}

export default App;
