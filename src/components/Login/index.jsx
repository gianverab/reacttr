import React, { PropTypes } from 'react'
import style from './login.css'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

function Login ({ onAuth }) {
  return (
    <div className={style.root}>
      <p className={style.text}>
        Necesitas loguearte con tu cuenta de Github
        para poder leer y escribir mensajes.
      </p>
      <button className={style.button}
        onClick={onAuth}>
        <span className='fa fa-github'></span> Login con Github
      </button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
