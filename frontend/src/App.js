import { useDispatch } from 'react-redux';
import Main from './components/Main';
import React, { useEffect } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import Login from './components/Login';
import Signup from './components/Signup';
import { getCheckSagaAC } from './redux/user/actions.js';
import Navbar from './components/NavBar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCheckSagaAC());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/auth/signup' component={Signup} />
        <Route path='/auth/login' component={Login} />
        <Route path='/todo' component={Main} />
        <Route path='/' component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
