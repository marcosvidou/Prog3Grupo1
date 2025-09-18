import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";

function DetallePeliculaScreen(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <NavBar />
            <DetallePelicula />
            <Footer />
        </React.Fragment>
    );
}

export default DetallePeliculaScreen;