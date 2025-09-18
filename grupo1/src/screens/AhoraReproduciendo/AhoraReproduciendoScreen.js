import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AhoraReproduciendo from "../../components/AhoraReproduciendo/AhoraReproduciendo";

function SeriesScreen(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <NavBar />
            <AhoraReproduciendo />
            <Footer />
        </React.Fragment>
    );
}

export default SeriesScreen;