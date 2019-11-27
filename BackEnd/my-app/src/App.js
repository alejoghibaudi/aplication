import React from 'react';
import './Estilos/Nav.css';
import './Estilos/Logo.css';
import './Estilos/Botones.css';
import './Estilos/Paises.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Paises from './Pages/Paises';
import Itinerary from './Pages/Itinerary';

function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className='row'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/Home' component={Home} />
						<Route path='/Login' component={Login} />
						<Route exact path='/Create' render={() => <Create />} />
						<Route exact path='/Paises' render={() => <Paises />} />
						<Route exact path='/Paises/:ciudad' component={Itinerary} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
