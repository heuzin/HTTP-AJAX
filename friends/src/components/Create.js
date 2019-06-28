import React from "react"
import axios from "axios"

class Create extends React.Component {
	constructor() {
		super()
		this.state = {
			name: '',
            age: '',
            email:''
        }
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}

	createItem = (evt) => {
		evt.preventDefault()

		const { name, age, email } = this.state
		const payload = { name, age, email }
		
		axios.post("http://localhost:5000/friends", payload)
			.then((response) => {
				this.setState({
					errorMessage: null
				})

				this.props.updateFriends(response.data)
				this.props.history.push("/friends")
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.response.data.error
				})
			})
	}

	render() {
		const { name, age, email, errorMessage } = this.state

		return (
			<form onSubmit={this.createItem}>
				<h1>Create New Freind</h1>

				<p>{errorMessage}</p>

				<input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />

				<button type="submit">Create</button>
			</form>
		)
	}
}

export default Create