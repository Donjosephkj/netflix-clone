import React from 'react';
import "./App.css"
import {action, orginals } from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <Banner />
    <RowPost  url={orginals} title='Netflix Orginals'/>
    <RowPost  url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
