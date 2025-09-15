import React from "react";
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
    <Header />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/favorites" component={Favoritos}/>
    <Route path="/Top-Ranking" component={TopRanking}/>
    <Route path="/Ahora-Reproduciendo" component={AhoraReproduciendo}/>
    <Route path="/detalle/id/:id" component={Detalle}/>
    <Route path="/busqueda/:busqueda" component={SearchResults} />
    <Route path={''} component={NotFound} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
