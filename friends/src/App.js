import React from 'react';
import axios from "axios"
import { Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Friends from './components/Friends'
import Create from './components/Create'

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

	updateFriends = (friends) => {
		this.setState({ friends })
	}

	render() {
		const { friends } = this.state
		
		return (
			<div className="App">
				<nav>
					<div className='nav-links'>
						<Link to="/">Home</Link>
						<Link to="/friends">Friends</Link>
						<Link to="/new">New</Link>
					</div>
				</nav>

				<Route path="/" exact render={(props) => <Home {...props} friends={friends} />} />
				<Route path="/friends" exact render={(props) => <Friends {...props} friends={friends} />} />
				<Route path="/new" exact render={(props) => <Create {...props} updateFriends={this.updateFriends} />} />
			</div>
		)
	}
}

export default App;
