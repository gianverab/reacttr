import React, { PropTypes } from 'react'
import style from './profile.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

function Profile ({ picture, displayName, username, email, location }) {
  return (
    <div className={style.root}>
      <img className={style.avatar}
        src={picture}
        alt={`${displayName} picture`}
      />
      <span className={style.name}>{displayName}</span>
      <ul className={style.data}>
        <li>
          <span className='fa fa-user'></span> {username}
        </li>
        <li>
          <span className='fa fa-envelope'></span> {email}
        </li>
        <li>
          <span className='fa fa-map-marker'></span> {location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = propTypes

export default Profile
