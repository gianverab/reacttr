import React, { Component } from 'react'
import uuID from 'uuid'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

class Main extends Component {
  constructor () {
    super()
    this.state = {
			openText: false,
      thankyouText: false,
			messages: [{
        id: uuID.v4(),
				text: 'Tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 180000
			},
			{
        id: uuID.v4(),
				text: 'An older tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 1800000
			}]
		}
	}
	handleOpenText (event) {
		event.preventDefault()
		this.setState({ openText: true })
	}
  handleCloseText (event) {
		event.preventDefault()
		this.setState({ openText: false })
    this.setState({ thankyouText: false })
	}
  handleSendText (event) {
		event.preventDefault()
    this.setState({ openText: false })
    this.setState({ thankyouText: true })
	}
  renderThankyou () {
		if (this.state.thankyouText) {
			return (
        <div>
          <p>Thank you for your message!</p>
        </div>
      )
		}
	}
	renderOpenText () {
		if (this.state.openText) {
			return <InputText
               onCloseText={this.handleCloseText.bind(this)}
               onSendText={this.handleSendText.bind(this)}
             />
		}
	}
	render () {
		return (
			<div>
				<ProfileBar
					picture={this.props.user.photoURL}
					username={this.props.user.email.split('@')[0]}
					onOpenText={this.handleOpenText.bind(this)}
				/>
				{this.renderOpenText()}
        {this.renderThankyou()}
				<MessageList messages={this.state.messages} />
			</div>
		)
	}
}

export default Main
