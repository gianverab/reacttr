import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import firebase from 'firebase'
import normalize from 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component {
	constructor () {
		super()
		this.state = {
			user: null
		}
		this.handleOnAuth = this.handleOnAuth.bind(this)
		this.handleLogout = this.handleLogout.bind(this)
	}

  componentWillMount () {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user })
				console.log(user)
			} else {
				this.setState({ user: null})
			}
		})
	}
  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
     .then(result => console.log(`${result.user.email} ha iniciado sesión`))
     .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
  }
	handleLogout () {
		firebase.auth().signOut()
			.then(() => console.log('Te has desconectado correctamente'))
			.catch(() => console.log('Ha ocurrido un error'))
	}

  render () {
    return (
			<HashRouter>
				<div>
					<Header />

					<Match exactly pattern='/' render={() => {
						if (this.state.user) {
							return (
								<Main user={this.state.user}
											onLogout={this.handleLogout}
								/>
							)
						} else {
							return (
								<Login
									onAuth={this.handleOnAuth}
								/>
							)
						}
					}} />

					<Match pattern='/profile' render={() => (
							<Profile
								picture={this.state.user.photoURL}
								username={this.state.user.displayName.split(' ')[0]}
								email={this.state.user.email}
								displayName={this.state.user.displayName}
							/>
						)
					} />

					<Match pattern='/user/:username' render={({ params }) => (
						<Profile
							picture={params.avatar}
							username={params.username}
							displayName={params.username}
						/>
					)} />

				</div>
			</HashRouter>
		)
	}
}

export default App
