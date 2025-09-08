import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom"
import "./Buscador.css";

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: ""
        }
    }

    prevenirRecarga(event){
        evento.preventDefault()
        this.props.history.push("/busqueda/" + this.state.busqueda)
    }

    controlarCambios(event){
        this.setState(
            {busqueda: event.target.value          
            })
    }

    render() {
        return (
            <section>
                <div>
                    <form className="" onSubmit={(event) => this.prevenirRecarga(event)}>
                        <input className="" onChange={(event) => this.controlarCambios(event)} name="busqueda" value={this.state.busqueda}  />
                        <button className="" type="submit">Search</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Buscador;