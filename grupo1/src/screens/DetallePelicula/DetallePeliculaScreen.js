import React from "react";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";

function DetallePeliculaScreen(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <DetallePelicula />
        </React.Fragment>
    );
}

export default DetallePeliculaScreen;