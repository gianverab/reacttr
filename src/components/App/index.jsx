import React, { Component } from 'react'
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
			<div>
				<Header />
				<Main user={this.state.user}/>
			</div>
		)
	}
}

export default App
