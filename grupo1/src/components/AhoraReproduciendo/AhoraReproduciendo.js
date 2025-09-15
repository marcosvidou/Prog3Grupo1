import React from "react";
import { Component } from "react";
import "./SeccionNowPlaying.css";
import DataPeliculas from "../Peliculas/Peliculas";
import { apikey } from "../../apikey";

class PeliculasEnCartel extends  Component{
    constructor(props){
        super(props);
        this.state = {
            pelis: [], filtro: [] }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apikey)
        .then(response => response.json())
        .then(data => this.setState({
            pelis: data,
            filtro: data.results.slice(0,5)
        }))
        .catch(error => console.log(error))
    }
    render(){
        return(
            <section>
                {this.state.filtro.map((pelis, idx) => (
                    <DataPeliculas key={idx} peliculas={pelis} />
                ))}
            </section>
        )
    }
}
export default PeliculasEnCartel;