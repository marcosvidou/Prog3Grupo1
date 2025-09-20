import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home";
import NotFound from "./screens/Error/Not-Found";
import DetallePelicula from "./screens/Detalle/DetallePeliculaScreen";
import TopRanking from "./screens/TopRanking/TopRankingScreen";
import Series from "./components/Series/Series"
import AhoraReproduciendo from "./screens/AhoraReproduciendoScreen/AhoraReproduciendoScreen";
import BuscadorScreen from "./screens/BuscadorScreen/BuscadorScreen"
import FavoritosScreen from "./screens/Favoritos/FavoritosScreen"


function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/DetallePelicula/:contenido/:id" component={DetallePelicula} />
    <Route exact path="/Ahora-Reproduciendo" component={AhoraReproduciendo}/>
    <Route exact path="/Top-Ranking" component={TopRanking}/>
    <Route exact path="/busqueda/:busqueda/:contenido" component={BuscadorScreen} />
    <Route exact path="/series" component={Series}/>
    <Route exact path="/favorites" component={FavoritosScreen} />
    <Route path={''} component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
