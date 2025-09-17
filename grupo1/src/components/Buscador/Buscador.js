import React from "react";
import { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: ""
        }
    }

    prevenirRecarga(event){
        event.preventDefault()
        this.props.history.push("/busqueda/" + this.state.busqueda)
    }

    controlarCambios(event){
        this.setState(
            {busqueda: event.target.value          
            })
    }

    render() {
        return (
            <section className="Formulario">
                <div>
                <div className="title">
                <h2>BUSCAR PELICULA</h2>
                </div>
                    <form className="buscador-form" onSubmit={(event) => this.prevenirRecarga(event)}>
                        <input className="buscador-input" onChange={(event) => this.controlarCambios(event)} name="busqueda" value={this.state.busqueda}  />
                        <button className="buscador-btn" type="submit">SEARCH</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Buscador;