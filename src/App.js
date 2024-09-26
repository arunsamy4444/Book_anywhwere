import './App.css';
import Navbars from './components/Navbars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Places from './components/Places';
import Booking from './components/Booking';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
     <Navbars setSearchTerm={setSearchTerm} />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Places searchTerm={searchTerm} />} />
      <Route path='/book/:id' element={<Booking />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      </Routes></BrowserRouter>

    </>
  );
}

export default App;
