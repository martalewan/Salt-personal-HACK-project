import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Welcome from './components/Welcome/Welcome';
import Motivation from './components/Motivation/Motivation';

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <section className="App">
      <main className='main-wrapper'>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/motivation" element={<Motivation />} />
        </Routes>
      </main>
    </section>
  </BrowserRouter> 

);

export default App;
