import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Landing from './components/landing';
// import Navbar from './components/navbar';
// import Homebody from './components/Homebody';
import Home from './components/home';
import Addpost from './components/Addpost';
// import Postform from './components/Postform';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/allpost' element={<Home />} />
      <Route path='/addpost' element={<Addpost />} />
    </Routes>
    </BrowserRouter>
   
    ///TmoiXMSSOWMK4ktU


  );
}

export default App;
