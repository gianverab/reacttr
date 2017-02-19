import React, { Component } from 'react'

class ProfileBar extends Component{
  constructor() {
    super()
  }

  render () {
    return (
      <div>{this.props.username}</div>
    )
  }
}

export default ProfileBar
