import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Homebutton from '../Components/ButoonHome';
class CreateUsser extends Component{
	constructor(props) {
		super(props);
		this.state = {
			Usuario:[]
		};
	
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }
	
	  handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	  }
	  
	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/Usuario');
		this.setState({ itinerario: res.data.Respuesta });
	}
	render(){
	return(
		<div>
		<Navbar/>
		<form>
			<label for="name">Name
			<input type="text" name="name" id="name"/>
			</label><br/>
			
			<label for="secondname">Second name
			<input type="text" name="secondname" id="secondname"/>
			</label><br/>

			<label for="username">User Name
			<input type="text" name="username" id="username"/>
			</label><br/>

			<label for="password">Password
			<input type="password" name="password" id="password"/>
			</label><br/>

			<label for="profileimage">Profile Image
			<input type="text" name="profileimage" id="profileimage"/>
			</label><br/>
			
			<input type="submit" value="submit"/>
		</form>
		<Homebutton/>
		</div>
	)
	}
}

export default CreateUsser