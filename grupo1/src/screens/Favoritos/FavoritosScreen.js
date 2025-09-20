import { Component } from "react";
import { apikey } from "../../apikey";
import PeliculasInfo from "../../components/Cards/PeliculaCard";
import SerieInfo from "../../components/Cards/SerieCard";

class FavoritosScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            peliculasFavoritas: [], seriesFavoritas: [], contadorPeliculas: 0, idsPeliculas: [], contadorSeries : 0, idsSeries : []
        }
}
    componentDidMount(){
        let peliculasFavoritas = JSON.parse(localStorage.getItem("peliculasFavoritas")) 
        this.setState({idsPeliculas : peliculasFavoritas})
        let seriesFavoritas = JSON.parse(localStorage.getItem("seriesFavoritas"))
        this.setState({idsSeries : seriesFavoritas})
        peliculasFavoritas.map(unId => {
            fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let nuevaLista = this.state.peliculasFavoritas
                nuevaLista.push(data)
                this.setState({
                    contadorPeliculas : this.state.contadorPeliculas +1,
                    peliculasFavoritas: nuevaLista 
                });
                
            })
            .catch(error => console.log(error));
        })
        seriesFavoritas.map(unId => {
            fetch(`https://api.themoviedb.org/3/tv/${unId}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                let nuevaLista = this.state.seriesFavoritas
                nuevaLista.push(data)
                this.setState({
                    contadorSeries : this.state.contadorSeries +1,
                    seriesFavoritas: nuevaLista
                });
                console.log(data)
            })
            .catch(error => console.log(error));
        })
    }
    render(){
        return(
            <>
            <h2 className="">PELICULAS FAVORITAS</h2>
            <section className="container">
                {this.state.contadorPeliculas == this.state.idsPeliculas.length ? this.state.contadorPeliculas==0 ? <p>NO HAY PELICULAS FAVORITAS</p> : this.state.peliculasFavoritas.map((pelis, idx) => (
                    <PeliculasInfo key={idx} peliculas={pelis} />
                )) : <p>Cargando...</p>
            }
            </section>
            <h2 className="">SERIES FAVORITAS</h2>
            <section className="container">
                {this.state.contadorSeries == this.state.idsSeries.length ? this.state.contadorSeries==0 ? <p>NO HAY SERIES FAVORITAS</p> : this.state.seriesFavoritas.map((pelis, idx) => (
                    <SerieInfo key={idx} peliculas={pelis} />
                )) : <p>Cargando...</p>
                } 
            </section>
            </>
        )
    }
}

export default FavoritosScreen