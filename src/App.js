import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Pages

import Home from './components/home/home';

// subComponents

import Navbar from './components/subcomponents/navbar/navbar';
import Footer from './components/subcomponents/footer/footer';

function App() {
  return (
    <div className="App">

      <div className="App-content">

        <Navbar />

        {/* WD Router */}
        <Router>

          {/* WD Switch */}

          <Switch>

            {/* WD Route to Home Page */}

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>

          {/* End Switch */}

        </Router>


        {/* End Router */}

        <Footer />

      </div>
    </div>
  );
}

export default App;
