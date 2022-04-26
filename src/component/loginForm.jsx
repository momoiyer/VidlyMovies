import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import auth from '../services/authService.js';
import Joi from "joi-browser";
import Form from './common/form.jsx';

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = async () => {        
        try {
            const { username, password } = this.state.data;
            await auth.login(username, password);

            const { state } = this.props.location;            
            window.location = state? state.from.pathname : '/';
            toast.success("Successful login.");
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                toast.error(ex.response.data);
            }
        }
    }

    render() { 
        if (auth.getCurrentUser()) return <Redirect to="/" />;
        
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username","Username")}      
                    {this.renderInput("password","Password","password")}   
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default LoginForm;