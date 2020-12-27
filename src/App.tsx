import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singlepage from './pages/singlepage';
import Error from './pages/Error';
import Header from './compnents/header';

const App =() => {
  // let location=useLocation();
  return (
    <>

      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={Singlepage}/>
        <Route component={Error}/>
      </Switch>
       

     
      
    </>
  );
}

export default App;
