import React, { Component } from 'react'
import style from './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={style.root}>
        <p className={style.text}>
          Necesitas loguearte con tu cuenta de Github
          para poder leer y escribir mensajes.
        </p>
        <button
          className={style.button}
          onClick={this.props.onAuth}
        >
          <span className='fa fa-github'></span> Login con Github
        </button>
      </div>
    )
  }
}

export default Login
