import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Navbars from './Component/Navbars';
import About from './Pages/About';
import CheckOut from './Pages/CheckOut';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
