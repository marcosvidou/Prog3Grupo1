import React from "react";
import { Component } from "react";
import "./TopRanking.css";
import PeliculasInfo from "../Cards/PeliculaCard";
import { apikey } from "../../apikey";

class TopRanking extends  Component{
    constructor(props){
        super(props);
        this.state = {
            pelis: [], page: 2 , peliculasFiltradas: [], textoInput : ""}
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
        .then(response => response.json())
        .then(data => this.setState({
            pelis: this.props.filtro ? data.results.slice(0,5) : data.results
        }))
        .catch(error => console.log(error))
    }
    cargarmas(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${this.state.page}&api_key=${apikey}`)
        .then(response => response.json())
        .then(data => this.setState({
            pelis: this.state.pelis.concat(data.results), page: this.state.page +1
        }))
        .catch(error => console.log(error))
    }
    filtrar(e){
        console.log(e)
        let texto = e.target.value
        let peliculasFiltradas = this.state.pelis.filter(peli => { 
            return peli.title.toLowerCase().includes(texto.toLowerCase())
        })
        console.log(peliculasFiltradas)
        this.setState({peliculasFiltradas : peliculasFiltradas, textoInput : texto})
    }
    render() {
        return( 
            <>
            <input placeholder="filtrarPeliculas" onChange={(e)=> this.filtrar(e)}/>
            <section>
                {this.state.textoInput.length==0 ?
                this.state.pelis.map((pelis, idx) => (
                    <PeliculasInfo key={idx} peliculas={pelis} />
                )) : this.state.peliculasFiltradas.map((pelis, idx) => (
                    <PeliculasInfo key={idx} peliculas={pelis} />
                ))
            }
            </section>
            {this.props.filtro ? null : <button onClick={()=>this.cargarmas()} className="">CARGAR MAS</button>}
            </>
        )
    }
}
export default TopRanking;