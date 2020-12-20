import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Singlepage from './pages/singlepage';
import Error from './pages/Error';
import Header from './compnents/header';

const App =() => {
  // let location=useLocation();
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          {/* <Route exact path="/pages" component={Singlepage}/> */}
          <Route component={Error}/>
        </Switch>
       
      </BrowserRouter>
     
      
    </>
  );
}

export default App;
