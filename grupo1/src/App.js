import React from "react";
// import Navbar from './components/Navbar/Navbar'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom"

import Home from "./screens/Home/Home";
import NotFound from "./screens/Error/Not-Found";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import TopRanking from "./components/TopRanking/TopRanking";


function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}/>
    {/* <Route path="/favorites" component={Favoritos}/>
    /* <Route path="/peliculas" component={Peliculas}/>
    /* <Route path="/series" component={Series}/>
    <Route path="/de:id" talle/id/component={Detalle}/>
    <Route path="/busqueda/:busqueda" component={SearchResults} /> */}
    <Route exact path="/DetallePelicula/:id" component={DetallePelicula} />
    <Route path="/Top-Ranking" component={TopRanking}/>
    <Route path={''} component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
