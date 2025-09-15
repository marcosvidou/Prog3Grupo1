import { Component } from "react";
import { Link } from "react-router-dom";
import './PeliculaCard.css'
// import Favoritos from "../Favoritos/Favoritos";


class PeliculasInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            viewDescription: false
        }
    }

    clickViewDescription(){
        this.setState({viewDescription: !this.state.viewDescription})
    }

  render() {
    const { peliculas } = this.props;

    if (!peliculas) {
      return(
        <div className="loader"></div>
      )
    }

    const { id, title, poster_path, overview, vote_average } = peliculas;

    return (
      <article className="info">
        <h3 className="tituloProd">{title}</h3>
        <h3 className="Valuada">{vote_average}</h3>
        <img className="foto" src={ 'https://image.tmdb.org/t/p/w342' + poster_path} alt="foto" />
        {<button className="boton" onClick={() => this.clickViewDescription()}>{this.state.viewDescription ? "Ocultar descripcion": "Ver descripcion"}</button>}
        <p className={`description ${this.state.viewDescription ? "show" : "hide"}`}>{overview}</p>
        <button className="boton"><Link className="detalle" to={`/DetallePelicula/${id}`}>Ir a detalle</Link></button>
        {/* <Favoritos id={id} borrarDeFavoritos={this.props.borrarDeFavoritos}/> */}
      </article>    
    );
  }
}

export default PeliculasInfo;