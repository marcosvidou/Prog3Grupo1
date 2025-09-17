import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Series from "../../components/Series/Series";

function SeriesScreen(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <NavBar />
            <Series />
            <Footer />
        </React.Fragment>
    );
}

export default SeriesScreen;