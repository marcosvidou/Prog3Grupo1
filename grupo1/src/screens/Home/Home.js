import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom"
import Buscador from "../components/Buscador/Buscador"
import SeccionTopRated from "../components/TopRanking/TopRanking";
import SeccionNowPlaying from "../components/ReproduciendoAhora/ReproduciendoAhora";

class Home extends Component{
    render(){
      return(
        <React.Fragment>
          <main>
            <h2 className="">Buscar pelicula</h2>
            <Buscador history={this.props.history}/>
            <div className="">
              <h2 className="">Peliculas con valoracion más alta</h2>
                <h3><Link className="" to="/Top-Ranking">Ver todas</Link></h3>
            </div>
            <TopRanking />
            <div className="">
              <h2 className="">Peliculas en cartel</h2>
              <h3><Link className="" to="/Ahora-Reproduciendo">Ver todas</Link></h3>
            </div>
            <ReproduciendoAhora />
        </main>
    </React.Fragment>
      )
    }
  }
export default Home;