import React, { PropTypes } from 'react'
import Message from '../Message'
import style from './message-list.css'

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRetweet: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onReplyTweet: PropTypes.func.isRequired
}

function MessageList ({ messages, onRetweet, onFavorite, onReplyTweet }) {
  return (
    <div className={style.root}>
      {messages.map((msg) => {
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
            onRetweet={() => onRetweet(msg.id)}
            onFavorite={() => onFavorite(msg.id)}
            onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
          />
        )
      }).reverse()}
    </div>
  )
}

MessageList.propTypes = propTypes

export default MessageList
