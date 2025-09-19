import React from "react";
import { Component } from "react";
import { apikey } from "../../apikey";
import PeliculasInfo from "../../components/Cards/PeliculaCard";
import SerieInfo from "../../components/Cards/SerieCard";


class BuscadorScreen extends  Component{
    constructor(props){
        super(props);
        this.state = { pelis : [], cargando: true}
    }
    componentDidMount(){
        console.log(this.props)
        let url = `https://api.themoviedb.org/3/search/${this.props.match.params.contenido}?api_key=${apikey}&query=${this.props.match.params.busqueda}`
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            this.setState({
                pelis: data.results, cargando : false
            })
            console.log(data)
        })
        .catch(error => console.log(error))
    }
    render() {
        return( 
            <>
            {this.state.cargando ? <p>Cargando...</p> : 
            <section>
            {this.state.pelis.map((pelis, idx) => (
                this.props.match.params.contenido == "movie" ? <PeliculasInfo key={idx} peliculas={pelis} /> : <SerieInfo key={idx} peliculas={pelis} />
            ))}
            </section>
            }
            </>
        )
    }
}
export default BuscadorScreen;