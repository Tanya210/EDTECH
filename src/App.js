import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Components/Dashboard'
import Cart from './Components/Dashboard items/Cart';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [login, setLogin]=useState(false);
  const [cart, setCart]=useState([]);

  return (
    <div className="App-storage">
      <Navbar login={login} setLogin={setLogin}></Navbar>
      <Routes>
        <Route path='/' element={<div><Home></Home></div>}></Route>
        <Route path='/About' element={<div><About></About></div>}></Route>
        <Route path='/Contact' element={<div><Contact></Contact></div>}></Route>
        <Route path='/login' element={<div><Login login={login} setLogin={setLogin}></Login></div>}></Route>
        <Route path='/signup' element={<div><Signup></Signup></div>}></Route> 
        <Route path='/Dashboard' element={<div><Dashboard setCart={setCart} cart={cart}></Dashboard></div>}></Route> 
        <Route path='/Cart' element={<div><Cart cart={cart} setCart={setCart}></Cart></div>}></Route>       
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
