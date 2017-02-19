import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor () {
    super()
    this.state = {
			messages: [{
				text: 'Tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 180000
			},
			{
				text: 'An older tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 1800000
			}]
		}
	}
	render () {
		return (
			<MessageList messages={this.state.messages}/>
		)
	}
}

export default Main
