import React from "react";
import '../Estilos/Nav.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/Paises"><span className="segundo"><i className="icon glyphicon glyphicon-globe"></i></span>Ciudades</Link></li>
          <li><Link to="/"><span className="primero"><i className="icon glyphicon glyphicon-user"></i></span>Start</Link>
          <ul>
            <li><Link to="/">Log In</Link></li>
            <li><Link to="/Create">New Usser</Link></li>
          </ul>
          </li>
          <li><Link to="/Option 2"><span className="tercero"><i className="icon glyphicon glyphicon-plane"></i></span>Option 2</Link></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
