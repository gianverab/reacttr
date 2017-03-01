import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './header.css'

class Header extends Component {
	render () {
		let home = '/'

		return (
			<header className={style.root}>
				<Link to={home}>
					<h1 className={style.logo}>Reacttr</h1>
				</Link>
			</header>
		)
	}
}

export default Header
