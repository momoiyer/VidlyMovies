import React, { Component } from 'react';
import auth from '../services/authService';

class LogoutForm extends Component {
    state = {} 
    
    componentDidMount() {
        auth.logout();
        window.location = '/';
    }

    render() { 
        return null;
    }
}
 
export default LogoutForm;