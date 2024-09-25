import React from 'react';
import './App.css';
import Entete from './components/header/Entete';
import Home from './components/header/home/Home';
import About from './components/header/about/About';
import Skills from './components/header/skills/Skills';
import Services from './components/header/services/Services';
import Qualifications from './components/header/qualifications/Qualifications';
import Contacts from './components/header/contact/Contacts';

function App() {
  return (
    <div className="App">
     <>
     <Entete/>
    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualifications/>
    <Contacts/>
    </main>
     </>
    </div>
  );
}

export default App;
