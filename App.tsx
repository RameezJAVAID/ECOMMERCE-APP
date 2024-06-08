import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar';
import AppRouter from './config/router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
