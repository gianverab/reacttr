import React from 'react'
import { Link } from 'react-router'
import style from './header.css'

function Header () {
	return (
		<header className={style.root}>
			<Link to='/'>
				<h1 className={style.logo}>Reacttr</h1>
			</Link>
		</header>
	)
}

export default Header
