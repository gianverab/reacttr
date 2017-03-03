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
			user: null /* {
				photoURL: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				email: 'gianverab@gmail.com',
				fullName: 'Giancarlo Vera',
				location: 'Buenos Aires, Argentina',
				onOpenText: false
			} */
		}
		this.handleOnAuth = this.handleOnAuth.bind(this)
	}
  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
     .then(result => console.log(`${result.user.email} ha iniciado sesión`))
     .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
  }

  render () {
    return (
			<HashRouter>
				<div>
					<Header />

					<Match exactly pattern='/' render={() => {
						if (this.state.user) {
							return (
								<Main user={this.state.user} />
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
								username={this.state.user.email.split('@')[0]}
								email={this.state.user.email}
								displayName={this.state.user.fullName}
								location={this.state.user.location}
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
