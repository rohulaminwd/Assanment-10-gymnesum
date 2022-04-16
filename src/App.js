import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbars from './Component/Navbars';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
