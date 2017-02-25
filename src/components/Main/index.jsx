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
			messages: []
		}
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
	}
	handleOpenText (event) {
		event.preventDefault()
		this.setState({ openText: true })
	}
  handleCloseText (event) {
		event.preventDefault()
		this.setState({ openText: false })
	}
  handleSendText (event) {
		event.preventDefault()
    let newMessage = {
      id: uuID.v4(),
      date: Date.now(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.fullName,
      avatar: this.props.user.photoURL,
      text: event.target.text.value
    }
    this.setState({
      openText: false,
      messages: this.state.messages.concat([newMessage])
    })
	}
	renderOpenText () {
		if (this.state.openText) {
			return (
        <InputText
          onCloseText={this.handleCloseText}
          onSendText={this.handleSendText}
        />
      )
		}
	}
	render () {
		return (
			<div>
				<ProfileBar
					picture={this.props.user.photoURL}
					username={this.props.user.email.split('@')[0]}
					onOpenText={this.handleOpenText}
				/>
				{this.renderOpenText()}
				<MessageList messages={this.state.messages} />
			</div>
		)
	}
}

export default Main
