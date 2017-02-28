import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'

import normalize from 'normalize-css'
import style from './app.css'

import Header from '../Header'
import Main from '../Main'

class App extends Component {
	constructor () {
		super()
		this.state = {
			user: {
				photoURL: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				email: 'gianverab@gmail.com',
				fullName: 'Gian Vera',
				onOpenText: false
			}
		}
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
							//Render <Login />
						}
					}} />

					<Match pattern='/profile' render={() => {
						//Render <Profile />
					}} />

					<Match pattern='/profile/:username' render={({ params }) => {
						//Render <Profile /> params.username
					}} />

				</div>
			</HashRouter>
		)
	}
}

export default App
