import React from "react";
import Logoprincipal from '../Components/Logoprincipal';
import Navbar from '../Components/Navbar';
import Botonconflecha from '../Components/Buttonconflecha';
import BotonHome from '../Components/ButoonHome';
function Home() {
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <Logoprincipal/>
        <Botonconflecha/>
        <BotonHome/>
      </div>
    </div>
  )
}
export default Home;
