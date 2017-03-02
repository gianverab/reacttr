import React, { PropTypes } from 'react'
import style from './input-text.css'

const propTypes = {
  onSendText: PropTypes.func.isRequired,
  onCloseText: PropTypes.func.isRequired,
  usernameToReply: PropTypes.string.isRequired
}

function InputText ({ onSendText, onCloseText, usernameToReply }) {
  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={onSendText}>
        <textarea name='text'
          className={style.text}
          defaultValue={(usernameToReply) ? `@${usernameToReply} ` : ''} >
        </textarea>
        <div className={style.buttons}>
          <button className={style.close} onClick={onCloseText}>Close</button>
          <button className={style.send} type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

InputText.propTypes = propTypes

export default InputText
