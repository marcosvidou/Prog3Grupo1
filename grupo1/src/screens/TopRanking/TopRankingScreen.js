import React from "react";
import TopRanking from "../../components/TopRanking/TopRanking";

function TopRankingScreen(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            < TopRanking filtro={false} />
        </React.Fragment>
    );
}

export default TopRankingScreen;