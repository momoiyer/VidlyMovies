import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './component/navbar.jsx';
import Customers from './component/customers.jsx';
import NotFound from './component/notFound.jsx';
import Movies from './component/movies.jsx';
import Rentals from './component/rentals.jsx';
import MovieForm from './component/movieForm.jsx';
import LoginForm from './component/loginForm';
import RegisterForm from './component/registerForm';
import LogoutForm from './component/logoutForm.jsx';
import auth from './services/authService.js';
import ProtectedRoute from './component/common/protectedRout';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component{  
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer/>
      <NavBar user={user} />
        <main className='container'>
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={LogoutForm} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/movies/new" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies" />                            
            <Redirect to="/not-found"/>                  
          </Switch>                
        </main>
    </React.Fragment>
    );
  }
}

export default App;
