import React from 'react';
import Navbar from './Nav'
import './App.css';
import Qdata from './Qdata'
import Error from './Error'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
  	<>
    <div className="Contents">
     <Navbar />
     <Switch>
      <Route exact path="/" component={Qdata} />
      <Route component={Error} />
      </Switch>
    </div>
    </>
  );
}

export default App;
