import React, { Component } from 'react';
import axios from 'axios';

class Itinerary extends Component {
	constructor() {
		super();
		this.state = {
			itinerario: []
		};
	}

	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/itinerary');
		this.setState({ itinerario: res.data.Respuesta });
	}
	render() {
		let itinerario = this.state.itinerario;
		let ciudad = this.props.match.params.ciudad;
		const ciudadfilt = itinerario.filter(x => x.ciudad === ciudad);
		const cantitinerary = ciudadfilt.length;
	if(cantitinerary==0){ return <h3>no hay nada</h3>} //meter un loading y qeu despues muestre lo que hay
		else{ return (
			<div>
				<ul>
					{itinerario.map(partofitinerary => {
						return (
							<li key={partofitinerary._id}>						
										<h4>{partofitinerary.ciudad}</h4>
							</li>
				);
				})}
				</ul>
			</div>)}
		}
	}
export default Itinerary