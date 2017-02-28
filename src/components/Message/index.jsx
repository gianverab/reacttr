import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import style from './message.css'

class Message extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pressRetweet: false,
      pressFavorite: false
    }
    this.onPressRetweet = this.onPressRetweet.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
  }

  onPressReplyTweet () {
    this.props.onReplyTweet()
  }

  onPressFavorite () {
    this.props.onFavorite()
    this.setState({
      pressFavorite: true
    })
  }

  onPressRetweet () {
    this.props.onRetweet()
    this.setState({
      pressRetweet: true
    })
  }

  render () {
    let dateFormat = moment(this.props.date).fromNow()
    let userLink = `/user/${this.props.username}`

    return (
      <div className={style.root}>
        <div className={style.user}>
          <Link to={userLink}>
            <figure>
              <img className={style.avatar} src={this.props.avatar} />
            </figure>
          </Link>
          <span className={style.displayName}>{this.props.displayName}</span>
          <span className={style.username}>@{this.props.username}</span>
          <span className={style.date}>{dateFormat}</span>
        </div>
        <h3 className={style.text}>{this.props.text}</h3>
        <div className={style.buttons}>
          <div className={style.icon}
               onClick={this.props.onReplyTweet}>
            <span className='fa fa-reply'></span>
          </div>
          <div className={(this.state.pressRetweet) ? style.rtGreen : ''}
               onClick={this.onPressRetweet}>
            <span className='fa fa-retweet'></span>
            <span className={style.num}>{this.props.numRetweets}</span>
          </div>
          <div className={(this.state.pressFavorite) ? style.favYellow : ''}
               onClick={this.onPressFavorite}>
            <span className='fa fa-star'></span>
            <span className={style.num}>{this.props.numFavorites}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Message
