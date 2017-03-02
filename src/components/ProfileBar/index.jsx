import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import style from './profile-bar.css'

const propTypes = {
  picture: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onOpenText: PropTypes.func.isRequired
}

function ProfileBar ({ picture, username, onOpenText }) {
  return (
    <div className={style.root}>
      <Link to='/profile' >
        <figure>
          <img src={picture} alt={username} className={style.picture} />
        </figure>
      </Link>
      <span className={style.username}>Hello @{username}!</span>
      <button onClick={onOpenText} className={style.button}>
        <span className='fa fa-lg fa-edit'></span> Tweet!
      </button>
    </div>
  )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
