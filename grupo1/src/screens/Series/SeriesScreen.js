import React from "react";
import Series from "../../components/Series/Series";

function SeriesScreen(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Series />
        </React.Fragment>
    );
}

export default SeriesScreen;