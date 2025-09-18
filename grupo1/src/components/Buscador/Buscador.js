import React from "react";
import { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: "", tipo: ""
        }
    }
    prevenirRecarga(event){
        event.preventDefault()
        this.props.history.push("/busqueda/" + this.state.busqueda + "/" + this.state.tipo)
    }
    controlarCambios(event){
        this.setState(
            {busqueda: event.target.value          
            })
    }
    controlarTipo(event){
        this.setState(
            {tipo: event.target.value          
            })
    }
    render() {
        return (
            <section className="Formulario">
                <div>
                <div className="title">
                <h2>BUSCAR PELICULA O SERIE</h2>
                </div>
                    <form className="buscador-form" onSubmit={(event) => this.prevenirRecarga(event)}>
                        <input className="buscador-input" onChange={(event) => this.controlarCambios(event)} name="busqueda" value={this.state.busqueda}  />
                        <label>pelicula</label>
                        <input type="radio" name="tipo" value="movie" onChange={(e)=> this.controlarTipo(e)} />
                        <label>serie</label>
                        <input type="radio" name="tipo" value="tv" onChange={(e)=> this.controlarTipo(e)}/>
                        <button className="buscador-btn" type="submit">SEARCH</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Buscador;