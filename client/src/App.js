import React from 'react'
import Navbar from './components/NAVBAR/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from './components/NEWS/News';
import Authors from './components/AUTHORS/Authors';
import Categories from './components/CATEGORIES/Categories';
import Signin from './components/SIGNIN/Signin';
import Lkuser from './components/LKUSER/Lkuser';
import Lkadmin from './components/LKADMIN/Lkadmin';



function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route exact path="/authors">
          <Authors />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/lk/user">
          <Lkuser />
        </Route>
        <Route exact path="/lk/admin">
          <Lkadmin />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
