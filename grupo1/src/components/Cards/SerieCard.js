import { Component } from "react";
import { Link } from "react-router-dom";
import './PeliculaCard.css'

class SerieInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            viewDescription: false, textoFavoritos: ""
        }
    }
    componentDidMount(){
      let elementosFavoritos = []
          elementosFavoritos = JSON.parse(localStorage.getItem("seriesFavoritas"))
      let listaNueva = []
      if (elementosFavoritos != null){
          listaNueva = elementosFavoritos
      }
      console.log(listaNueva)
      console.log(this.props.peliculas.id)
      if(listaNueva.includes((this.props.peliculas.id))){
          this.setState({textoFavoritos: "SACAR DE FAVORITOS"})
      }else{
          this.setState({textoFavoritos: "AGREGAR A FAVORITOS"})
      }
    }
    clickViewDescription(){
        this.setState({viewDescription: !this.state.viewDescription})
    }
    manejarFavoritos(){
      let elementosFavoritos = []
      elementosFavoritos = JSON.parse(localStorage.getItem("seriesFavoritas"))
      let listaNueva = []
      if (elementosFavoritos != null){
          listaNueva = elementosFavoritos
      }
      console.log(listaNueva)
      if(listaNueva.includes(this.props.peliculas.id)){
          listaNueva = elementosFavoritos.filter(unId=>{return unId != this.props.peliculas.id})
          this.setState({textoFavoritos: "AGREGAR A FAVORITOS"})
      }else{ 
        console.log("Agrego a Favoritoss")
          listaNueva.push(this.props.peliculas.id)
          this.setState({textoFavoritos: "SACAR DE FAVORITOS"})
      }
      localStorage.setItem("seriesFavoritas", JSON.stringify(listaNueva))
  }
  render() {
    const { peliculas } = this.props;
    if (!peliculas) {
      return(
        <div className="loader"></div>
      )
    }
    const { id, name, poster_path, overview, vote_average } = peliculas;
    return (
        <article className="info">
        <h3 className="tituloProd">{name}</h3>
        <h3 className="Valuada">{vote_average}</h3>
        <img className="foto" src={ 'https://image.tmdb.org/t/p/w342' + poster_path} alt="foto" />
        {<button className="boton" onClick={() => this.clickViewDescription()}>{this.state.viewDescription ? "Ocultar descripcion": "Ver descripcion"}</button>}
        <p className={`description ${this.state.viewDescription ? "show" : "hide"}`}>{overview}</p>
        <button className="boton"><Link className="detalle" to={`/DetallePelicula/tv/${id}`}>Ir a detalle</Link></button>
        {/* <Favoritos id={id} borrarDeFavoritos={this.props.borrarDeFavoritos}/> */}
        <button className="button" onClick={()=> this.manejarFavoritos()}>{this.state.textoFavoritos}</button>
        </article>    
    );
  }
}

export default SerieInfo;