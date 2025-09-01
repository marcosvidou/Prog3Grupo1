import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Error(){
    return(
        <React.Fragment>
            <Navbar />
            <h1>Error404 - No se encontro la pagina</h1>
            <Footer />
        </React.Fragment>
    )
}

export default Error;