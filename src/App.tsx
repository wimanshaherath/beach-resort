import React from 'react';
import {BrowserRouter,Route,Switch,useLocation,useParams} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";
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
        {/* <TransitionGroup>
        <CSSTransition key={location.key} className="fade" timeout={300}> */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          {/* <Route exact path="/pages" component={Singlepage}/> */}
          <Route component={Error}/>
        </Switch>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </BrowserRouter>
     
      
    </>
  );
}

export default App;
