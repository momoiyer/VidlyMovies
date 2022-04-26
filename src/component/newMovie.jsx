import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService.js';
import * as Movies  from "../services/fakeMovieService.js";

class NewMovie extends Form {
    state = {
        data: { title: '', genre: '', numberInStock: '', dailyRentalRate: '' },
        genres: [],
        errors: {}
    };

    componentDidMount() {
      const genres = [{_id: "", name: ' ' }, ...getGenres()];
      this.setState({ genres});
    }

    schema = {
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Rate')
    };

    doSubmit = () => {        
        //server call
        console.log("Current Data", this.state.data);
        const newMovie = Movies.saveMovie(this.state.data);        
        console.log("Submitted", newMovie);
        this.props.history.push("/movies");
    }

    render() { 
        return (
            <div>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}   
                    {this.renderSelect(this.state.genres,"genre","Genre")}
                    {this.renderInput("numberInStock","Number in Stock","number")}      
                    {this.renderInput("dailyRentalRate","Rate","number")}   
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default NewMovie;