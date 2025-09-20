import React from "react";
import AhoraReproduciendo from "../../components/AhoraReproduciendo/AhoraReproduciendo";

function SeriesScreen(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            
            <AhoraReproduciendo filtro={false}/>
            
        </React.Fragment>
    );
}

export default SeriesScreen;