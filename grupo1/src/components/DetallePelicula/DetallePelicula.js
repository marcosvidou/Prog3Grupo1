import React, { Component } from "react";
import "./DetallePelicula.css"


let apikey = "4c973abb945f46e5cccf46b73e8d6135";

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id);
        const contenido = this.props.match.params.contenido
        fetch(`https://api.themoviedb.org/3/${contenido}/${id}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                this.setState({

                    pelicula: data 
                });
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <article className="card">
                <div className = "card-row">
                    
                    <h4 className="nombrepelicula">{this.props.match.params.contenido== "movie" ? this.state.pelicula.title : this.state.pelicula.name}</h4>
                    <div className="valoracion">{this.state.pelicula.vote_average}</div>
                    <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.state.pelicula.poster_path} alt="pelicula"/>
                    <div className="estreno">{this.state.pelicula.release_date}</div>
                    <div className="duracion">{this.state.pelicula.length}</div>
                    <div className="review">{this.state.pelicula.overview}</div>
{/*                     {this.state.pelicula.genres.map((genre) => (<div className="genero">{genre.name}</div> ))}
 */}

                </div>
            </article>
        );
    }
}

export default DetallePelicula;