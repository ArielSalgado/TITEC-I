import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navbar';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import CrearEvento from './components/pages/CrearEvento';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin/' component={Admin} />
          <Route exact path='/admin/usuarios' component={Users} />
          <Route exact path='/admin/crearEvento' component={CrearEvento} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
