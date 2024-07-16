
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import './App.css'

function App() {

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <h1>Escape Room Paco Pico</h1>
      <p className="read-the-docs">
        Abre la barra de navegación para seguir adelante
      </p>
    </Router>
  )
}

export default App
