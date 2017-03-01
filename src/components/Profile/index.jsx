import React, { Component } from 'react'
import style from './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={style.root}>
        <img className={style.avatar}
             src={this.props.picture}
             alt={`${this.props.displayName} picture`}
        />
        <span className={style.name}>{this.props.displayName}</span>
        <ul className={style.data}>
          <li>
            <span className='fa fa-user'></span> {this.props.username}
          </li>
          <li>
            <span className='fa fa-envelope'></span> {this.props.email}
          </li>
          <li>
            <span className='fa fa-map-marker'></span> {this.props.location}
          </li>
        </ul>
      </div>
    )
  }
}

export default Profile
