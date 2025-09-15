import React from 'react';
import { Component } from 'react';
import "./Filtro.css"

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valorFiltro: ""
        }
    }

    processSubmit(event) {
        event.preventDefault();
    }

    processValue(event) {
        this.setState({ valorFiltro: event.target.value }, () => this.props.filtro(this.state.valorFiltro))
    }

    render() {
        return (
            <>
            <h2>Buscar peliculas</h2>
            <form onSubmit={(event) => this.processSubmit(event)} className="submit">
                <input
                    onChange={(event) => this.processValue(event)}
                    value={this.state.valorFiltro}
                    className="input"
                    placeholder="Buscar película..."
                />
            </form>
            </>
        )
    }

}
export default Filtro;