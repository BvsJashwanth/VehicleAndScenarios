import React from 'react';
import './App.css';
import AddScenarioForm from './components/AddScenarioForm';
import AddVehiclesForm from './components/AddVehiclesForm';
import AllScenarios from './components/AllScenarios';
import Home from './components/Home';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
toast.configure();

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/addscenario' element={<AddScenarioForm/>} />
            <Route path='/allscenarios' element={<AllScenarios/>} />
            <Route path='/addvehiclesform' element={<AddVehiclesForm/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
