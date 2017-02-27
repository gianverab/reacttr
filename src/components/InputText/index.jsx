import React, { Component } from 'react'
import style from './input-text.css'

class InputText extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className={style.root}>
        <form className={style.form} onSubmit={this.props.onSendText}>
          <textarea name="text"
                    className={style.text}
                    defaultValue={(this.props.usernameToReply) ? `@${this.props.usernameToReply} ` : ''} >
          </textarea>
          <div className={style.buttons}>
            <button className={style.close} onClick={this.props.onCloseText}>Close</button>
            <button className={style.send} type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }
}

export default InputText
