import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../Redux/Actions/CityActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Estilos/Paises.css';

class Cities extends Component {
	//Redux
	static propTypes = {
		getItems: PropTypes.func.isRequired,
		cities: PropTypes.object.isRequired,
	};
	componentDidMount() {
		this.props.getItems();
	}
	//Filtro
	constructor() {
		super();
		this.state = {
			search:''
		};
	}
	updateSearch(event){
		this.setState({search:event.target.value})
	}
	//Front
	render() {
		const { cities } = this.props.cities;
		let filteredCity = cities.filter(
			(city)=>{
				return city.ciudad.toLowerCase().indexOf(this.state.search)===0;
			}
		)
		return (
			<div className="container">
				<div className="row">
				<Navbar/>		
				<div className="divfiltro">
				<input type="text" className="filtro"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}>
					</input>
				</div>
				<div className="divlistaciudades">
				<ul className="ulciudades">
				{filteredCity.map(ciudad => {
					let rutaciudad = '/Paises/' + ciudad.ciudad;
					
					return (
						<Link to={rutaciudad} key={ciudad._id}>
						<div className="divciudades">
						<li className="liciudades">
						<button
						className="botonciudades"
						style={{backgroundImage: `url(${ciudad.img})`, backgroundPosition:"center"}}>
						<p className="textoboton">-{ciudad.ciudad}--{ciudad.pais}-</p>
						</button>
						</li>
						</div>
						</Link>
						);
				})}
				</ul>
				</div>
				</div>
			</div>
		);
	}
}
//final del redux
const mapSateToProps = state => ({
	cities: state.item,
});

export default connect(mapSateToProps, { getItems })(Cities);
