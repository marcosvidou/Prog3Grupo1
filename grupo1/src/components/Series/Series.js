import React from "react";
import { Component } from "react";
//import PeliculasInfo from "../Cards/PeliculaCard";
import { apikey } from "../../apikey";
import SerieInfo from "../Cards/SerieCard";

class Series extends  Component{
    constructor(props){
        super(props);
        this.state = {
            pelis: [], filtro: []}
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + apikey)
        .then(response => response.json())
        .then(data => this.setState({
            pelis: data,
            filtro: data.results
        }))
        .catch(error => console.log(error))
    }
    render() {
        return (
            <section className="container">
                {this.state.filtro.map((pelis, idx) => (
                    <SerieInfo key={idx} peliculas={pelis} />
                ))}
            </section>
        );
    }
}
export default Series;