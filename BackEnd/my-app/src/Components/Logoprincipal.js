import React from 'react';
import Logoprincipal from '../Img/myitinerarylogo.png'
import '../Estilos/Logo.css';

function Header(){
    return(
        <div className="logodiv">
        <center><img src={Logoprincipal} className="imglogo" alt="logo" /></center>
        <p className="refran">Find your perfect trip, designed by insiders who know and love their cities</p>
        </div>
    ) 
}

export default Header