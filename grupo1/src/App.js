import React from "react";
// import Navbar from './components/Navbar/Navbar'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom"

import Home from "./screens/Home/Home";
import NotFound from "./screens/Error/Not-Found";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import TopRanking from "./screens/TopRanking/TopRankingScreen";
import Series from "./components/Series/Series"
import AhoraReproduciendo from "./screens/AhoraReproduciendoScreen/AhoraReproduciendoScreen";
//import Buscador from "./components/Buscador/Buscador"
import BuscadorScreen from "./screens/BuscadorScreen/BuscadorScreen"


function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}/>
    {/* <Route path="/favorites" component={Favoritos}/>*/}
    <Route exact path="/DetallePelicula/:contenido/:id" component={DetallePelicula} />
    <Route exact path="/Ahora-Reproduciendo" component={AhoraReproduciendo}/>
    <Route exact path="/Top-Ranking" component={TopRanking}/>
    <Route exact path="/busqueda/:busqueda/:contenido" component={BuscadorScreen} />
    <Route exact path="/series" component={Series}/>
    <Route path={''} component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
