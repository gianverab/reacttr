import React, { Component, PropTypes } from 'react'
import uuID from 'uuid'
import firebase from 'firebase'

import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

const propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets : [] }, { favorites: [] }),
			openText: false,
      usernameToReply: '',
			messages: []
		}
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.handleReplyTweet = this.handleReplyTweet.bind(this)
	}

  componentWillMount () {
    const messageRef = firebase.database().ref().child('messages')

    messageRef.on('child_added', snapshot => {
      this.setState({
        messages: this.state.messages.concat(snapshot.val()),
        openText: false
      })
      console.log(this.state.messages)
    })
  }

  handleReplyTweet (msgId, usernameToReply) {
    this.setState({
      openText: true,
      usernameToReply
    })
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
      displayName: this.props.user.displayName,
      avatar: this.props.user.photoURL,
      text: event.target.text.value,
      favorites: 0,
      retweets:0
    }

    const messageRef = firebase.database().ref().child('messages')
    const messageID = messageRef.push()
    messageID.set(newMessage)
  }

  renderOpenText () {
    if (this.state.openText) {
      return (
        <InputText
          onCloseText={this.handleCloseText}
          onSendText={this.handleSendText}
          usernameToReply={this.state.usernameToReply}
        />
      )
    }
  }

  render () {
		return (
			<div>
				<ProfileBar
					picture={this.props.user.photoURL}
					username={this.props.user.displayName.split(' ')[0]}
					onOpenText={this.handleOpenText}
          onLogout={this.props.onLogout}
				/>
				{this.renderOpenText()}
				<MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTweet} />
			</div>
		)
  }
}

Main.propTypes = propTypes

export default Main
