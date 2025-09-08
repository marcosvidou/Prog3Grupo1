import {Link} from "react-router-dom"
import "./NavBar.css"
function NavBar() {
    return (
       <ul className="ul">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/Top-Ranking">Mejor Valoración</Link></li>
        <li><Link className="link" to="/Ahora-Reproduciendo">Peliculas en cartel</Link></li>
        <li><Link className="link" to="/favorites">Favoritos</Link></li>
       </ul>
        
    );
  }
  
export default NavBar;