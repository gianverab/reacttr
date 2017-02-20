import React, { Component } from 'react'
import style from './profile-bar.css'

class ProfileBar extends Component{
  constructor() {
    super()
  }

  render () {
    return (
      <div className={style.root}>
        <figure>
          <img src={this.props.picture} alt={this.props.username} className={style.picture} />
        </figure>
        <span className={style.username}>Hello @{this.props.username}!</span>
        <button onClick={this.props.onOpenText} className={style.button}>
          <span className='fa fa-lg fa-edit'></span> Tweet!
        </button>
      </div>
    )
  }
}

export default ProfileBar
