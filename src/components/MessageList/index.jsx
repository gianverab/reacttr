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
            />
          )
        })}
      </div>
    )
  }
}

export default MessageList
