import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom"
import Buscador from "../../components/Buscador/Buscador";
import TopRanking from "../../components/TopRanking/TopRanking";
import AhoraReproduciendo from "../../components/AhoraReproduciendo/AhoraReproduciendo";
import "./Home.css"

class Home extends Component{
    render(){
      return(
        <React.Fragment>
          <main>
            <Buscador history={this.props.history}/>
            <div className="Contenedor">
              <h2 className="">PELICULAS CON VALORACION MAS ALTA</h2>
                <h3><Link className="Vertodas" to="/Top-Ranking">VER TODAS</Link></h3>
            </div>
            <TopRanking />
            <div className="Contenedor">
              <h2 className="">PELICULAS EN CARTEL</h2>
              <h3><Link className="Vertodas" to="/Ahora-Reproduciendo">VER TODAS</Link></h3>
            </div>
            <AhoraReproduciendo/>
        </main>
    </React.Fragment>
      )
    }
  }
export default Home;