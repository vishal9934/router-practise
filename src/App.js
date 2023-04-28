import {Routes,Route} from 'react-router-dom';
//import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbar from './navbar';

function App() {
  return (
     <div className="App">
      <Navbar/>
      <Routes>
         <Route path="/home" element=  {<Home/>} />
         <Route path="/about" element=  {<About/>}  />
         <Route path="/contact" element=  {<Contact/>} />
      </Routes>
     </div>
    
  );
}

export default App;
