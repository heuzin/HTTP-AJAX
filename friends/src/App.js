import React from 'react';
import axios from "axios"

import './App.css';

class App extends React.Component {
	state = {
		friends: []
	}

	componentDidMount() {
		axios.get('http://localhost:5000/friends')
			.then(response => {
        console.log(response.data)
				this.setState({
					friends: response.data
				})
			})
			.catch(err => {
				console.log('Error:', err)
			})
	}

	render() {
		const { items } = this.state
		
		return (
			<div className="App">
        <p>friends</p>
			</div>
		)
	}
}

export default App;
