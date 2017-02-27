import React, { Component } from 'react'
import Message from '../Message'
import style from './message-list.css'

class MessageList extends Component {
  constructor (props) {
    super(props)

  }
  render () {
    return (
      <div className={style.root}>
        {this.props.messages.map((msg) => {
          return (
            <Message
              key={msg.id}
              text={msg.text}
              avatar={msg.avatar}
              displayName={msg.displayName}
              username={msg.username}
              date={msg.date}
              numRetweets={msg.retweets}
              numFavorites={msg.favorites}
              onRetweet={() => this.props.onRetweet(msg.id)}
              onFavorite={() => this.props.onFavorite(msg.id)}
              onReplyTweet={() => this.props.onReplyTweet(msg.id, msg.username)}
            />
          )
        }).reverse()}
      </div>
    )
  }
}

export default MessageList
