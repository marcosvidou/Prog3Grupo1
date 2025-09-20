import React, { Component } from "react";
import "./DetallePelicula.css"


let apikey = "4c973abb945f46e5cccf46b73e8d6135";

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: [], textoFavoritos : ""
        };
    }
    componentDidMount() {
        const id = this.props.id
        console.log(id);
        const contenido = this.props.contenido
        fetch(`https://api.themoviedb.org/3/${contenido}/${id}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pelicula: data 
                });
                console.log(data)
            })
            .catch(error => console.log(error));
            let elementosFavoritos = []
        if(this.props.contenido== "movie"){
            elementosFavoritos = JSON.parse(localStorage.getItem("peliculasFavoritas"))
        }else{
            elementosFavoritos = JSON.parse(localStorage.getItem("seriesFavoritas"))
        }
        let listaNueva = []
        if (elementosFavoritos != null){
            listaNueva = elementosFavoritos
        }
        console.log(listaNueva)
        console.log(this.props.id)
        if(listaNueva.includes(JSON.stringify(this.props.id))){
            this.setState({textoFavoritos: "AGREGAR A FAVORITOS"})
        }else{
            this.setState({textoFavoritos: "SACAR DE FAVORITOS"})
        }
    }
    manejarFavoritos(){
        let elementosFavoritos = []
        if(this.props.contenido== "movie"){
            elementosFavoritos = JSON.parse(localStorage.getItem("peliculasFavoritas"))
        }else{
            elementosFavoritos = JSON.parse(localStorage.getItem("seriesFavoritas"))
        }
        let listaNueva = []
        if (elementosFavoritos != null){
            listaNueva = elementosFavoritos
        }
        if(listaNueva.includes(this.props.id)){
            listaNueva = elementosFavoritos.filter(unId=>{return unId != this.props.id})
            this.setState({textoFavoritos: "AGREGAR A FAVORITOS"})
        }else{
            listaNueva.push(this.props.id)
            this.setState({textoFavoritos: "SACAR DE FAVORITOS"})
        }
        if(this.props.contenido== "movie"){
            localStorage.setItem("peliculasFavoritas", JSON.stringify(listaNueva))
        }else{
            localStorage.setItem("seriesFavoritas", JSON.stringify(listaNueva))
        }
    }
    render() {
        return (
            <article className="card">
                <div className = "card-row">
                    
                    <h4 className="nombrepelicula">{this.props.contenido== "movie" ? this.state.pelicula.title : this.state.pelicula.name}</h4>
                    <div className="valoracion">{this.state.pelicula.vote_average}</div>
                    <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.state.pelicula.poster_path} alt="pelicula"/>
                    <div className="estreno">{this.state.pelicula.release_date}</div>
                    <div className="duracion">{this.state.pelicula.length}</div>
                    <div className="review">{this.state.pelicula.overview}</div>
                    <div className="button" onClick={()=> this.manejarFavoritos()}>{this.state.textoFavoritos}</div>
                </div>
            </article>
        );
    }
}

export default DetallePelicula;