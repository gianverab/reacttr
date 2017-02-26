import React, { Component } from 'react'
import uuID from 'uuid'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets : [] }, { favorites: [] }),
			openText: false,
			messages: [{
        id: uuID.v4(),
				text: 'Tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 180000,
        retweets: 0,
        favorites: 0
			},
			{
        id: uuID.v4(),
				text: 'An older tweet message',
				avatar: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
				displayName: 'Gian Vera',
				username: 'gianvera',
				date: Date.now() - 1800000,
        retweets: 0,
        favorites: 0
			}]
		}
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
	}

  handleRetweet (msgId) {
    let alreadyRetweetd = this.state.user.retweets.filter(rt => rt === msgId)

    if(alreadyRetweetd.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.retweets++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleFavorite (msgId) {
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

    if(alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.favorites++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
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
				<MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite} />
			</div>
		)
	}
}

export default Main
